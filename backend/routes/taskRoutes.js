const express = require("express");
const router = express.Router();
const supabase = require("../config/supabase");

/* 🔹 GET ALL TASKS */
router.get("/", async (req, res) => {

  const { data, error } = await supabase
    .from("tasks")
    .select("*")
    .eq("is_deleted", false)
    .order("id", { ascending: false });

  if (error) {
    return res.status(400).json(error);
  }

  res.json(data);
});


/* 🗑 GET DELETED TASKS */
router.get("/deleted", async (req, res) => {

  const { data, error } = await supabase
    .from("tasks")
    .select("*")
    .eq("is_deleted", true)
    .order("id", { ascending: false });

  if (error) {
    return res.status(400).json(error);
  }

  res.json(data);
});


/* 🔹 ADD TASK */
router.post("/add", async (req, res) => {

  const { title, subject, deadline, priority } = req.body;

  const { data, error } = await supabase
    .from("tasks")
    .insert([{
      title,
      subject,
      deadline,
      priority: priority || "medium",
      status: "pending",
      is_deleted: false
    }])
    .select();

  if (error) {
    return res.status(400).json(error);
  }

  res.json(data);
});


/* 🗑 MOVE TASK TO TRASH */
router.delete("/:id", async (req, res) => {

  const { id } = req.params;

  const { data, error } = await supabase
    .from("tasks")
    .update({ is_deleted: true })
    .eq("id", id)
    .select();

  if (error) {
    return res.status(400).json(error);
  }

  res.json({
    message: "Moved to Trash",
    data
  });
});


/* ♻️ RESTORE TASK */
router.put("/restore/:id", async (req, res) => {

  const { id } = req.params;

  const { data, error } = await supabase
    .from("tasks")
    .update({ is_deleted: false })
    .eq("id", id)
    .select();

  if (error) {
    return res.status(400).json(error);
  }

  res.json({
    message: "Task Restored",
    data
  });
});


/* ❌ DELETE FOREVER */
router.delete("/permanent/:id", async (req, res) => {

  const { id } = req.params;

  const { error } = await supabase
    .from("tasks")
    .delete()
    .eq("id", id);

  if (error) {
    return res.status(400).json(error);
  }

  res.json({
    message: "Deleted Permanently"
  });
});


/* ✅ MARK COMPLETE */
router.put("/:id", async (req, res) => {

  const { id } = req.params;

  const { data, error } = await supabase
    .from("tasks")
    .update({
      status: "completed",
      completed: true
    })
    .eq("id", id)
    .select();

  if (error) {
    return res.status(400).json(error);
  }

  res.json(data);
});

module.exports = router;