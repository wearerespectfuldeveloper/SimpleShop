var express = require('express');
var router = express.Router();
const User = require('../models').User;

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
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
