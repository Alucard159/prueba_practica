const express = require("express");
const router = express.Router();
const auth = require("../../../middlewares/auth");

const client = require("../controllers/clientController");

router.post("/save", auth, client.save);

router.use((req, res) => {
  res.status(404).json({ message: "Ruta no encontrada", status: 404 });
});

module.exports = router;
