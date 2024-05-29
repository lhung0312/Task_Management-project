const User = require("../models/user");
const getAllUserService = async () => {
  return await User.find({});
};
const getUserByIdService = async (_id) => {
  return await User.find({ _id });
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
  getUserByIdService,
  postCreateUserService,
  putUpdateUserService,
  deleteUserByIdService,
};
