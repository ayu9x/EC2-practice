const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

let tasks = [];

// Get tasks
app.get("/tasks", (req, res) => {
  res.json(tasks);
});

// Add task
app.post("/tasks", (req, res) => {
  const task = req.body.task;
  tasks.push(task);
  res.json({ message: "Task added" });
});

// Delete task
app.delete("/tasks/:index", (req, res) => {
  const index = req.params.index;
  tasks.splice(index, 1);
  res.json({ message: "Task deleted" });
});

app.listen(5000, () => console.log("Server running on port 5000"));