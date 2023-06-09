const express = require("express");
const {
  postTest,
  getTest,
  putTest,
  delTest,
} = require("../controllers/testController");
const testRouter = express.Router();

testRouter.get("/test", getTest);

testRouter.post("/test", postTest);

testRouter.put("/test", putTest);

testRouter.delete("/test", delTest);

module.exports = testRouter;
