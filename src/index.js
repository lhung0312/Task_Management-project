const express = require("express");
const app = express();
const userRoutes = require("./routes/user.routes");
const connection = require("./config/database");
require("dotenv").config();

const port = process.env.PORT;

//config req.body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/users", userRoutes);
// app.use("/api/customers", customerRoutes);
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
