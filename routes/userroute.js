const express = require("express");
const UserController = require("../controllers/usercontroller")

const route = express.Router();

route.get("/",UserController.Get);
route.post("/",UserController.Post)

module.exports = route;
