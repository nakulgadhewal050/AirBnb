// hostRouter.js (ESM)

import express from "express";

const hostRouter = express.Router();

import { getAddHome,postAddHome, getHostHome, getEditHome, postEditHome, postDeleteHome } from "../controllers/hostController.js";

hostRouter.get("/add-home", getAddHome);
hostRouter.post("/add-home", postAddHome);
hostRouter.get("/host-home", getHostHome);
hostRouter.get("/edit-home/:homeId", getEditHome);
hostRouter.post("/edit-home", postEditHome); 
hostRouter.post("/delete-home/:homeId", postDeleteHome);

export default hostRouter;


