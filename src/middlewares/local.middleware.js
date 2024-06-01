const passport = require("../auth/localStrategy");

const localMiddleWare = (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) {
      return next(err);
    }
    if (!user) {
      return res
        .status(401)
        .json({ success: false, message: "Authentication failed" });
    }
    req.login(user, (loginErr) => {
      if (loginErr) {
        return next(loginErr);
      }
      return next();
    });
  })(req, res, next);
};
module.exports = localMiddleWare;
