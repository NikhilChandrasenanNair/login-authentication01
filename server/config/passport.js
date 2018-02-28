const LocalStrategy = require('passport-local').Strategy

let User = require('../models/user')

module.exports = function(passport) {

  passport.serializeUser(User.serializeUser())
  passport.deserializeUser(User.deserializeUser())

  passport.use('local-signup', new LocalStrategy({
        usernameField: 'email',
        passwordField: 'password',
        passReqToCallback: true
    },
    function(req, email, password, done){
        process.nextTick(function(){
             User.findOne({'email': email}, function(err, user){
                 if(err){
                     console.log('---err---', err);
                     return done(err);
                 }
                 if(user){
                     console.log('Email already exists');
                     return done(null, false, {message: 'Email already exists'});
                 } else{
                     var newUser = new User();
                     newUser.email = email;
                     newUser.password = password;
                     console.log('---newUser---', newUser);
                     newUser.save(function(err){
                         if(err) {
                           console.log(err);
                           if(err.message == 'User validation failed') {
                             console.log(err.message);
                             return done(null, false, {errMsg: 'Please fill all fields'});
                           }
                           return errHandler(err);
                         }
                         console.log('New user successfully created...',newUser.email);
                         console.log(newUser);
                         return done(null, newUser);
                     });
                 }

             });
        });
    }));
}
