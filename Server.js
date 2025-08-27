import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import Route from "./Router/Route.js";
import mongoose from "mongoose";


const app = express();
dotenv.config();
const PORT =process.env.PORT || 7000;
const URL = process.env.MONGOURL;

app.use(express.json());
const allowedOrigins = ["http://localhost:5173", "http://localhost:5174", "http://localhost:3001", "http://localhost:3000", "http://localhost:3002", "https://www.gradeup.gradeup01.in"];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true
}));

app.use("/images", express.static("images"));
app.use("/files", express.static("files"));

app.use("/api", Route)

mongoose.connect(URL).then (() => {
    console.log("DB connected successfully");
    app.listen(PORT, () => {
        console.log(`server is running on http://localhost:${PORT}`);
    })
}).catch(error => console.log(error));
