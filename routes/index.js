var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  //res.render('index', { title: 'Title', message:'something wonderful' });
  res.render('index', { title: 'Lennar', message: 'A sample website using nodejs with github / vsts deployments' });
});

module.exports = router;
