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
  app.use(express.json())
  app.use(express.urlencoded({ extended: true }));
});

//なくてよい


//app.listen(3000, () => console.log("Listening on port 3000"));
process.env.NOW_REGION
  ? (module.exports = app)
  : app.listen(PORT, () => console.log(`now listening on port${PORT}`));