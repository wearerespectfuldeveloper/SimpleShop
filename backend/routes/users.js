const express = require('express');
const router = express.Router();
const User = require('../models').User;

/* GET users listing. */
router.post('/:userId/check', async (req, res, next) => {
    let user = await User.findOne({
        where: {
            userId: req.params.userId
        }
    });

    if (user) {
        res.status(500).json("userId is not available");
    } else {
        res.status(200).json("ok");
    }
});

router.post('/', function (req, res, next) {
    User.create({
        userId: 'icarus',
        password: 'aaa',
        name: 'chul'
    }).then((user) => {
        res.json(user);
    }).catch((err) => {
        console.log(err);
        next(err);
    })
});

module.exports = router;
