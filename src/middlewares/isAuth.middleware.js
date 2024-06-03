const isAuthMiddleWare = (req, res, next) => {
  if (req.isAuthenticated()) {
    const currentTime = Date.now();
    req.session.lastActiveTime = Date.now();
    req.session.cookie.expires = new Date(currentTime + 5 * 60 * 1000);
    return next();
  } else {
    return res.send("you need authenticate");
  }
};
module.exports = isAuthMiddleWare;
