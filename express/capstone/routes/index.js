var express = require('express');
var router = express.Router();
const cors = require('cors');
const Apps = require("../models/apps.js");
const AddUser = require("../models/addUser.js");
const Users = require("../models/users.js");

const PORT = 2000;
const app = express();

app.use(cors())

/* GET home page. */
<<<<<<< HEAD
app.get('/', function(req, res, next) {
  res.send('Welcome to API').status(200);
});

/* Shows all users (will be only visible to admin) */
app.get("/users", async function(req, res, next) {
  const all = await Users.getAllUsers();
  res.json(all);
});

/* Shows all public applications */
app.get("/apps", async function(req, res, next) {
  const all = await Apps.getAllApplications();
  res.json(all);
});

/* Adds new user */
app.post("/adduser", async (req, res) => {
  console.log("req body: ", req.body);
  const { first_name, last_name, email, user_password, is_admin, contact_me } = req.body;
  const response = await AddUser.addUser(
    first_name,
    last_name,
    email,
    user_password,
    is_admin,
    contact_me
  );

  if (response.command === "INSERT" && response.rowCount >= 1) {
    res.sendStatus(200);
  } else {
    res.send("Could not add new user").status(409);
  }
});

app.listen(PORT, () => {
console.log(`Server is listening on port: ${PORT}`);
=======
router.get('/', function(req, res, next) {
  res.send('Welcome to API').status(200);
>>>>>>> d868359416e5c682e278c8ad140132c60c880b1a
});

module.exports = router;
