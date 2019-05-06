var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/ric', function(req, res, next) {
  res.send('Ric cool');
});

router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
