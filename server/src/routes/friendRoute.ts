import express from "express";

import { friendRequest, friendAccept, friendReject, friendDelete } from "../controllers/friendController";

const router = express.Router();

router.post("/friend/request", friendRequest);
router.post("/friend/accept", friendAccept);
router.delete("/friend/reject", friendReject);
router.delete("/friend/delete", friendDelete);

export default router;
