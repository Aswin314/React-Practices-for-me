import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connect from "./config/Connect.js";
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded());
connect();
app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
