const express = require("express");
const allRoutes = require('./controllers')
const logger = require("morgan");
const mongoose = require("mongoose");
require("dotenv").config();

const cors = require("cors");



const PORT = process.env.PORT || 3001;
const JWT_SECRET = process.env.JWT_SECRET;

const User = require("./models/userModel.js");

const app = express();
//local cors config
// app.use(cors())
//deployed cors config
app.use(cors({
  origin:["https://zooschool.herokuapp.com"]
}))

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.use(express.static("public"));
app.use('/', allRoutes);

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/zooauthdb", { useNewUrlParser: true });


app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});