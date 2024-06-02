const Project = require("../models/project");

const getAllProjectService = async () => {
  return await Project.find({});
};

const getProjectByIdService = async (_id) => {
  return await Project.findOne({ _id });
};
const updateProjectService = async (_id, data) => {
  return await Project.updateOne({ _id }, { data });
};
const createProjectService = async (data) => {
  if (data.type === "EMPTY-PROJECT") {
    let project = await Project.create(data);
    return {
      data: project,
    };
  }
  if (data.type === "ADD-USER") {
    let project = await getProjectByIdService(data.projectId);
    if (!project) {
      return "not found project";
    }
    console.log(data.usersInfo);
    await Project.updateOne(
      { _id: data.projectId },
      { usersInfo: data.usersInfo }
    );
    return project;
    const usersLength = data.usersInfo.length;
    // for (let i = 0; i < usersLength; i++) {
    //   console.log("usersInfo", data.usersInfo[i]);
    //   await Project.updateOne(
    //     { _id: data.projectId },
    //     { usersInfo: data.usersInfo[i] }
    //   );
    // }
  }
};

const deleteProjectByIdService = async (id) => {
  return await Project.deleteOne({ _id: id });
};

module.exports = {
  getAllProjectService,
  getProjectByIdService,
  createProjectService,
  updateProjectService,
  deleteProjectByIdService,
};
