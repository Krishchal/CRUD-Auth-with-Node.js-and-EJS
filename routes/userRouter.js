import express from "express";

import { deleteUser, getAllUsers } from "../controllers/userController.js";

const route = express.Router();

route.get("/allUsers",getAllUsers);
route.delete("/deleteUser",deleteUser);


export default route;