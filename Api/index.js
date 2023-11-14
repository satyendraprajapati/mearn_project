import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
const app = express();
import User from "./routes/userRoute.js";
import DatabseConnection from "./DB/DBConnection.js";

const PORT = process.env.PORT;
app.use(express.json());

app.use("/api/v1", User);
DatabseConnection(
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  })
);

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "somthing went wrong";
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});
