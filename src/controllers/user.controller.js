const User = require("../models/user");
const {
  getAllUserService,
  postCreateUserService,
  putUpdateUserService,
  deleteUserByIdService,
} = require("../services/user.service");
const getAllUser = async (req, res) => {
  const users = await getAllUserService();
  return res.status(200).json({
    errorCode: 0,
    data: users,
  });
};
const postCreateUser = async (req, res) => {
  let email = req.body.email;
  let name = req.body.name;
  let city = req.body.city;
  const user = await postCreateUserService(email, name, city);
  return res.status(200).json({
    errorCode: 0,
    data: user,
  });
};
const putUpdateUser = async (req, res) => {
  let email = req.body.email;
  let name = req.body.name;
  let city = req.body.city;
  let id = req.body.id;
  const newUser = await putUpdateUserService(email, name, city, id);
  return res.status(201).json({
    errorCode: 0,
    data: newUser,
  });
};
const deleteUserById = async (req, res) => {
  const id = req.params.id;
  // await deleteUserById(id);
  let result = await deleteUserByIdService(id);
  return res.status(200).json({
    errorCode: 0,
    data: result,
  });
};

module.exports = {
  getAllUser,
  postCreateUser,
  putUpdateUser,
  deleteUserById,
};
