import express from "express";

import { searchUser } from "../controllers/searchController";

const router = express.Router();

router.get("/search/user", searchUser);

export default router;
