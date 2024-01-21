// mongodb+srv://olga:XFrF-w7kHRkQ8wF@cluster0.7927njq.mongodb.net/db-contacts
// const mongoose = require("mongoose");
// const DB_HOST =
//   "mongodb+srv://olga:XFrF-w7kHRkQ8wF@cluster0.7927njq.mongodb.net/db-contacts";
// mongoose.set("strictQuery", true);
// mongoose
//   .connect(DB_HOST)
//   .then(() => console.log("Database connect sucsess"))
//   .catch((error) => console.log(error.message));

const express = require("express");
const logger = require("morgan");
const cors = require("cors");
require("dotenv").config();

const contactsRouter = require("./routes/api/contacts");

const app = express();

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());

app.use("/api/contacts", contactsRouter);

app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use((err, req, res, next) => {
  res.status(500).json({ message: err.message });
});

module.exports = app;
