const mongoose = require("mongoose");

const connectDB = () => {
  const mongoURL =
    "mongodb+srv://janithwijethunga:200025901044@cluster0.bdvzn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

  mongoose
    .connect(mongoURL, { useUnifiedTopology: true, useNewUrlParser: true })
    .then(() => {
      console.log("Mongo DB connection successful....!");
    })
    .catch((error) => {
      console.error("Mongo DB connection failed...!", error);
    });
};

module.exports = connectDB;
