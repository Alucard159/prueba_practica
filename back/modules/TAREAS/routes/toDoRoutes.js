const express = require("express");
const router = express.Router();
const auth = require("../../../middlewares/auth");

const toDo = require("../controllers/toDoController");

router.get("/getAll", auth, toDo.getAll);
router.post("/save", auth, toDo.save);
router.put("/updateStatus", auth, toDo.updateStatus);
router.put("/delete", auth, toDo.deleteToDo);

router.use((req, res) => {
  res.status(404).json({ message: "Ruta no encontrada", status: 404 });
});

module.exports = router;
