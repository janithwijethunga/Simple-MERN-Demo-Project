const express = require("express");
const connectDB = require("./db"); // Import the connectDB function

const app = express();

connectDB(); // Call the function to connect to MongoDB

app.use("/api/patient", patientRoute);


app.listen(3000, () => {
  console.log("Server running on port 3000");
});
