const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt-nodejs');

const {User} = require('../models');

module.exports = (passport) => {
    passport.use(
        new LocalStrategy(
            {
                usernameField: 'userId',
                passwordField: 'password',
                passReqToCallback: true
            },
            async (req, userId, password, done) => {
                try {
                    const findUser = await User.findOne({where: {userId}});
                    if (findUser) {
                        const result = bcrypt.compareSync(password, findUser.password);

                        if (result) {
                            done(null, findUser);
                        } else {
                            done(null, false, {message: '비밀번호가 일치하지 않습니다.'});
                        }
                    } else {
                        done(null, false, {message: '가입되지 않은 회원입니다.'});
                    }
                } catch (error) {
                    console.log(error);
                    done(error);
                }
            }
        )
    );
};