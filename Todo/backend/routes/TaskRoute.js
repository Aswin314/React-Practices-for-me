import express from "express";
import {
  allTasks,
  CreateTask,
  deleteTask,
  // getTask,
  updateTask,
} from "../Controllers/TaskController.js";
import verifyToken from "../middlewares/authMiddleware.js";

const TaskRouter = express.Router();

TaskRouter.post("/add", verifyToken, CreateTask);
TaskRouter.get("/allTasks", allTasks);
// TaskRouter.get("/task", getTask);
TaskRouter.delete("/delete/:id", deleteTask);
TaskRouter.put("/update/:id", updateTask);

export default TaskRouter;
