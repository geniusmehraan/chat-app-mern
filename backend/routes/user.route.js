import express from "express";

import { protectRoute } from "../controllers/protectroute.controler.js";
import { userForSidebar } from "../controllers/user.controler.js";

const router = express.Router();

router.get("/users",protectRoute,userForSidebar)

export default router;