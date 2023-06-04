const getTest = (req, res) => {
  res.status(200).send({ message: "GET: api working properly" });
};

const postTest = (req, res) => {
  res.status(200).send({ message: "POST: api working properly" });
};
const putTest = (req, res) => {
  res.status(200).send({ message: "PUT: api working properly" });
};

const delTest = (req, res) => {
  res.status(200).send({ message: "DEL: api working properly" });
};


module.exports={getTest, postTest, putTest, delTest}
