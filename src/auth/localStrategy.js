const passport = require("passport");
const User = require("../models/user");
const { isValidPass, createHashPassword } = require("../services/user.service");
const LocalStrategy = require("passport-local").Strategy;
passport.use(
  new LocalStrategy(async function (username, password, done) {
    const user = await User.findOne({ email: username });
    let isValid = await isValidPass(password, user.password);
    if (user && isValid === true) {
      return done(null, user);
    } else {
      return done(null, false, { message: "Invalid credentials" });
    }
  })
);
passport.serializeUser(function (user, cb) {
  process.nextTick(function () {
    return cb(null, {
      _id: user._id,
      username: user.email,
    });
  });
});
passport.deserializeUser(function (user, cb) {
  process.nextTick(function () {
    return cb(null, user);
  });
});

module.exports = passport;
