import express from "express"
import admin from "firebase-admin"  
import cookieParser from "cookie-parser"
import fetch from "node-fetch"
import dotenv from "dotenv"
import cors from "cors"
import pino from "pino"

const logger = pino({
  transport: { target: 'pino-pretty' },
  level: "debug"
})

dotenv.config()

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

app.listen(5000, () => logger.info(" Server running on port 5000"))