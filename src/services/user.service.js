const User = require("../models/user");
const getAllUserService = async (req, res) => {
  return await User.find({});
};
const postCreateUserService = async (email, name, city) => {
  return await User.create({ email, name, city });
};
const putUpdateUserService = async (email, name, city, id) => {
  return await User.updateOne({ _id: id }, { email, name, city });
};
const deleteUserByIdService = async (id) => {
  return await User.deleteOne({ _id: id });
};

module.exports = {
  getAllUserService,
  postCreateUserService,
  putUpdateUserService,
  deleteUserByIdService,
};
