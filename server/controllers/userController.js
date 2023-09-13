const User = require('../userModels');
const userController = {};

userController.login = (req, res, next) => {
  const { username, password } = req.body;
  
  return next();
};

userController.signUp = (req, res, next) => {
  const { username, password } = req.body;
  
  
  return next();
};



module.exports = userController;