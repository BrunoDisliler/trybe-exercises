module.exports = (req, res, next) => {
  const { password } = req.body;
  if (!/^[0-9]{4,8}$/.test(password)) {
    return res.status(400).json({ message: "invalid password format" })
  }
  next();
};