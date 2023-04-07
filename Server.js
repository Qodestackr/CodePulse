var express = require("express");
var formidable = require("express-formidable");

var app = express();
var port = process.env.PORT || 6500;

const serverListen = require("./config/serverListen");
const connectDB = require("./config/db");
const { setCors } = require("./config/cors");

app.use(formidable());
setCors(app)

connectDB();

// ROUTES
app.use("/", require("./routes/routes"))

serverListen(app, port)