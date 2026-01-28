const express = require("express");
const fs = require("fs");
const path = require("path");
const cors = require("cors");

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Serve frontend files (HTML, JS)
app.use(express.static(path.join(__dirname, "public")));

// Path to JSON storage
const DATA_FILE = path.join(__dirname, "tasks.json");

// Read tasks from JSON file
function readTasks() {
  if (!fs.existsSync(DATA_FILE)) {
    fs.writeFileSync(DATA_FILE, JSON.stringify([]));
  }
  const data = fs.readFileSync(DATA_FILE, "utf-8");
  return JSON.parse(data);
}

// Write tasks to JSON file
function writeTasks(tasks) {
  fs.writeFileSync(DATA_FILE, JSON.stringify(tasks, null, 2));
}

// 👉 API: Get all tasks
app.get("/tasks", (req, res) => {
  const tasks = readTasks();
  res.json(tasks);
});

// 👉 API: Add a new task
app.post("/tasks", (req, res) => {
  const { task } = req.body;

  if (!task) {
    return res.status(400).json({ message: "Task is required" });
  }

  const tasks = readTasks();
  tasks.push({
    id: Date.now(),
    task: task
  });

  writeTasks(tasks);
  res.json({ message: "Task added successfully" });
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
