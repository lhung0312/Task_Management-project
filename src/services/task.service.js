const Task = require("../models/task");
const aqp = require("api-query-params");

const getAllTaskService = async (page, limit, queryString) => {
  if (page && limit) {
    const { filter, sort } = aqp(queryString);
    delete filter.page;
    const offset = (page - 1) * limit;
    return await Task.find(filter).skip(offset).limit(limit).sort(sort).exec();
  }
  return await Task.find({});
};
const getTaskByIdService = async (_id) => {
  return await Task.findOne({ _id });
};
const updateTaskService = async (_id, data) => {
  return await Task.updateOne({ _id }, { ...data });
};
const createTaskService = async (data) => {
  if (data.type === "EMPTY-TASK") {
    let task = await Task.create(data);
    return {
      data: task,
    };
  }
  if (data.type === "ADD-USER") {
    let task = await getTaskByIdService(data.taskId);
    if (!task) {
      return "not found task";
    }
    const arrLength = data.usersInfo.length;
    for (let i = 0; i < arrLength; i++) {
      task.usersInfo.push(data.usersInfo[i]);
      await task.save();
    }
    return task;
  }
  if (data.type === "REMOVE-USER") {
    let task = await getTaskByIdService(data.taskId);
    if (!task) {
      return "not found task";
    }
    const arrLength = data.usersInfo.length;
    for (let i = 0; i < arrLength; i++) {
      task.usersInfo.pull(data.usersInfo[i]);
      await task.save();
    }
    return task;
  }
};
const deleteTaskByIdService = async (id) => {
  try {
    return await Task.deleteById(id);
  } catch (error) {
    console.log(error);
    return null;
  }
};

module.exports = {
  getAllTaskService,
  getTaskByIdService,
  createTaskService,
  updateTaskService,
  deleteTaskByIdService,
};
