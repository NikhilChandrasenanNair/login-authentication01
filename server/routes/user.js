const auth = require("../controllers/authController")

module.exports = (app) => {

  app.post('/register', auth.register)

}
