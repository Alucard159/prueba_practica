const express = require("express");
const router = express.Router();
const auth = require("../../../middlewares/auth");

const product = require("../controllers/productController");

router.get("/getAll", auth, product.getAll);

router.use((req, res) => {
  res.status(404).json({ message: "Ruta no encontrada", status: 404 });
});

module.exports = router;
