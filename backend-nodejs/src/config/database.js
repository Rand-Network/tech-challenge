require('dotenv').config()

const mongoose = require("mongoose");
const { CUSTOMCONNSTR_DB }  = process.env; 

exports.connect = () => {
  console.log("Connecting to the database...");

  mongoose
    .connect(CUSTOMCONNSTR_DB , {
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Successfully connected to database");
    })
    .catch((error) => {
      console.log({ message: error });
      process.exit(1);
    });
};