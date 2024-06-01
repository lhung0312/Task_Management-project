const User = require("../models/user");
const {
  postCreateUser,
  getAllUser,
} = require("../controllers/user.controller");
const { updateSessionUser } = require("../services/user.service");
const postLoginUser = async (req, res) => {
  const user = req.user;
  await updateSessionUser(user._id, req.sessionID);
  return res.status(201).json({
    errorCode: 0,
    data: {
      user: {
        _id: user._id,
        username: user.email,
      },
    },
  });
};
const postRegisterUser = async (req, res) => {
  const isEmailExist = await User.findOne({ email: req.body.email });
  if (isEmailExist) {
    return res.status(409).json({
      errorCode: 2,
      message: "Email already exists",
    });
  }
  await postCreateUser(req, res);
};
const postLogoutUser = (req, res) => {
  const user = req.user;
  req.logout(user, async (err) => {
    if (err) {
      return next(err);
    }
    await updateSessionUser(user._id, "");
    return res.status(200).json({
      errorCode: 0,
      message: "logout success",
      data: {
        _id: user._id,
        username: user.username,
        session: user.session,
      },
    });
  });
};
module.exports = { postLoginUser, postRegisterUser, postLogoutUser };
