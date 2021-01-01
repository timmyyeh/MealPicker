const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Users = require("../models/Users");
const bcrypt = require("bcrypt");
const validator = require("validator");

router.post("/", async (req, res) => {
  try {
    const { email, password } = req.body;
    const findUser = await Users.find({ email }).exec();
    if (findUser) {
      throw "User already exists";
    }

    validate(email, password);

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = new Users({
      email,
      password: hashedPassword,
    });

    user.save();
    console.log(`user ${user} was added`);
    res.json(user);
  } catch (error) {
    console.log(error);
    res.send(error);
  }
});

function validate(email, password) {
  if (Users.findOne())
    if (!validator.isEmail(email)) {
      throw "Is not a valid email";
    }

  if (!validator.isStrongPassword(password, { minNumbers: 0, minSymbols: 0 })) {
    throw "Password is not strong enough";
  }
}

module.exports = router;
