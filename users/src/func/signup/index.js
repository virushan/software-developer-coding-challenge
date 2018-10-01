const mongoose = require('mongoose');
const User = mongoose.model('User');

const signup = async (req, res, next) => {
    try{
        const user = new User();

        user.username = req.body.user.username;
        user.email = req.body.user.email;
        user.setPassword(req.body.user.password);

        user.save().then(function(){
            return res.json({user: user.toAuthJSON()});
        }).catch(next);
    }catch(error){
        console.log(error);
        res.status(500).json({ msg: "Oops Something went wrong please try again!!!" })
    }
}

module.exports = signup;