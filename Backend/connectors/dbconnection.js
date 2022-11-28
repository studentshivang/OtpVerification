const mongoose = require("mongoose");

const dbconnect = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
    console.log("Database connection successful!");
  } catch (error) {
    console.log(error);
  }
};

module.exports = dbconnect;
