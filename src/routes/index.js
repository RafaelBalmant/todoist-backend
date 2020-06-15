const allRoutes = require("express").Router();
const users = require("./users");
const tasks = require("./tasks");
const auth = require("./auth");

allRoutes.use(users, tasks, auth);

module.exports = allRoutes;
