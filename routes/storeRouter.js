import express from "express";
const storeRouter = express.Router();

import { getHomes, getBookings, getfavourite, postFavourite, getIndex, getHomesId, postDeleteFavourite} from "../controllers/storeController.js";


storeRouter.get("/", getIndex);
storeRouter.get("/bookings", getBookings);
storeRouter.get("/favourite", getfavourite);
storeRouter.get("/homes", getHomes );
storeRouter.get("/homes/:homeId", getHomesId)
storeRouter.post("/favourite", postFavourite);
storeRouter.post("/favourite/delete/:homeId", postDeleteFavourite);

export default storeRouter;


