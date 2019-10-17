const express = require('express');
const User = require('../models').User;
const bcrypt = require('bcrypt-nodejs');
const passport = require('passport');
const router = express.Router();

router.post('/signup', async (req, res, next) => {
    let userInfo = req.body;

    let user = await User.findOne({
        where: {
            userId: userInfo.userId
        }
    });

    if (user != null) {
        next('existing userId');
        return;
    }

    const salt = bcrypt.genSaltSync(1234);
    const encryptedPassword = bcrypt.hashSync(userInfo.password, salt, null);

    user = await User.create({
        userId: userInfo.userId,
        password: encryptedPassword,
        name: userInfo.name
    });

    res.json(user.id);
});

router.post('/signin', async (req, res, next) => {
    passport.authenticate('local', (authError, user, info) => {
        if (authError) {
            console.error(authError);
            return next(authError);
        }

        if (!user) {
            return res.status(401).json('login fail');
        }

        return req.login(user, (loginError) => {
            if (loginError) {
                console.error(loginError);
                return next(loginError);
            }

            return res.status(200).json(user);
        });
    }) (req, res, next);
});

module.exports = router;