export const error = (req, res, next) => {
  res.status(404)
    .render("404", { 
        pageTitle: "Page Not Found", 
        currentPage: "",
        isLogedIn : req.isLogedIn,
  });
};