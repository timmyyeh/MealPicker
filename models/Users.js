const mongoose = require("mongoose")
const Schema = mongoose.Schema

const UserModel = new Schema({
  email: String,
  password: String,
  createDate: { type: Date, default: Date.now },
})

const Users = mongoose.model("Users", UserModel)

module.exports = Users
