export const getlogin = (req, res, next) => {
  res.render("auth/login",{
    pageTitle: "Login",
    currentPage: "login",
    isLogedIn : false,
  });
};

export const postlogin = (req, res, next) => {
  // console.log(req.body)
  // req.isLogedIn = true;
  // res.session.isLogedIn("isLogedIn", true);
  req.session.isLogedIn = true;
    res.redirect("/"); 
}

export const postlogout = (req, res, next) => {
  // res.clearCookie("isLogedIn");
  res.cookie("isLogedIn", false);
  res.redirect("/login");
}

