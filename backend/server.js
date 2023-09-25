import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import foodRouter from "./src/routers/food.router.js";
import userRouter from "./src/routers/user.router.js";
import { DbConnect } from "./src/config/database.config.js";

DbConnect();
const app = express();
app.use(express.json());
app.use(
  cors({
    credentials: true,
    origin: ["http://localhost:3000"],
  })
);

app.use("/api/foods", foodRouter);
app.use("/api/users", userRouter);

const PORT = 5000;
app.listen(PORT, () => {
  console.log("listening on port " + PORT);
});
