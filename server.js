const express = require("express");
const studentRoutes = require("./routes/studentRoutes");

const app = express();

// Middleware to parse JSON data
app.use(express.json());

// Route middleware
app.use("/students", studentRoutes);

// Start server
app.listen(3000, () => {
  console.log("Server running on port 3000");
});
