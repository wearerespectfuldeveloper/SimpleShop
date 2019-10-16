const local = require('./localStrategy');

module.exports = (passport) => {
    passport.serializeUser((user, done) => {
        let userInfo = {};
        userInfo.id = user.id;
        userInfo.userId = user.userId;
        userInfo.name = user.name;
        done(null, userInfo);
    });

    passport.deserializeUser((user, done) => {
        done(null, user);
    });

    local(passport);
};