import Home from "../models/home.js";

export const getHomes = (req, res, next) => {
  Home.fetchAll((registeredHomes) => {
    res.render("store/home_lists", {
      registeredHomes: registeredHomes,
      pageTitle: "airbnb Home",
      currentPage: "Home",
    });
  });
};
export const getIndex = (req, res, next) => {
  Home.fetchAll((registeredHomes) => {
    res.render("store/index", {
      pageTitle: "airbnb Home",
      currentPage: "index",
      registeredHomes: registeredHomes,
    });
  });
};

export const getBookings = (req, res, next) => {
  Home.fetchAll((registeredHomes) => {
    res.render("store/bookings", {
      pageTitle: " bookings",
      currentPage: "bookings",
        registeredHomes: registeredHomes, 

    });
  });
};

export const getfavourite = (req, res, next) => {
  Home.fetchAll((registeredHomes) => {
    res.render("store/favourite", {
      pageTitle: " favourite",
      currentPage: "favourite",
      registeredHomes: registeredHomes,
    });
  });
};
export const getreserve = (req, res, next) => {
    res.render("store/reserve", {
      pageTitle: " reserve",
      currentPage: "reserve",
    });
};

export const getHomesId = (req, res, next) => {
  const homeId = req.params.homeId;
  Home.findById(homeId, (home) => {
    if (!home) {
      console.log("Home not found for ID:", homeId);
      return res.redirect("/homes");
    }
    res.render("store/home_details", {
      home: home,
      pageTitle: "Home Detail",
      currentPage: "Home",
    });
  });
};

