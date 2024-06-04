const mongoose = require("mongoose");
var mongoose_delete = require("mongoose-delete");
const User = require("./user");
const Project = require("./project");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
});

const projectSchema = new mongoose.Schema({
  email: String,
});

const taskSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: String,
    status: String,
    startDate: String,
    endDate: String,
    usersInfo: userSchema,
    projectInfo: projectSchema,
  },
  { timestamps: true }
);
taskSchema.plugin(mongoose_delete, { overrideMethods: "all" });

const Task = mongoose.model("task", taskSchema);

module.exports = Task;
