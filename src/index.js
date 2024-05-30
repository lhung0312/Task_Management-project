const express = require("express");
const app = express();
require("dotenv").config();
const connection = require("./config/database");
const userRoutes = require("./routes/user.routes");
const fileRoutes = require("./routes/file.routes");
const customerRoutes = require("./routes/customer.routes");

const fileUpload = require("express-fileupload");

const port = process.env.PORT;
// default options
app.use(fileUpload());
//config req.body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

console.log(__dirname);
app.use("/api/users", userRoutes);
app.use("/api/files", fileRoutes), app.use("/api/customers", customerRoutes);
// app.use("/api/projects", projectRoutes);
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
