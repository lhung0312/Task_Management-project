const express = require("express");
const app = express();
const connection = require("./config/database");
const cors = require("cors");

const userRoutes = require("./routes/user.routes");
const fileRoutes = require("./routes/file.routes");
const customerRoutes = require("./routes/customer.routes");
const projectRoutes = require("./routes/project.routes");
const taskRoutes = require("./routes/task.routes");
const authRoutes = require("./auth/auth.routes");
const passport = require("./auth/localStrategy");
const isAuthMiddleWare = require("./middlewares/isAuth.middleware");
const fileUpload = require("express-fileupload");

require("dotenv").config();
const port = process.env.PORT || 4000;
const secretSession = process.env.SECRET_SESSION;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(fileUpload());

app.use(
  require("express-session")({
    secret: secretSession,
    resave: true,
    saveUninitialized: true,
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.use(cors());

app.use("/api/users", isAuthMiddleWare, userRoutes);
app.use("/api/files", isAuthMiddleWare, fileRoutes);
app.use("/api/customers", isAuthMiddleWare, customerRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/projects", projectRoutes);
app.use("/api/tasks", taskRoutes);

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
