import Task from "../models/TaskModels.js";

export const CreateTask = async (req, res) => {
  const { title, description } = req.body;
  const task = new Task({
    title,
    description,
    user: req.user.id,
  });
  await task.save();
  res.json("Task Created");
};

export const allTasks = async (req, res) => {
  const task = await Task.find();
  console.log(task);
  res.json(task);
};
// export const getTask = async (req, res) => {
// try {
//   const tasks = await Task.find({ user: req.user.id });

//   res.status(200).json(tasks);
// } catch (err) {
//   res.status(500).json({
//     message: "Failed to fetch tasks",
//   });
// }
// };
export const deleteTask = async (req, res) => {
  try {
    const task = await Task.findOneAndDelete({
      _id: req.params.id,
      user: req.user.id, // 🔐 Only owner can delete
    });

    if (!task) {
      return res.status(404).json({
        message: "Task not found or unauthorized",
      });
    }

    res.status(200).json({
      message: "Task deleted successfully",
    });
  } catch (err) {
    res.status(500).json({
      message: "Delete failed",
    });
  }
};
export const updateTask = async (req, res) => {
  try {
    const task = await Task.findOneAndUpdate(
      {
        _id: req.params.id,
        user: req.user.id, // 🔐 only owner can update
      },
      req.body,
      { new: true },
    );

    if (!task) {
      return res.status(404).json({
        message: "Task not found or unauthorized",
      });
    }

    res.status(200).json(task);
  } catch (err) {
    res.status(500).json({
      message: "Update failed",
    });
  }
};
