const mongoose = require("mongoose");

const app = require("./app");

// const { DB_HOST, PORT = 3000 } = process.env;
const DB_HOST =
  "mongodb+srv://olga:XFrF-w7kHRkQ8wF@cluster0.7927njq.mongodb.net/db-contacts";

mongoose.set("strictQuery", true);

mongoose
  .connect(DB_HOST)
  .then(() => {
    app.listen(3000);
  })
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });
