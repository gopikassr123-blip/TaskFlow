const express = require("express");

const Task = require("../models/Task");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

// Create Task
router.post("/", authMiddleware, async (req, res) => {

  try {

    const { title, status } = req.body;

    const newTask = new Task({
      title,
      status,
      user: req.user.id,
    });

    await newTask.save();

    res.status(201).json({
      message: "Task created successfully",
      task: newTask,
    });

  } catch (error) {

    res.status(500).json({
      message: "Server error",
    });

  }

});

// Get Tasks
router.get("/", authMiddleware, async (req, res) => {

  try {

    const tasks = await Task.find({
      user: req.user.id,
    });

    res.status(200).json(tasks);

  } catch (error) {

    res.status(500).json({
      message: "Server error",
    });

  }

});

// Update Task
router.put("/:id", authMiddleware, async (req, res) => {

  try {

    const { title, status } = req.body;

    const updatedTask = await Task.findByIdAndUpdate(
      req.params.id,
      {
        title,
        status,
      },
      {
        new: true,
      }
    );

    res.status(200).json({
      message: "Task updated successfully",
      task: updatedTask,
    });

  } catch (error) {

    res.status(500).json({
      message: "Server error",
    });

  }

});

// Delete Task
router.delete("/:id", authMiddleware, async (req, res) => {

  try {

    await Task.findByIdAndDelete(req.params.id);

    res.status(200).json({
      message: "Task deleted successfully",
    });

  } catch (error) {

    res.status(500).json({
      message: "Server error",
    });

  }

});

module.exports = router;