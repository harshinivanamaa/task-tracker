const express = require("express");
const cors = require("cors");
const path = require("path");

const supabase = require("./config/supabase");
const taskRoutes = require("./routes/taskRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use(express.static(path.join(__dirname, "..", "frontend")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "frontend", "index.html"));
});

/* 🔹 TEST API */
app.get("/api/tasks", async (req, res) => {
  try {
    const { data, error } = await supabase
      .from("tasks")
      .select("*");

    if (error) {
      return res.status(500).json(error);
    }

    res.json(data);
  } catch (err) {
    res.status(500).json({
      message: "Server error",
    });
  }
});

/* 🔹 CONNECT ROUTES */
app.use("/tasks", taskRoutes);

/* 🔹 FRONTEND ROUTE FIX */
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "frontend", "index.html"));
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});