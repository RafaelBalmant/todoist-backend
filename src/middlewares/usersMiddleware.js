const connection = require("../database/connection");

module.exports = {
  async createUser(req, res, next) {
    const { username, email, password } = req.body;
    const checkExistUser = await connection("users")
      .where("username", username)
      .select("*");
    if (checkExistUser.length > 0) {
      return res.status(400).json("Esse usuario já existe");
    }
    const checkExistEmail = await connection("users")
      .where("email", email)
      .select("*");
    if (checkExistEmail.length > 0) {
      return res.status(400).json("Esse email já está cadastrado");
    }
    if (password.length < 6) {
      return res
        .status(400)
        .json("Sua senha deve conter no minimo 6 caracteres");
    } else next();
  },
};
