var express = require('express');
var router = express.Router();

// SET DEBUG=expressproject:* & npm start
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express2' });
});

module.exports = router;
