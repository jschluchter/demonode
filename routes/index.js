var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  //res.render('index', { title: 'Title', message:'something wonderful' });
  res.render('index', { title: 'IAMCP Tampa', message: 'the March 2017 meeting, "An Azure Overview""' });
});

module.exports = router;
