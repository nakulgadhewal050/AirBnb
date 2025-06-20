import Home from "../models/home.js";


export const getAddHome = (req, res, next) => {
  res.render("host/edit-home", {
    pageTitle: "Add Home to airbnb",
    currentPage: "addhome",
    editing: false,
    isLogedIn: req.isLogedIn,
  });
};

export const getEditHome = (req, res, next) => {
  const homeId = req.params.homeId;
  const editing = req.query.editing === "true";

  Home.findById(homeId).then(home => {
    if (!home) {
      
      return res.redirect("/host/host-home");
    }

    res.render("host/edit-home", {
      home: home,
      pageTitle: "Edit Home",
      currentPage: "hostHome",
      editing: editing,
      isLogedIn: req.isLogedIn,
    });
  });
};

export const getHostHome = (req, res, next) => {
  Home.find().then(registeredHomes => {
    res.render("host/hostHome", {
      pageTitle: "host Home",
      currentPage: "hostHome",
      registeredHomes: registeredHomes,
      isLogedIn: req.isLogedIn,
    });
  });
};

export const postAddHome = (req, res, next) => {
  const { houseName, price, location, rating, photoUrl, description } = req.body;
  const home = new Home({houseName, price, location, rating, photoUrl, description});
  home.save().then(() => {
    console.log("Home added successfully");
  })
  res.redirect("/");
};

export const postEditHome = (req, res, next) => {
  const { id, houseName, price, location, rating, photoUrl, description } = req.body;
  Home.findById(id).then((home) => {
    home.houseName = houseName;
    home.price = price;
    home.location = location;
    home.rating = rating;
    home.photoUrl = photoUrl;
    home.description = description;
    home.save().then((result) => {
      console.log("home updated successfully");
    }).catch(err => {
      console.log("Error updating home:", err);
    })
    res.redirect("/host/host-home");
  }).catch(error => {
    console.log("Error finding home:", error);
    res.redirect("/host/host-home");
  });
};

export const postDeleteHome = (req, res, next) => {
  const homeId = req.params.homeId;
  Home.findByIdAndDelete(homeId).then(()  => {
    res.redirect("/host/host-home");
  }).catch(error => {
    console.log("Error deleting home:", error);
    
  })
};


