const express = require("express");
const app = express();
require("dotenv").config();
const connection = require("./config/database");
const userRoutes = require("./routes/user.routes");
const fileRoutes = require("./routes/file.routes");
const customerRoutes = require("./routes/customer.routes");
const projectRoutes = require("./routes/project.routes");

const authRoutes = require("./auth/auth.routes");
const passport = require("./auth/localStrategy");
const isAuthMiddleWare = require("./middlewares/isAuth.middleware");
const fileUpload = require("express-fileupload");
const port = process.env.PORT;

//config req.body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// default options
app.use(fileUpload());

app.use(
  require("express-session")({
    secret: "keyboard cat",
    resave: true,
    saveUninitialized: true,
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.use("/api/users", isAuthMiddleWare, userRoutes);
app.use("/api/files", isAuthMiddleWare, fileRoutes);
app.use("/api/customers", isAuthMiddleWare, customerRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/projects", projectRoutes);
// app.use("/api/tasks", taskRoutes);

(async () => {
  try {
    await connection();
    console.log("Connected successfully");
    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`);
    });
  } catch (error) {
    console.log(">>>Error to connect DB: ", error);
  }
})();
