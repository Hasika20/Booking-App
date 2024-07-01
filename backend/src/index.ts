import express, { Request, Response } from "express"
import cors from "cors"
import mongoose from "mongoose"
import dotenv from "dotenv"
import userRoutes from "./routes/users"

dotenv.config()

mongoose
	.connect(process.env.MONGO_CONNECTION_STRING as string)
	.then(() => console.log("Connected to MongoDB"))
	.catch((err) => console.error("Failed to connect to MongoDB", err))

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

app.use("/api/users", userRoutes)

app.listen(3000, () => {
	console.log("Server is running on localhost:3000")
})
