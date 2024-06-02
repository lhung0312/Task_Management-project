const mongoose = require("mongoose");
var mongoose_delete = require("mongoose-delete");
const User = require("./user");
const Customer = require("./customer");

const customerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
});

const userSchema = new mongoose.Schema({
  email: { type: String, required: true },
  name: { type: String, required: true },
});

const projectSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },

    startDate: String,
    endDate: String,
    description: String,
    customerInfo: customerSchema,
    usersInfo: [{ type: mongoose.Schema.Types.ObjectId, ref: "user" }],
    leader: userSchema,
    tasks: [{ type: mongoose.Schema.Types.ObjectId, ref: "task" }],
  },
  { timestamps: true }
);
projectSchema.plugin(mongoose_delete, { overrideMethods: "all" });

const Project = mongoose.model("project", projectSchema);

module.exports = Project;
