import express from "express";
const storeRouter = express.Router();

import { getHomes, getBookings, getfavourite, getreserve, getIndex, getHomesId} from "../controllers/storeController.js";


storeRouter.get("/", getIndex);
storeRouter.get("/bookings", getBookings);
storeRouter.get("/favourite", getfavourite);
storeRouter.get("/reserve", getreserve);
storeRouter.get("/homes", getHomes );
storeRouter.get("/homes/:homeId", getHomesId)

export default storeRouter;


