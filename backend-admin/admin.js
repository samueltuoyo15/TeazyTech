import dotenv from "dotenv"
dotenv.config()
import express from "express"
import admin from "firebase-admin"  
import cookieParser from "cookie-parser"
import fetch from "node-fetch"
import cors from "cors"
import pino from "pino"
import Joi from "joi"

const postSchema = Joi.object({
  title: Joi.string().required().min(1).max(100),
  excerpt: Joi.string().required().min(1).max(200),
  content: Joi.string().required().min(1),
  category: Joi.string().valid("tech", "general", "business", "entertainment", "health").required(),
  published_date: Joi.date().iso(),
  status: Joi.string().valid("draft", "published").required(),
  thumbnail: Joi.string().uri().required()
})

const logger = pino({
  transport: { target: "pino-pretty" },
  level: "debug"
})

const app = express()
app.use(cors({
  origin: "http://localhost:3000",
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"]
}))

app.use(express.json())
app.use(cookieParser())

logger.info("Initializing Firebase Admin SDK...")

let db
try {
  const credentials = JSON.parse(process.env.FIREBASE_ADMIN_CREDENTIALS)
  admin.initializeApp({ credential: admin.credential.cert(credentials) })
  db = admin.firestore()
  logger.info("Firebase Admin initialized successfully")
} catch (err) {
  logger.error("Failed to initialize Firebase Admin", err)
  process.exit(1)
}

const FIREBASE_API_KEY = process.env.FIREBASE_API_KEY
if (!FIREBASE_API_KEY) {
  logger.error("Missing FIREBASE_API_KEY in .env")
  process.exit(1)
}

const updateUserStats = async (userId, amount) => {
  const userRef = db.collection("user").doc(userId)
  await db.runTransaction(async (transaction) => {
    const userDoc = await transaction.get(userRef)
    if (!userDoc.exists) throw new Error("User document not found")
    
    const currentTotal = userDoc.data().total_posts || 0
    transaction.update(userRef, {
      total_posts: currentTotal + amount
    })
  })
}

app.post("/api/admin/login", async (req, res) => {
  const { email, password } = req.body
  logger.info("Login attempt", { email })

  try {
    const response = await fetch(
      `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${FIREBASE_API_KEY}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password, returnSecureToken: true })
      }
    )
    
    const data = await response.json()
    if (data.error) {
      logger.warn("Firebase auth error", data.error)
      return res.status(401).json(data.error)
    }

    const user = await admin.auth().getUser(data.localId)
    const isAdmin = user.customClaims?.admin === true

    if (!isAdmin) {
      logger.warn("Admin access denied", { uid: user.uid })
      return res.status(403).json({ 
        error: "Admin access denied",
        uid: user.uid,
        email: user.email
      })
    }

    const userDoc = await db.collection("user").doc(user.uid).get()
    if (!userDoc.exists) {
      logger.error("Missing user document", { uid: user.uid })
      return res.status(404).json({
        error: "User document not found",
        uid: user.uid
      })
    }

    const userData = userDoc.data()
    res.cookie("accessToken", data.idToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 3600 * 1000,
      path: "/",
      sameSite: "lax"
    })

    return res.json({
      uid: user.uid,
      email: user.email,
      ...userData
    })

  } catch (error) {
    logger.error("Login failed", error)
    return res.status(500).json({
      error: "Login failed",
      message: error.message
    })
  }
})

app.get("/api/admin/me", async (req, res) => {
  const token = req.cookies.accessToken
  if (!token) return res.status(401).json({ error: "Unauthorized" })

  try {
    const decoded = await admin.auth().verifyIdToken(token)
    const user = await admin.auth().getUser(decoded.uid)
    const userDoc = await db.collection("user").doc(user.uid).get()

    if (!userDoc.exists) {
      return res.status(404).json({ error: "User document not found" })
    }

    return res.json({
      uid: user.uid,
      email: user.email,
      ...userDoc.data()
    })

  } catch (error) {
    logger.error("ME endpoint failed", error)
    return res.status(401).json({ 
      error: "Invalid token",
      message: error.message 
    })
  }
})

app.post("/api/admin/logout", (req, res) => {
  res.clearCookie("accessToken")
  return res.json({ message: "Logged out" })
})

app.post("/api/admin/create-post", async (req, res) => {
  const token = req.cookies.accessToken
  logger.debug("Create post request received", { 
    headers: req.headers,
    cookies: req.cookies,
    body: req.body 
  })

  if (!token) {
    logger.warn("Unauthorized create post attempt - No token provided")
    return res.status(401).json({ error: "Unauthorized" })
  }

  try {
    const decoded = await admin.auth().verifyIdToken(token)
    const user = await admin.auth().getUser(decoded.uid)
    const isAdmin = user.customClaims?.admin === true

    if (!isAdmin) {
      return res.status(403).json({ error: "Admin access required" })
    }

    const { error, value } = postSchema.validate(req.body, { 
      abortEarly: false,
      allowUnknown: false
    })

    if (error) {
      const errors = error.details.map(detail => ({
        field: detail.path[0],
        message: detail.message.replace(/"/g, ""),
        type: detail.type
      }))
      return res.status(400).json({ errors })
    }

    const postData = {
      ...value,
      author_id: user.uid,
      created_at: admin.firestore.FieldValue.serverTimestamp(),
      updated_at: admin.firestore.FieldValue.serverTimestamp()
    }

    const postRef = await db.collection("posts").add(postData)
    await updateUserStats(user.uid, 1)
    
    return res.status(201).json({
      message: "Post created successfully",
      postId: postRef.id,
      ...postData
    })

  } catch (error) {
    logger.error("Post creation failed", error)
    return res.status(500).json({
      error: "Post creation failed",
      message: error.message
    })
  }
})

app.get("/api/admin/posts", async (req, res) => {
  const token = req.cookies.accessToken
  if (!token) return res.status(401).json({ error: "Unauthorized" })

  try {
    const decoded = await admin.auth().verifyIdToken(token)
    const user = await admin.auth().getUser(decoded.uid)
    const isAdmin = user.customClaims?.admin === true

    if (!isAdmin) return res.status(403).json({ error: "Admin access required" })

    const postsSnapshot = await db.collection("posts").orderBy("published_date", "desc").get()
    const posts = postsSnapshot.docs.map(doc => {
      const data = doc.data()
      const formattedDate = data.published_date ? new Intl.DateTimeFormat("en-GB", {
         day: "numeric",
         month: "long",
         year: "numeric"
      }).format(data.published_date.toDate()) : null
      return {
        id: doc.id,
        ...data,
        published_date: formattedDate
      }
    })

    return res.json(posts)

  } catch (error) {
    logger.error("Failed to fetch posts", error)
    return res.status(500).json({
      error: "Failed to fetch posts",
      message: error.message
    })
  }
})

app.get("/api/admin/posts/:postId", async (req, res) => {
  const token = req.cookies.accessToken
  const postId = req.params.postId

  if (!token) return res.status(401).json({ error: "Unauthorized" })
  if (!postId) return res.status(400).json({ error: "Post ID required" })

  try {
    const decoded = await admin.auth().verifyIdToken(token)
    const user = await admin.auth().getUser(decoded.uid)
    const isAdmin = user.customClaims?.admin === true

    if (!isAdmin) return res.status(403).json({ error: "Admin access required" })

    const postRef = db.collection("posts").doc(postId)
    const postDoc = await postRef.get()

    if (!postDoc.exists) return res.status(404).json({ error: "Post not found" })

    const postData = postDoc.data()
    return res.json({
      id: postId,
      ...postData
    })

  } catch (error) {
    logger.error("Failed to fetch post", error)
    return res.status(500).json({
      error: "Failed to fetch post",
      message: error.message
    })
  }
})

app.put("/api/admin/posts/:postId", async (req, res) => {
  const token = req.cookies.accessToken
  const postId = req.params.postId

  if (!token) return res.status(401).json({ error: "Unauthorized" })
  if (!postId) return res.status(400).json({ error: "Post ID required" })

  try {
    const decoded = await admin.auth().verifyIdToken(token)
    const user = await admin.auth().getUser(decoded.uid)
    const isAdmin = user.customClaims?.admin === true

    if (!isAdmin) return res.status(403).json({ error: "Admin access required" })

    const { error, value } = postSchema.validate(req.body, {
      abortEarly: false,
      allowUnknown: false
    })

    if (error) {
      const errors = error.details.map(detail => ({
        field: detail.path[0],
        message: detail.message.replace(/"/g, ""),
        type: detail.type
      }))
      return res.status(400).json({ errors })
    }

    const postRef = db.collection("posts").doc(postId)
    const postDoc = await postRef.get()

    if (!postDoc.exists) return res.status(404).json({ error: "Post not found" })

    const updateData = {
      ...value,
      updated_at: admin.firestore.FieldValue.serverTimestamp()
    }

    await postRef.update(updateData)
    const updatedPost = (await postRef.get()).data()
    
    return res.json({
      message: "Post updated successfully",
      postId: postId,
      ...updatedPost
    })

  } catch (error) {
    logger.error("Post update failed", error)
    return res.status(500).json({
      error: "Post update failed",
      message: error.message
    })
  }
})

app.delete("/api/admin/posts/:postId", async (req, res) => {
  const token = req.cookies.accessToken
  const postId = req.params.postId

  if (!token) return res.status(401).json({ error: "Unauthorized" })
  if (!postId) return res.status(400).json({ error: "Post ID required" })

  try {
    const decoded = await admin.auth().verifyIdToken(token)
    const user = await admin.auth().getUser(decoded.uid)
    const isAdmin = user.customClaims?.admin === true

    if (!isAdmin) return res.status(403).json({ error: "Admin access required" })

    const postRef = db.collection("posts").doc(postId)
    const postDoc = await postRef.get()

    if (!postDoc.exists) return res.status(404).json({ error: "Post not found" })

    await postRef.delete()
    await updateUserStats(user.uid, -1)
    
    return res.json({ 
      message: "Post deleted successfully",
      postId: postId
    })

  } catch (error) {
    logger.error("Failed to delete post", error)
    return res.status(500).json({
      error: "Failed to delete post",
      message: error.message
    })
  }
})

app.get("/api/admin/posts/category-counts", async (req, res) => {
    const token = req.cookies.accessToken
    if (!token) return res.status(401).json({ error: "Unauthorized" })
 
  try {
    const postsSnapshot = await db.collection("posts").get();
    const counts = {};
    
    postsSnapshot.forEach(doc => {
      const category = doc.data().category;
      counts[category] = (counts[category] || 0) + 1;
    });

    res.json(Object.entries(counts).map(([name, count]) => ({ name, count })));
  } catch (error) {
    res.status(500).json({ error: "Failed to get category counts" });
  }
});
app.listen(5000, () => logger.info("Server running on port 5000"))