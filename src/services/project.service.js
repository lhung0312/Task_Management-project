const Project = require("../models/project");
const aqp = require("api-query-params");

const getAllProjectService = async (page, limit, queryString) => {
  if (page && limit) {
    const { filter, sort, projection, population } = aqp(queryString);
    console.log(population);
    delete filter.page;
    const offset = (page - 1) * limit;
    return await Project.find(filter)
      .skip(offset)
      .limit(limit)
      .sort(sort)
      .select(projection)
      .populate(population)
      .exec();
  }
  return await Project.find({});
};
const getProjectByIdService = async (_id) => {
  return await Project.findOne({ _id });
};
const updateProjectService = async (_id, data) => {
  return await Project.updateOne({ _id }, { ...data });
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
    const arrLength = data.usersInfo.length;
    for (let i = 0; i < arrLength; i++) {
      project.usersInfo.push(data.usersInfo[i]);
      await project.save();
    }
    return project;
  }
  if (data.type === "REMOVE-USER") {
    let project = await getProjectByIdService(data.projectId);
    if (!project) {
      return "not found project";
    }
    const arrLength = data.usersInfo.length;
    for (let i = 0; i < arrLength; i++) {
      project.usersInfo.pull(data.usersInfo[i]);
      await project.save();
    }
    return project;
  }
};

const deleteProjectByIdService = async (id) => {
  try {
    return await Project.deleteById(id);
  } catch (error) {
    console.log(error);
    return null;
  }
};

module.exports = {
  getAllProjectService,
  getProjectByIdService,
  createProjectService,
  updateProjectService,
  deleteProjectByIdService,
};
