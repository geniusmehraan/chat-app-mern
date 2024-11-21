import express from "express";
import { getMessage, sendMessage } from "../controllers/message.controler.js";
import { protectRoute } from "../controllers/protectroute.controler.js";
const router = express.Router();

router.get("/:id",protectRoute,getMessage);
router.post("/send/:id",protectRoute,sendMessage);

export default router;