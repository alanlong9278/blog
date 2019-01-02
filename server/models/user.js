const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
  name: String,
  sex: String,
  mail: String,
  avatarUrl: String
}, { collection: 'user' })

const User = module.exports = mongoose.model('user', userSchema) // eslint-disable-line