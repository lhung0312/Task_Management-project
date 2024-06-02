const User = require("../models/user");
const bcrypt = require("bcryptjs");

const getAllUserService = async () => {
  return await User.find({}).select("-password");
};
const getUserByIdService = async (_id) => {
  return await User.findOne({ _id }).select("-password");
};

const createHashPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(password, salt);
  return hashPassword;
};
const isValidPass = async (password, hash) => {
  let isValid = await bcrypt.compare(password, hash);
  return isValid;
};
const postCreateUserService = async (req, res) => {
  let hashPassword = await createHashPassword(req.body.password);
  const email = req.body.email;
  const name = req.body.name;
  let user = await User.create({ email, name, password: hashPassword });
  return { _id: user._id, email: user.email };
};
const putUpdateUserService = async (email, name, id) => {
  return await User.updateOne({ _id: id }, { email, name });
};
const deleteUserByIdService = async (id) => {
  return await User.deleteById(id);
};
const updateSessionUser = async (_id, session) => {
  return await User.updateOne({ _id }, { session });
};

module.exports = {
  isValidPass,
  getAllUserService,
  getUserByIdService,
  postCreateUserService,
  putUpdateUserService,
  deleteUserByIdService,
  updateSessionUser,
};
