import { Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import { insertAuth, selectAuth } from "../services/authService";

export const signUp = async (req: Request, res: Response) => {
  try {
    const { username, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const result = await insertAuth(username, hashedPassword);
    const token = jwt.sign(result, process.env.JWT_ACCESS_TOKEN_SECRET, { expiresIn: 7200 });

    return res.status(201).json({
      statusCode: res.statusCode,
      message: "User signed up successfully",
      user: result,
      token,
    });
  } catch (error) {
    if (error.code === "23505") {
      return res.status(409).json({
        statusCode: res.statusCode,
        message: "Username already exists",
      });
    }

    return res.status(500).json({
      statusCode: res.statusCode,
      message: "Internal server error",
    });
  }
};

export const signIn = async (req: Request, res: Response) => {
  try {
    const { username, password } = req.body;
    const result = await selectAuth(username);

    if (result === undefined) {
      return res.status(401).json({
        statusCode: res.statusCode,
        message: "Invalid credentials",
      });
    }

    const hashedPassword = result.password;
    const passwordMatch = bcrypt.compareSync(password, hashedPassword);

    if (passwordMatch === false) {
      return res.status(401).json({
        statusCode: res.statusCode,
        message: "Invalid credentials",
      });
    }

    const token = jwt.sign(result, process.env.JWT_ACCESS_TOKEN_SECRET, { expiresIn: 7200 });

    return res.status(200).json({
      statusCode: res.statusCode,
      message: "User signed in successfully",
      user: result,
      token,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      statusCode: res.statusCode,
      message: "Internal server error",
    });
  }
};
