const API_URL = "http://localhost:3000/tasks";
const taskList = document.getElementById("taskList");

async function loadTasks() {
  const res = await fetch(API_URL);
  const tasks = await res.json();

  taskList.innerHTML = "";

  tasks.forEach(t => {
    const div = document.createElement("div");
    div.className = "task";
    div.textContent = t.task;
    taskList.appendChild(div);
  });
}

async function addTask() {
  const input = document.getElementById("taskInput");
  const task = input.value.trim();
  if (!task) return;

  await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ task })
  });

  input.value = "";
  loadTasks();
}

document.getElementById("addBtn").addEventListener("click", addTask);
document.getElementById("taskInput").addEventListener("keypress", e => {
  if (e.key === "Enter") addTask();
});

loadTasks();
