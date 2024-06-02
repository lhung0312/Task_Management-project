const mongoose = require("mongoose");
var mongoose_delete = require("mongoose-delete");
const User = require("./user");
const Project = require("./project");

const userSchema = User.schema;
const projectSchema = Project.schema;

const taskSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: String,
    usersInfo: userSchema,
    projectInfo: projectSchema,
    status: String,
    startDate: Date,
    endDate: Date,
  },
  { timestamps: true }
);
taskSchema.plugin(mongoose_delete, { overrideMethods: "all" });

const Task = mongoose.model("task", taskSchema);

module.exports = Task;
