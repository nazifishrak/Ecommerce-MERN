const express = require("express");
const userRouter = express.Router();

const users = [
  { id: 1, name: "Nazif" },
  { id: 2, name: "Nazif 2" },
  { id: 3, name: "Nazif 3" },
];

userRouter.get("/", (req, res) => {
  res.status(200).send({
    message: "User profile is returned",
    users: users,
  });
});
userRouter.get("/profile", (req, res) => {
    res.status(200).send({
      message: "User profile is returned",

    });
  });
module.exports = userRouter;
