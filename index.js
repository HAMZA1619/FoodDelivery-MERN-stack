const express = require("express");
const auth = require("./routes/auth-router");
const mongoose = require("mongoose");
const cookieParser = require('cookie-parser')
require("dotenv").config();

const app = express();
app.use(cookieParser())
mongoose.connect(process.env.MONGO_DB)
  

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/", auth);

app.listen(process.env.PORT, () =>
  console.log(`server running in ${process.env.PORT} `)
);
