const express = require('express');
const User = require('../models').User;
const bcrypt = require('bcrypt-nodejs');
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

module.exports = router;