import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import authRouter from "./routers/auth.js";
import userRouter from "./routers/users.js";
import movieRouter from "./routers/movies.js";
import listRouter from "./routers/lists.js";

const app = express();

dotenv.config();

mongoose.connect(process.env.MONGOURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(express.json());

/// Routers

app.get("/", (req, res) => {
  res.send("Netflix-backend");
});

app.use("/api/auth", authRouter);
app.use("/api/users", userRouter);
app.use("/api/movies", movieRouter);
app.use("/api/lists", listRouter);

app.listen(5000, () => {
  console.log("Backend is Running");
});
