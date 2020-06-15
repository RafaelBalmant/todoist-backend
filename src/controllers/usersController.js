const connection = require("../database/connection");
const crypto = require("crypto");

module.exports = {
  async create(req, res) {
    const { name, username, email, password } = req.body;
    const id = crypto.randomBytes(4).toString("HEX");
    const hasPass = crypto.createHmac("sha256", password).digest("hex");
    await connection("users").insert({
      id,
      name,
      username,
      email,
      password: hasPass,
    });
    return res.json("Usuario criado com sucesso");
  },
};
