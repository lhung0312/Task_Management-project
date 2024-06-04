const express = require("express");
const router = express.Router();
const {
  getAllTask,
  getTaskById,
  postCreateTask,
  putUpdateTask,
  deleteTaskById,
} = require("../controllers/task.controller");

router.get("/", getAllTask);
router.get("/:id", getTaskById);
router.post("/", postCreateTask);
router.put("/", putUpdateTask);
router.delete("/:id", deleteTaskById);

module.exports = router;
