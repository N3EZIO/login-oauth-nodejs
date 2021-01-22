const Router = require('express').Router();

const authCheck = (req,res,next) => {
    if(!req.user){
        res.redirect('/auth/login');
    }
    else{
        next();
    }
}


Router.get('/',authCheck,(req,res) => {
    res.render('profile',{user:req.user})
    //res.send('you are logged in <br>' + req.user.username + '<br>' +req.user.emailID)
})


module.exports = Router;