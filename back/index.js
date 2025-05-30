const express = require("express");
const cors = require("cors");
const app = express();
const port = 3001;

const clientRoutes = require("./modules/CLIENTS/routes/clientsRoutes");
const productRoutes = require("./modules/PRODUCTS/routes/productsRoutes");
const toDosRoutes = require("./modules/TAREAS/routes/toDoRoutes");

require("dotenv").config();

app.use(
  cors({
    origin: "http://localhost:5174",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use(express.json());

app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto ${port}`);
});

app.use("/CLIENTS", clientRoutes);
app.use("/PRODUCTS", productRoutes);
app.use("/TAREAS", toDosRoutes);

app.use((req, res) => {
  res.status(404).json({ message: "Ruta no encontrada" });
});
