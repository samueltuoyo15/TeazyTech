import express from "express"
import admin from "firebase-admin"
import cookieParser from "cookie-parser"
import fetch from "node-fetch"
import dotenv from "dotenv"
import cors from "cors"
dotenv.config()

const app = express()
app.use(cors({ origin: true, credentials: true }))
app.use(express.json())
app.use(cookieParser())

admin.initializeApp({
  credential: admin.credential.cert(JSON.parse(process.env.FIREBASE_ADMIN_CREDENTIALS))
})

const FIREBASE_API_KEY = process.env.FIREBASE_API_KEY

app.post("/api/admin/login", async (req, res) => {
  const { email, password } = req.body

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
      return res.status(401).json({ error: "Invalid credentials" })
    }

    const user = await admin.auth().getUser(data.localId)
    const isAdmin = user.customClaims?.admin === true

    if (!isAdmin) {
      return res.status(403).json({ error: "Access denied: Not an admin" })
    }

    res.cookie("accessToken", data.idToken, {
      httpOnly: true,
      secure: true,
      maxAge: 3600 * 1000,
      sameSite: "strict"
    })

    res.json({
      uid: data.localId,
      email: user.email,
      isAdmin: true
    })
  } catch (error) {
    res.status(500).json({ error: "Login failed" })
  }
})

app.get("/api/admin/me", async (req, res) => {
  const token = req.cookies.accessToken
  if (!token) return res.status(401).json({ error: "Unauthorized" })

  try {
    const decoded = await admin.auth().verifyIdToken(token)
    const user = await admin.auth().getUser(decoded.uid)

    res.json({
      uid: user.uid,
      email: user.email,
      isAdmin: user.customClaims?.admin === true
    })
  } catch (error) {
    res.status(401).json({ error: "Invalid token" })
  }
})

app.post("/api/admin/logout", (req, res) => {
  res.clearCookie("accessToken")
  res.redirect("http://localhost:3000/login")
})

app.listen(5000, () => console.log("Backend running on port 5000"))