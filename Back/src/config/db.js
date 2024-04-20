const mongoose = require("mongoose");
require("dotenv").config({ path: ".env" });

const conectionBD = async () => {
  try {
    await mongoose.connect(process.env.DB_MONGO);
    console.log("DataBase ON");
  } catch (error) {
    console.log("DataBase Error");
    process.exit(1);
  }
};

module.exports = conectionBD;
