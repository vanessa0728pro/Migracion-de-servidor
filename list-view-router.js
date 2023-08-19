const express = require("express");
const listViewRouter = express.Router();

const tasks = [];

listViewRouter.get("/completed", (req, res) => {
  const completedTasks = tasks.filter((task) => task.isCompleted);
  res.json(completedTasks);
});

listViewRouter.get("/incomplete", (req, res) => {
  const incompleteTasks = tasks.filter((task) => !task.isCompleted);
  res.json(incompleteTasks);
});

module.exports = listViewRouter;
