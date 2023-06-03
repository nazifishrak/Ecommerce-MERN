//Creating express app
const app = require("./app.js");
const { serverPort } = require("./secret.js");
app.listen(serverPort, () => {
  console.log(`server listening at port ${serverPort}`);
});
