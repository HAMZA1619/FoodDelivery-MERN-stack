const express = require("express");
const {
  authRouter,
  userRouter,
  secteurRouter,
  mealRouter,
  categoryRouter,
  orderRouter,
} = require("./routes");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
require("dotenv").config();

const app = express();
app.use(cookieParser());
mongoose.connect(process.env.MONGO_DB);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/auth", authRouter);
app.use("/user", userRouter);
app.use("/order", orderRouter);
app.use("/category", categoryRouter);
app.use("/meal", mealRouter);
app.use("/secteur", secteurRouter);

app.listen(process.env.PORT, () =>
  console.log(`server running in ${process.env.PORT} `)
);
