const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

let yo;
app.post("/", (req, res) => {
  yo = req.body;
  console.log(yo);
});

app.post("/", (req, res) => {
  const data = req.body;
  console.log("req.body", data);
  res.send("api ok");
});

//なくてよい
app.post("/", (req, res) => {
  const data = req.body;
  console.log("req.body", data);
  const messageID = data["events"][0]["message"]["id"];
  console.log("messageID:", messageID);
  res.send("api:OK");
});

//app.listen(3000, () => console.log("Listening on port 3000"));
process.env.NOW_REGION
  ? (module.exports = app)
  : app.listen(PORT, () => console.log(`now listening on port${PORT}`));