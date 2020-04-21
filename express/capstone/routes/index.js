var express = require('express');
var router = express.Router();
const cors = require('cors');
const Users = require("../models/users.js");
const Apps = require("../models/apps.js")

const PORT = 2000;
const app = express();

app.use(cors())

/* GET home page. */
app.get('/', function(req, res, next) {
  res.send('Welcome to API').status(200);
});

app.get("/users", async function(req, res, next) {
  const all = await Users.getAllUsers();
  res.json(all);
});

app.get("/apps", async function(req, res, next) {
  const all = await Apps.getAllApplications();
  res.json(all);
});

app.listen(PORT, () => {
console.log(`Server is listening on port: ${PORT}`);
});

module.exports = router;
