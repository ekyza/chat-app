import { Request, Response } from "express";

import { insertFriendRequest, insertFriend, deleteFriendRequest, deleteFriend } from "../services/friendService";
import { insertNewRoom } from "../services/roomService";
import { insertParticipant } from "../services/participantService";

export const friendRequest = async (req: Request, res: Response) => {
  try {
    const { userId, friendId } = req.body;

    await insertFriendRequest(userId, friendId);

    return res.status(200).json({
      statusCode: res.statusCode,
      message: "Friend request successfully sent",
    });
  } catch (error) {
    return res.status(500).json({
      statusCode: res.statusCode,
      message: "Internal server error",
    });
  }
};

export const friendAccept = async (req: Request, res: Response) => {
  try {
    const { userId, friendId } = req.body;

    await insertFriend(userId, friendId);
    await insertFriend(friendId, userId);
    await deleteFriendRequest(userId, friendId);

    const roomId = await insertNewRoom();

    await insertParticipant(userId, roomId.id);
    await insertParticipant(friendId, roomId.id);

    return res.status(200).json({
      statusCode: res.statusCode,
      message: "Friend added successfully",
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      statusCode: res.statusCode,
      message: "Internal server error",
    });
  }
};

export const friendReject = async (req: Request, res: Response) => {
  try {
    const { userId, friendId } = req.body;

    await deleteFriendRequest(userId, friendId);

    return res.status(200).json({
      statusCode: res.statusCode,
      message: "Friend request rejected successfully",
    });
  } catch (error) {
    return res.status(500).json({
      statusCode: res.statusCode,
      message: "Internal server error",
    });
  }
};

export const friendDelete = async (req: Request, res: Response) => {
  try {
    const { userId, friendId } = req.body;

    await deleteFriend(userId, friendId);
    await deleteFriend(friendId, userId);

    return res.status(200).json({
      statusCode: res.statusCode,
      message: "Friend deleted successfully",
    });
  } catch (error) {
    return res.status(500).json({
      statusCode: res.statusCode,
      message: "Internal server error",
    });
  }
};
