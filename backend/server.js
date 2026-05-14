const express = require("express");
const cors = require("cors");
const supabase = require("./config/supabase");
const taskRoutes = require("./routes/taskRoutes");

const app = express();

app.use(cors());
app.use(express.json());

/* 🔹 TEST API (keep this) */
app.get("/", async (req, res) => {
  try {
    const { data, error } = await supabase.from("tasks").select("*");
    if (error) return res.status(500).json(error);
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

/* 🔹 CONNECT ROUTES */
app.use("/tasks", taskRoutes);

const PORT = 5000;

app.listen(PORT, () => {
  console.log("Server running on port 5000");
});