const express = require("express");
const app = express();
const port = 3000;

const ListaTareas = require("./ListaTareas");
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const agregarTarea = ListaTareas.agregarTarea;
const eliminarTarea = ListaTareas.eliminarTarea;
const completarTarea = ListaTareas.completarTarea;
const mostrarTareas = ListaTareas.mostrarTareas;
const mostrarMenu = ListaTareas.mostrarMenu;

app.use(express.json());

app.get("/tasks", (req, res) => {
  res.json(ListaTareas.tareas);
});

const listViewRouter = require("./list-view-router");
const listEditRouter = require("./list-edit-router");

app.use(express.json());

app.get("/tasks", (req, res) => {
  res.json(ListaTareas.tareas);
});

app.use("/list-view", listViewRouter);
app.use("/list-edit", listEditRouter);

app.listen(port, () => {
  console.log(`Servidor en funcionamiento en http://localhost:${port}`);
});
module.exports = app;
