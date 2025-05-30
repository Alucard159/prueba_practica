const ToDo = require("../models/toDoModel");

const getAll = async (req, res) => {
  try {
    let toDos = await ToDo.getAll();

    res.json({
      message: "success",
      data: toDos,
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error al obtener las tareas", error: error.message });
  }
};

const save = async (req, res) => {
  try {
    const { title, description, status } = req.body;

    if (!title || !description || !status) {
      return res.status(400).json({
        message: "Faltan datos requeridos: title, description, status",
      });
    }

    const newToDo = new ToDo({
      title,
      description,
      status,
    });

    const savedToDo = await newToDo.save();

    res.status(201).json({
      message: "Tarea creada exitosamente",
      data: savedToDo,
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error al crear la tarea", error: error.message });
  }
};

const updateStatus = async (req, res) => {
  try {
    const { id, status } = req.body;

    if (!id || !status) {
      return res.status(400).json({
        message: "Faltan datos requeridos: id, status",
      });
    }

    const toDo = new ToDo({ id, status });
    await toDo.updateStatus(status);

    res.json({
      message: "Estado de la tarea actualizado exitosamente",
      data: toDo,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error al actualizar el estado de la tarea",
      error: error.message,
    });
  }
};

const deleteToDo = async (req, res) => {
  try {
    const { id } = req.body;

    if (!id) {
      return res.status(400).json({
        message: "Falta el dato requerido: id",
      });
    }

    const toDo = new ToDo({ id });
    await toDo.delete();

    res.json({
      message: "Tarea eliminada exitosamente",
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error al eliminar la tarea", error: error.message });
  }
};

module.exports = {
  getAll,
  save,
  updateStatus,
  deleteToDo,
};
