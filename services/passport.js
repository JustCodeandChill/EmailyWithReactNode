const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/key');
const mongoose = require('mongoose');

// console.log('env', process.env.NODE_ENV)
// if (process.env.NODE_ENV !== 'production') {
//     absoluteURI = 'http://localhost:5000'

// }else {
//     absoluteURI = 'https://murmuring-hamlet-15680.herokuapp.com'
// }


const User = mongoose.model('users');

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findById(id)
        .then(user => {
            done(null, user);
        })
})
passport.use(new GoogleStrategy(
    {
        clientID: keys.googleClientID,
        clientSecret: keys.googleClientSecret,
        callbackURL: "/auth/google/callback",
        proxy : true
    }, 
async (accessToken, refreshToken, profile, done)=>{
    const existingUser = await User.findOne({googleID : profile.id});
    if (existingUser) {
        return done(null, existingUser)
    }
    const user = await new User({ googleID : profile.id}).save()
    done(null, user)
}))