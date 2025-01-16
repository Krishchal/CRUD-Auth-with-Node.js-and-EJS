import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

import authRouter from "./routes/authRouter.js";
import userRouter from "./routes/userRouter.js";
import viewsRouter from "./routes/viewsRouter.js";
import connectDB from "./config/db.js";

const app = express();
dotenv.config();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

// Configure EJS
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Database connection
connectDB();

// Routes
app.use("/", viewsRouter); // Handles frontend pages
app.use("/api/v1/auth", authRouter); // Authentication APIs
app.use("/api/v1/users", userRouter); // User APIs


const PORT = process.env.PORT || 8002;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});



