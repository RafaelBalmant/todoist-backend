const connection = require("../database/connection");
const crypto = require("crypto");

const jwt = require("jsonwebtoken");

module.exports = {
  async create(req, res) {
    const { title, description } = req.body;
    const { userId } = req.params;
    const taskId = crypto.randomBytes(4).toString("HEX") + "0000" + userId;
    await connection("tasks").insert({
      id: taskId,
      title,
      description,
      user_id: userId,
    });
    return res.json("Tarefa criada com sucesso");
  },

  async update(req, res) {
    const { title, description } = req.body;
    const { taskId } = req.params;
    const { token } = req.headers;
    const decode = jwt.decode(token);
    await connection("tasks")
      .where("id", taskId)
      .update({
        user_id: decode.user_id,
        title: title || null,
        description: description || null,
      });
    return res.json("Tarefa atualizada com sucesso");
  },

  async delete(req, res) {
    const { taskId } = req.params;
    await connection("tasks").where("id", taskId).del();
    return res.json("Tarefa deletada com sucesso");
  },

  async index(req, res) {
    const { userId } = req.params;
    const tasks = await connection("tasks")
      .where("user_id", userId)
      .select("*");
    return res.json(tasks);
  },
};
