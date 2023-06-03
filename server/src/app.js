const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const createError = require("http-errors");
const xssClean = require("xss-clean");
const rateLimit = require("express-rate-limit");
const app = express();


const rateLimiter = rateLimit({
  windowMS: 1000 * 60, //1 minute
  max: 5, //max requests
  message: "Too many request from this IP. Please try again later", // message if rquest exceeds max
});

app.use(xssClean());
app.use(rateLimiter);
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Logged in Middleware
const isLoggedIn = (req, res, next) => {
  const login = true;
  if (login) {
    next();
  } else {
    res.status(401).json({ message: "Unauthorised user: please login first" });
  }
};
app.get("/api/user", isLoggedIn, (req, res) => {
  res.status(200).send({
    message: "User profile is returned",
  });
});

app.get("/test", (req, res) => {
  res.status(200).send({ message: "GET: api working properly" });
});

app.post("/test", (req, res) => {
  res.status(200).send({ message: "POST: api working properly" });
});

app.put("/test", (req, res) => {
  res.status(200).send({ message: "PUT: api working properly" });
});

app.delete("/test", (req, res) => {
  res.status(200).send({ message: "DEL: api working properly" });
});

//client error handling

app.use((req, res, next) => {
  createError(404, "Route Not Found");
  next();
});

//server error -> all the errors will come here
app.use((err, req, res, next) => {
  return res.status(err.status || 500).json({
    success: false,
    message: err.message,
  });
});

module.exports = app;
