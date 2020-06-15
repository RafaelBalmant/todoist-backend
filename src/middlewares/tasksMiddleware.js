const connection = require("../database/connection");

module.exports = {
  async createTask(req, res, next) {
    const { userId } = req.params;
    const checkId = await connection("users").where("id", userId).select("*");
    checkId.length === 0
      ? res.status(400).json("Esse usuario não existe")
      : next();
  },

  async updateTask(req, res, next) {
    const { taskId } = req.params;
    const checkId = await connection("tasks").where("id", taskId).select("*");
    checkId.length === 0
      ? res.status(400).json("Essa tarefa não existe")
      : next();
  },
  
};
