const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20')
const keys = require('./../config/keys');
const User = require('./../models/user-model');

passport.use(
    new GoogleStrategy({
        callbackURL: "/auth/google/redirect",
        clientID: keys.google.clientID,
        clientSecret: keys.google.clientSecret,
    }, (accessToken, refreshToken, profile, done) => {
        // passport callback function
        // console.log('passport callback function fired:');
        // console.log(profile);
        // console.log(profile.displayname)
        User.findOne({googleID: profile.id}).then((currentUser) => {
            if(currentUser){

                //if user found
                console.log(`user is ${currentUser}`)

            }else{

                //create user

                new User({
                    username: profile.displayName,
                    googleID: profile.id,
                    emailID: profile.emails[0].value
                }).save().then((newUser)=> {
                    console.log(`new user created ${newUser}`)
                })
            }
        })

        

    })
)