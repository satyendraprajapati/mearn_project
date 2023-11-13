import dotenv from "dotenv";
dotenv.config();
import express from "express";

const PORT = process.env.PORT;
const app = express();
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
