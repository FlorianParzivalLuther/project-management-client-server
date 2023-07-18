// ℹ️ Gets access to environment variables/settings
// https://www.npmjs.com/package/dotenv
require("dotenv").config();

// ℹ️ Connects to the database
require("./db");

// Handles http requests (express is node js framework)
// https://www.npmjs.com/package/express
const express = require("express");
const { isAuthenticated } = require("./middleware/jwt.middleware"); // <== IMPORT

const app = express();
require("./config")(app);

//  Start handling routes here
const allRoutes = require("./routes/index.routes");
app.use("/api", allRoutes);

const projectRouter = require("./routes/project.routes");
app.use("/api", isAuthenticated, projectRouter); // <== UPDATE

const taskRouter = require("./routes/task.routes");
app.use("/api", isAuthenticated, taskRouter); // <== UPDATE

const authRouter = require("./routes/auth.routes");
app.use("/auth", authRouter);

require("./error-handling")(app);

module.exports = app;
