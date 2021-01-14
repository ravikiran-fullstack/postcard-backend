var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/login', function(req, res, next) {
  res.send('Twitter login route');
});

/* GET users listing. */
router.get('/auth', function(req, res, next) {
  res.send('Twitter user logged in');
});

module.exports = router;
