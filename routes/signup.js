const express = require("express")
const router = express.Router()
const mongoose = require("mongoose")
const bcrypt = require("bcrypt")
const validator = require("validator")

router.post("/", async (req, res) => {
  try {
    const { email, password } = req.body
    validate(email, password)
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)
  } catch (error) {
    console.log(error)
    process.exit(1)
  }
})

function validate(email, password) {
  if (!validator.isEmail(email)) {
    throw "Is not a valid email"
  }

  if (!validator.isStrongPassword(password, { minNumbers: 0, minSymbols: 0 })) {
    throw "Password is not strong enough"
  }
}

module.exports = router
