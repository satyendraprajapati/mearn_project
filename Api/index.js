import dotenv from "dotenv";
dotenv.config();
import express from "express";
import DatabseConnection from "./DB/DBConnection.js";

const PORT = process.env.PORT;
const app = express();

DatabseConnection(
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  })
);
