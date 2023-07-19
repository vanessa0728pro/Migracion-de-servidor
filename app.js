const express = require("express");
const app = express();
const port = 3000;

const tasks = [
  {
    id: "123456",
    isCompleted: false,
    description: "Walk the dog",
  },
  {
    id: "234567",
    isCompleted: false,
    description: "Read a book",
  },
  {
    id: "345678",
    isCompleted: true,
    description: "Study english",
  },
];

app.get("/tasks", (req, res) => {
  res.json(tasks);
});

app.listen(port, () => {
  console.log(`Servidor en funcionamiento en http://localhost:${port}`);
});
