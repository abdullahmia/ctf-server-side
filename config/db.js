const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect(`mongodb+srv://rbshadow:rbshadow@ctf.vgftz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: true,
  });

  console.log("MongoDB Connected");
};

module.exports = connectDB;
