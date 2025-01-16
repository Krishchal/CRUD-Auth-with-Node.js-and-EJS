import express from "express";
import { loginValidation,passResetValidation,signupValidation} from "../middlewares/authValidation.js";
import { login, resetPassword, signup } from "../controllers/authController.js";

const route = express.Router();

route.post("/login",loginValidation,login);
route.post("/signup",signupValidation,signup);
route.put("/resetPassword",passResetValidation, resetPassword); 

export default route;