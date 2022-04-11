const express = require('express');
const app = express();
const { application } = require('express');
const PORT = process.env.PORT || 3000;


app.post('/', function (req, res) {
 const data=req.body;
 console.log(req.body,data);
 res.send('api ok');
});


process.env.NOW_REGION ? (module.exports = app)
: app.listen(PORT); 

