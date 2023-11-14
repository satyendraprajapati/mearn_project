import { User } from "../models/userModel.js";
import bcrypt from "bcrypt";

export const signup = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const hashPassword = bcrypt.hashSync(password, 12);
    const newUser = new User({ username, email, password: hashPassword });
    await newUser.save();
    res.status(201).json({ message: "user created successfully" });
  } catch (error) {
    res.status(501).json({ message: error });
  }
};
