//Creating express app
const app = require('./app.js');
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`server listening at port ${PORT}`);
});
