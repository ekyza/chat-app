import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";

export const isAuthenticated = (req: Request, res: Response, next: NextFunction) => {
  const accessToken = req.headers.authorization;

  if (accessToken === undefined) {
    return res.status(401).json({
      status: 401,
      message: "Unauthorized user",
    });
  }

  const token = accessToken.split(" ")[1];

  jwt.verify(token, process.env.JWT_ACCESS_TOKEN_SECRET, (error, user) => {
    if (error) {
      return res.status(403).json({
        status: 403,
        message: "Invalid access token",
      });
    }

    next();
  });
};
