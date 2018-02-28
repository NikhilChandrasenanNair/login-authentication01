// const auth = require("../controllers/authController")
//
// module.exports = (app) => {
//
//   app.post('/register', auth.register)
//
// }

module.exports = (app, passport) => {
  app.post('/register', passport.authenticate('local-signup', {
    failureFlash: true
  }))
}
