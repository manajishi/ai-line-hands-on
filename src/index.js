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
       'Authorization': 'Bearer ' + accessToken,
    },
    encoding: null
};

request(options, function(error, response, body) {
  const buffer = new Buffer.from(body);
  console.log(buffer);
});

 
});

process.env.NOW_REGION
  ? (module.exports = app)
  : app.listen(PORT, () => console.log(`now listening on port${PORT}`));