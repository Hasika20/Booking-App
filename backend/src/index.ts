import express, { Request, Response } from "express"
import cors from "cors"
import mongoose from "mongoose"
import dotenv from "dotenv"

// Explicitly load .env file
dotenv.config()

const mongoUri = process.env.MONGO_CONNECTION_STRING

if (!mongoUri) {
	throw new Error("MONGO_CONNECTION_STRING is not defined")
}

mongoose
	.connect(mongoUri)
	.then(() => console.log("MongoDB connected"))
	.catch((err) => console.error("MongoDB connection error:", err))

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

app.get("/api/test", async (req: Request, res: Response) => {
	res.json({ message: "Hello from express end point!" })
})

app.listen(3000, () => {
	console.log("Server is running on localhost:3000")
})
