const express = require("express");
const Users = require("../models/Users");
const bcrypt = require("bcrypt");

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await Users.findOne({ email }).exec();

    if (!user) {
      res.send("user does not exist");
    }

    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      res.send("password does not match");
    }

    console.log(`user is authenticated`);
    res.json(user);
  } catch (err) {
    res.send(err);
  }
});

module.exports = router;
