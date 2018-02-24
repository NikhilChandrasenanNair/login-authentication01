const mongoose = require('mongoose')
let User = require('../models/user')

let userController = {}

userController.register = (req, res) => {

  if (!req.body.username || !req.body.password) {
    return res.send({success: false, msg: 'Please pass username and password.'})
  } else {
    var newUser = new User({
      username: req.body.username,
      password: req.body.password
    });
    newUser.save(function(err) {
      if (err) {
        return res.json({success: false, msg: 'Username already exists.'});
      }
      res.json({success: true, msg: 'Successfully created new user.'});
    });
  }
}


module.exports = userController;
