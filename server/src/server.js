//Creating express app
const express = require("express");
const morgan = require("morgan");
const app = express();
const PORT = 3000;

app.use(morgan("dev"));
app.get("/test", (req, res) => {
  res.status(200).send({message: "GET: api working properly"});
});

app.post("/test", (req, res) => {
    res.status(200).send({message: "POST: api working properly"});
  });

app.put("/test", (req, res) => {
  res.status(200).send({message: "PUT: api working properly"});
});

app.delete("/test", (req, res) => {
    res.status(200).send({message: "DEL: api working properly"});
  });
app.listen(PORT, () => {
  console.log(`server listening at port ${PORT}`);
});
