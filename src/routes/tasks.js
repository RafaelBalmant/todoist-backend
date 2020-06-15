const express = require("express");
const tasksController = require("../controllers/tasksController");
const middleWareTask = require("../middlewares/tasksMiddleware");
const middleWareAuth = require("../middlewares/authMiddleware");

const routerSession = express.Router();

routerSession.post(
  "/tasks/:userId",
  middleWareAuth.validate,
  middleWareTask.createTask,
  tasksController.create
);

routerSession.get(
  "/tasks/:userId",
  middleWareAuth.validate,
  middleWareTask.createTask,
  tasksController.index
);

routerSession.put(
  "/tasks/:taskId",
  middleWareAuth.validate,
  middleWareTask.updateTask,
  tasksController.update
);

routerSession.delete(
  "/tasks/:taskId",
  middleWareAuth.validate,
  middleWareTask.updateTask,
  tasksController.delete
);

module.exports = routerSession;
