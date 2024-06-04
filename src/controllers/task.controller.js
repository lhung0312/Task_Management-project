const {
  getAllTaskService,
  getTaskByIdService,
  createTaskService,
  updateTaskService,
  deleteTaskByIdService,
} = require("../services/task.service");

const getAllTask = async (req, res) => {
  const page = req.query.page;
  const limit = req.query.limit;
  const projects = await getAllTaskService(page, limit, req.query);
  return res.status(200).json({
    errorCode: 0,
    data: projects,
  });
};
const getTaskById = async (req, res) => {
  const _id = req.params.id;
  const project = await getTaskByIdService(_id);
  return res.status(200).json({
    errorCode: 0,
    data: project,
  });
};
const postCreateTask = async (req, res) => {
  const data = req.body;
  const project = await createTaskService(data);
  return res.status(201).json({
    errorCode: 0,
    data: project,
  });
};
const putUpdateTask = async (req, res) => {
  const id = req.body.id;
  const data = req.body;
  console.log("data", { ...data });
  const updatedProject = await updateTaskService(id, data);
  return res.status(200).json({
    errorCode: 0,
    data: updatedProject,
  });
};
const deleteTaskById = async (req, res) => {
  const id = req.params.id;
  const result = await deleteTaskByIdService(id);
  return res.status(200).json({
    errorCode: 0,
    data: result,
  });
};

module.exports = {
  getAllTask,
  getTaskById,
  postCreateTask,
  putUpdateTask,
  deleteTaskById,
};
