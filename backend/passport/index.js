const local = require('./localStrategy');
const {User} = require('../models');

module.exports = (passport) => {
    passport.serializeUser((user, done) => {
        done(null, user.userId);
    });

    passport.deserializeUser((userId, done) => {
        User.find({where: {userId: userId}})
            .then(user => done(null, user))
            .catch(err => done(err));
    });

    local(passport);
};