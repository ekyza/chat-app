import { Request, Response } from "express";

import { selectUserByUsername } from "../services/searchService";

export const searchUser = async (req: Request, res: Response) => {
  try {
    const searchQuery = req.query;
    const username = `%${searchQuery.username}%`;
    const result = await selectUserByUsername(username);

    if (result.length === 0) {
      return res.status(404).json({
        statusCode: res.statusCode,
        message: "User not found",
      });
    }

    return res.status(200).json({
      statusCode: res.statusCode,
      message: "User found",
      data: result,
    });
  } catch (error) {
    return res.status(500).json({
      statusCode: res.statusCode,
      message: "Internal server error",
    });
  }
};
