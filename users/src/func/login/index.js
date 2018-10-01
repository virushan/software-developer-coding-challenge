const passport = require('passport');

const login = async (req, res, next) => {
  if(!req.body.user.email){
    return res.status(422).json({errors: {email: "can't be blank"}});
  }
  
  if(!req.body.user.password){
    return res.status(422).json({errors: {password: "can't be blank"}});
  }
  
  passport.authenticate('local', {session: false}, function(err, user, info){
    if(err)
      return next(err); 

    if(user){
      user.token = user.generateJWT();
      return res.json({user: user.toAuthJSON()});
    } else {
      return res.status(422).json(info);
    }
  })(req, res, next);
}

module.exports = login;