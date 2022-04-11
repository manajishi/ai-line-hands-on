const express = require('express');
const app = express();
const bodyParser=require("body-parser");
const { application } = require('express');
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

let yo;
app.post("/api/get",(req,res)=>{
    yo=req.body;
    console.log(yo);
});

app.post("/api/post",(req,res)=>{
    const data=req.body;
    const name=data.Name;
    console.log("name",name);
    res.send("api/post: Hello World!");
});


app.get('/', function (req, res) {
 res.send('Hello World!');
});


process.env.NOW_REGION ? (module.exports = app)
: app.listen(PORT); 

