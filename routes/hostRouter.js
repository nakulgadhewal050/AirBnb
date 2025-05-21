// hostRouter.js (ESM)

import express from "express";

const hostRouter = express.Router();

import { getAddHome,postAddHome, getHostHome } from "../controllers/hostController.js";

hostRouter.get("/add-home", getAddHome);
hostRouter.post("/add-home", postAddHome);
hostRouter.get("/host-home", getHostHome);

export default hostRouter;


