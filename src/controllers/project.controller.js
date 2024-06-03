const {
  getAllProjectService,
  getProjectByIdService,
  createProjectService,
  updateProjectService,
  deleteProjectByIdService,
} = require("../services/project.service");

const getAllProject = async (req, res) => {
  const page = req.query.page;
  const limit = req.query.limit;
  const projects = await getAllProjectService(page, limit, req.query);
  return res.status(200).json({
    errorCode: 0,
    data: projects,
  });
};
const getProjectById = async (req, res) => {
  const _id = req.params.id;
  const project = await getProjectByIdService(_id);
  return res.status(200).json({
    errorCode: 0,
    data: project,
  });
};
const postCreateProject = async (req, res) => {
  const data = req.body;
  const project = await createProjectService(data);
  return res.status(201).json({
    errorCode: 0,
    data: project,
  });
};
const putUpdateProject = async (req, res) => {
  const id = req.body.id;
  const data = req.body;
  console.log("data", { ...data });
  const updatedProject = await updateProjectService(id, data);
  return res.status(200).json({
    errorCode: 0,
    data: updatedProject,
  });
};
const deleteProjectById = async (req, res) => {
  const id = req.params.id;
  const result = await deleteProjectByIdService(id);
  return res.status(200).json({
    errorCode: 0,
    data: result,
  });
};

module.exports = {
  getAllProject,
  getProjectById,
  postCreateProject,
  putUpdateProject,
  deleteProjectById,
};
