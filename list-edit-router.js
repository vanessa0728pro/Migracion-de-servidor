const express = require("express");
const listEditRouter = express.Router();

let tasks = [];

listEditRouter.post("/create", (req, res) => {
  const newTask = {
    id: generateRandomId(),
    isCompleted: false,
    description: req.body.description,
  };
  tasks.push(newTask);
  res.json(newTask);
});

// Ruta para eliminar una tarea por id
listEditRouter.delete("/:id", (req, res) => {
  tasks = tasks.filter((task) => task.id !== req.params.id);
  res.json({ message: "Tarea eliminada exitosamente" });
});

listEditRouter.put("/:id", (req, res) => {
  const taskId = req.params.id;
  const updatedTask = tasks.find((task) => task.id === taskId);

  if (!updatedTask) {
    res.status(404).json({ message: "Tarea no encontrada" });
  } else {
    updatedTask.isCompleted = req.body.isCompleted; // Asume que el campo isCompleted está en el cuerpo de la solicitud
    updatedTask.description = req.body.description; // Asume que la descripción de la tarea está en el cuerpo de la solicitud
    res.json(updatedTask);
  }
});

module.exports = listEditRouter;
