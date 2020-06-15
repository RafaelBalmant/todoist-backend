const connection = require("../database/connection");
const crypto = require("crypto");
const jwt = require("jsonwebtoken");

module.exports = {
  async create(req, res) {
    const { username, password } = req.body;
    if (!username || !password) {
      return res.status(400).json("Usuario ou senha invalidos");
    }
    const user = await connection("users")
      .where("username", username)
      .select("*");
    if (user.length > !0) {
      return res.status(400).json("Usuario ou senha invalidos");
    }
    const encryptPass = crypto.createHmac("sha256", password).digest("hex");
    if (user[0].password !== encryptPass) {
      return res.status(400).json("Usuario ou senha invalidos");
    }
    const token = jwt.sign({ username, user_id: user[0].id }, "secret");
    await connection("users")
      .where("username", username)
      .update("token", token);
    res.json({
      user_id: user[0].id,
      username,
      token,
    });
  },
};
