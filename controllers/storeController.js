import Home from "../models/home.js";
import Favourite from "../models/favourite.js";

export const getHomes = (req, res, next) => {
 Home.find().then(registeredHomes => {
    res.render("store/home_lists", {
      registeredHomes: registeredHomes,
      pageTitle: "airbnb Home",
      currentPage: "homes",
      isLogedIn: req.isLogedIn,
    });
  });
};

export const getIndex = (req, res, next) => {
  Home.find().then(registeredHomes => {
    res.render("store/index", {
      pageTitle: "airbnb Home",
      currentPage: "airbnb",
      registeredHomes: registeredHomes,
      isLogedIn: req.isLogedIn,
    });
  });
};

export const getBookings = (req, res, next) => {
  Home.find().then(registeredHomes => {
    res.render("store/bookings", {
      pageTitle: " bookings",
      currentPage: "bookings",
      registeredHomes: registeredHomes,
      isLogedIn: req.isLogedIn,
    });
  });
};



export const getfavourite = (req, res, next) => {
  Favourite.find()
    .populate('houseId')
    .then(favourite => {
      const favouriteHomes = favourite.map(fav => fav.houseId);

      res.render("store/favourite", {
        favouriteHomes: favouriteHomes,
        pageTitle: "My Favourites",
        currentPage: "favourite",
        isLogedIn: req.isLogedIn,
      });
    });
};



export const postFavourite = (req, res, next) => {
  const homeId = req.body.id;
  
  Favourite.findOne({ houseId: homeId }).then((fav) => {
    if (fav) {
      console.log("already exists: ", fav);
      return res.redirect("/favourite");
    } else {
       fav = new Favourite({ houseId: homeId });
      fav.save()
        .then((result) => {
          console.log("Home marked as favourite successfully");
        })
        .catch(err => {
          console.log("error while marking favourite: ", err);
        })
        res.redirect("/favourite");
    }
  }).catch(err => {
    console.log("error while marking favourite: ", err);
  });
};

export const getHomesId = (req, res, next) => {
  const homeId = req.params.homeId;
  Home.findById(homeId).then(home => {

    if (!home) {
      console.log("Home not found for ID:", homeId);
      return res.redirect("/homes");
    }
    res.render("store/home_details", {
      home: home,
      pageTitle: "Home Detail",
      currentPage: "Home",
      isLogedIn: req.isLogedIn,
    });
  });
};

export const postDeleteFavourite = (req, res, next) => {
  const homeId = req.params.homeId;
  Favourite.findOneAndDelete({houseId : homeId}).then(result => {
    console.log("Home removed as favourite successfully");
  }).catch(err => {
    console.log("error while removing favourite: ", err);
    }).finally(() => {
      res.redirect("/favourite");
    });
  }

