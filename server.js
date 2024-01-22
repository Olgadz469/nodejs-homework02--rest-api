const mongoose = require("mongoose");

const app = require("./app");
mongoose.set("strictQuery", true);

const { DB_HOST, PORT = 3000 } = process.env;
// const DB_HOST =
//   "mongodb+srv://olga:XFrF-w7kHRkQ8wF@cluster0.7927njq.mongodb.net/db-contacts?retryWrites=true&w=majority";

mongoose
  .connect(DB_HOST)
  .then(() => {
    app.listen(PORT);
    console.log("Database connect sucsess");
  })
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });
