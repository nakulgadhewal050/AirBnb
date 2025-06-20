import express from "express";
const authRouter = express.Router();

import { getlogin,postlogin,postlogout } from "../controllers/authController.js";


authRouter.get("/login", getlogin);
authRouter.post("/login", postlogin);
authRouter.post("/logout", postlogout);


export default authRouter;


