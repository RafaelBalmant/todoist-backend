const jwt = require("jsonwebtoken");

module.exports = {
  async validate(req, res, next) {
    const { token } = await req.headers;
    const decode = jwt.decode(token);
    if (decode) {
      console.log("teste");
      return next();
    }
    return res.status(400).json("token inválido");
  },
};
