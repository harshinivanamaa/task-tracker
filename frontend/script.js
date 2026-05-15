// script.js

const API = "/tasks";

const form = document.getElementById("taskForm");

let allTasks = [];

/* LOAD TASKS */

async function loadTasks() {

  try {

    const res = await fetch(API);

    allTasks = await res.json();

    updateStats();

  } catch (err) {

    console.log("Error loading tasks", err);

  }

}

/* ADD TASK */

form.addEventListener("submit", async (e) => {

  e.preventDefault();

  const title =
    document.getElementById("title").value;

  const subject =
    document.getElementById("subject").value;

  const deadline =
    document.getElementById("deadline").value;

  const priority =
    document.getElementById("priority").value;

  try {

    await fetch(`${API}/add`, {

      method: "POST",

      headers: {
        "Content-Type": "application/json"
      },

      body: JSON.stringify({
        title,
        subject,
        deadline,
        priority
      })

    });

    form.reset();

    loadTasks();

  } catch (err) {

    console.log("Error adding task", err);

  }

});

/* SEARCH */

document
  .getElementById("search")
  .addEventListener("input", (e) => {

    const value =
      e.target.value.toLowerCase();

    const filtered =
      allTasks.filter(task =>
        task.title.toLowerCase().includes(value)
      );

    updateSearchStats(filtered.length);

  });

/* FILTER */

function filterTasks(type) {

  if (type === "all") {

    updateSearchStats(allTasks.length);

    return;

  }

  const filtered =
    allTasks.filter(task =>
      task.status === type
    );

  updateSearchStats(filtered.length);

}

/* STATS */

function updateStats() {

  const total =
    allTasks.length;

  const completed =
    allTasks.filter(task =>
      task.status === "completed"
    ).length;

  const pending =
    allTasks.filter(task =>
      task.status === "pending"
    ).length;

  document.getElementById("stats").innerText =

    `Total Tasks: ${total} | Pending: ${pending} | Completed: ${completed}`;

}

/* SEARCH STATS */

function updateSearchStats(count) {

  document.getElementById("stats").innerText =

    `Matching Tasks: ${count}`;

}

/* DARK MODE */

function toggleDark() {

  document.body.classList.toggle("dark");

}

/* INIT */

loadTasks();