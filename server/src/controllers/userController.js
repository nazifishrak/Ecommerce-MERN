const createError = require("http-errors");
const users = require("../models/userModel");

const getUsers = (req, res) => {
  try {
    res.status(200).send({
      message: "User profile is returned",
      users: users,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { getUsers };
