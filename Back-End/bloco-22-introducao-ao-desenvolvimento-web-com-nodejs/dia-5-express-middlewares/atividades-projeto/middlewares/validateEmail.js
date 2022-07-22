const validator = require('email-validator');

module.exports = (req, res, next) => {
  const { email } = req.body;
  if (!email || validator.validate(email) === false) {
    return res.status(400).json({ message: "invalid email format" });
  }
  next();
};