const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const PORT = process.env.PORT || 3000;
const request = require('request');
 
app.use(bodyParser.json());

app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.post("/", (req, res) => {

  const data = req.body;
  console.log("req.body", data);
  res.send("api ok");

  const messageId = req.body["events"][0]["message"]["id"];
  console.log(messageId);

  const options = {
    url: `https://api-data.line.me/v2/bot/message/${req.body.events[0].message.id}/content`,
    method: 'get',
    headers: {
       'Authorization': 'Bearer ' + 'tX5KNspepXrnrZChWBzw1r6HEPyTE1X+iyhvJOjtjLqpm6wLypGnwSSdEFEC3nc5Anj+SwkDtQNJrYOr7rbULBC7mUN72tPwAAzw+w71P1kJbnOcA3ogFpE+spZT66UxaHCSK+84vA+Vfl0aYL3obgdB04t89/1O/w1cDnyilFU=',
    },
    encoding: null
};

request(options,function(error, response, body) {
  const buffer = new Buffer.from(body);
  console.log(buffer);
  const option={
    url: "https://leadhack51stcentralindia-prediction.cognitiveservices.azure.com/customvision/v3.0/Prediction/e5b423cb-c18b-40e4-b640-29eb206e4d86/classify/iterations/Iteration1/image",
    method: "post",
    headers:{
      "Content-Type":"application/octet-stream",
      "Prediction-Key":"7254f5b6e9004fa6aeb869d0a76dc317",
    },
    body: buffer,
  };
  
});


request.post(options, function(error, response, body){});
 
});

process.env.NOW_REGION
  ? (module.exports = app)
  : app.listen(PORT, () => console.log(`now listening on port${PORT}`));