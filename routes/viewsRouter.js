import express from "express";
const route = express.Router();

route.get("/", (req, res) => {
  res.render("login"); // Login Page
});

route.get("/register", (req, res) => {
  res.render("register"); // Registration Page
});

route.get("/dashboard", (req, res) => {
  res.render("partials/dashboard"); // Dashboard
});

route.get("/resetPassword", (req, res) => {
  const user = req.user;
  res.render('resetPassword', { user: user }); // password reset page
});

export default route;
