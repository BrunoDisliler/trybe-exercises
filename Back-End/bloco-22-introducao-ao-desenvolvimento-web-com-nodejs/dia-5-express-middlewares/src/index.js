const express = require("express");
const validateProductName = require("../middlewares/validateProductName");
const validateInfos = require("../middlewares/validateInfos");
const validateSaleDate = require("../middlewares/validateSaleDate");
const validateWarrantyPeriod = require("../middlewares/validateWarrantyPeriod");
const authMiddleware = require('../middlewares/authMiddleware');
const crypto = require("crypto");

const app = express();
app.use(express.json());

app.use((req, _res, next) => {
  console.log("req.method:", req.method);
  console.log("req.path:", req.path);
  console.log("req.params:", req.params);
  console.log("req.query:", req.query);
  console.log("req.headers:", req.headers);
  console.log("req.body:", req.body);
  next();
});

app.post(
  "/sales",
  authMiddleware,
  validateProductName,
  validateInfos,
  validateSaleDate,
  validateWarrantyPeriod,
  (_req, res) => {
    res.status(201).json({ message: "Venda cadastrada com sucesso!" });
  }
);

app.post("/signup", (req, res) => {
  try {
    const { email, password, firstName, phone } = req.body;

    if ([email, password, firstName, phone].includes(undefined)) {
      return res.status(401).json({ message: "missing fields" });
    }

    const token = crypto.randomBytes(8).toString("hex");

    return res.status(200).json({ token });
  } catch (error) {
    return res.status(500).end();
  }
});

app.listen(3005, () => {
  console.log("Ouvindo na porta 3005");
});
