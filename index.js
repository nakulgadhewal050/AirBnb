import path from "path";
import express from "express";
import storeRouter from "./routes/storeRouter.js";
import hostRouter from "./routes/hostRouter.js";
import authRouter from "./routes/authRouter.js";
import { error } from "./controllers/error.js";
import mongoose from "mongoose";
import session from "express-session";

const PORT = 3000;
const app = express();
const rootDir = path.resolve();

app.set("view engine", "ejs");
app.set("views", "views");

app.use(express.urlencoded());

app.use(session({
  secret: "mysecret",
  resave: false,
  saveUninitialized: true,
}))

app.use((req, res, next) => {
  
  req.session.isLogedIn = req.get("session") ? req.get("session").split("=")[1] === "true" : false;
  next();
})

app.use(storeRouter);
app.use(authRouter);

app.use("/host", (req,res,next) => {
  if (req.isLogedIn){
    next();
  }
  else {
    res.redirect("/login");
  }
});

app.use("/host", hostRouter);
app.use(express.static(path.join(rootDir, "public")));
app.use(error);


const DB_Path =
  "mongodb+srv://nakulgadhewal050:nakul123@practice.5sptpaw.mongodb.net/airbnb?retryWrites=true&w=majority&appName=practice";

mongoose
  .connect(DB_Path)
  .then(() => {
    console.log("Connected to MongoDB successfully");
    app.listen(PORT, () => {
      console.log(`Server running on address http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.log("Error connecting to MongoDB:", err);
  });
