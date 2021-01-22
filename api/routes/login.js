const express = require('express');
const keys = require('./../../config/keys');
const passport = require('passport');
const Router = express.Router();


Router.route('/login')
    .get(async (req,res,next) => {
        // const username = req.body.username
        // const password = req.body.password

        // res.status(200)
        // res.render('home')

        res.status(200)
        res.render('login')

        //console.log(username + password)
    })
//passport google oauth authentication

Router.get('/google',passport.authenticate('google', {
    scope:['profile','email']
}))

//redirect URL

Router.get('/google/redirect',passport.authenticate('google'),(req,res) => {

    res.redirect('/profile')
    //res.send(req.user)
})

//logging out
Router.get('/logout',(req,res,next) => {
    req.logOut();
    res.redirect('/')
})


module.exports = Router;