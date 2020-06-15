const express = require("express");
const userController = require("../controllers/usersController");
const middleWareUser = require("../middlewares/usersMiddleware");
const routerSession = express.Router();

routerSession.post("/users", middleWareUser.createUser, userController.create);

module.exports = routerSession;
