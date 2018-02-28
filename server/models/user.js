const mongoose = require('mongoose')
const Schema = mongoose.Schema
const passportLocalMongoose = require('passport-local-mongoose')

let UserSchema = new Schema({
	email:{
		type: String,
    unique: true,
    required: true
	},
  password:{
    type: String,
    required: true
    }
})

UserSchema.plugin(passportLocalMongoose, {
usernameField: 'email',
usernameQueryFields: ['email']
})
module.exports = mongoose.model('User', UserSchema)
