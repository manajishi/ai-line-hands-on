const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post("/", (req, res) => {
  const data = req.body;
  console.log("req.body", data);
  res.send("api ok");

  const messageId = req.body["events"][0]["message"]["id"];
  console.log(messageId);
 
  app.use(express.json())
  app.use(express.urlencoded({ extended: true }));
});

process.env.NOW_REGION
  ? (module.exports = app)
  : app.listen(PORT, () => console.log(`now listening on port${PORT}`));