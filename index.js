// index.js
require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const sequelize = require("./config/database");

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());

// Test database connection
sequelize
  .authenticate()
  .then(() => {
    console.log("MySQL connected");
  })
  .catch((err) => {
    console.log("Error: " + err);
  });

// Sync the database
sequelize
  .sync()
  .then(() => console.log("Database synced"))
  .catch((err) => console.log("Error: " + err));

// Sample route
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// User routes
app.use("/api", require("./routes/userRoutes"));

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
