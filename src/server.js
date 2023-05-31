//Creating express app
const express = require("express");
const app = express();
const PORT = 3000;


app.get("/products", (req, res)=>{
    res.send("products are returned")
})
app.listen(PORT, ()=>{
    console.log(`server listening at port ${PORT}`);
});
