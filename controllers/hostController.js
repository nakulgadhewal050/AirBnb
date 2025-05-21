import Home from "../models/home.js";


export const getAddHome = (req, res, next) => {
  res.render("host/addHome", { 
    pageTitle: "Add Home to airbnb" ,
    currentPage: "addHome",
  });
};

export const getHostHome = (req, res, next) => {
  Home.fetchAll((registeredHomes) => {
    res.render("host/hostHome", {
      pageTitle: "host Home",
      currentPage: "hostHome",
      registeredHomes: registeredHomes,
    });
  });
};




export const postAddHome = (req, res, next) => {
  const { houseName, price, location, rating, photoUrl } = req.body;
  const home = new Home(houseName, price, location, rating, photoUrl);
  home.save();
  res.render("host/homeAdded", { pageTitle: "Home Added Successfully" });
};


