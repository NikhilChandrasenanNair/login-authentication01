// const mongoose = require('mongoose')
// const passport = require('passport')
// const LocalStrategy = require('passport-local').Strategy
//
// let User = require('../models/user')
//
// let userController = {}
//
// userController.register = (req, res) => {
//
//   if (!req.body.email || !req.body.password) {
//     return res.send({success: false, msg: 'Please pass Email and Password.'})
//   } else {
//     var newUser = new User({
//       email: req.body.email,
//       password: req.body.password
//     });
//     newUser.save(function(err) {
//       if (err) {
//         return res.json({success: false, msg: 'Email already exists.'});
//       }
//       res.json({success: true, msg: 'Successfully created new user.'});
//     });
//   }
//
//
// }
//
//
//
//
//
//
// module.exports = userController;
