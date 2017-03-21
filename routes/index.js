var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  //res.render('index', { title: 'Title', message:'something wonderful' });
  res.render('index', { title: 'Lennar', message: 'A sample website using nodejs with github / vsts deployments' });
});

router.get('/1', function(req, res, next) {
  res.render('index', { title: 'PAGE 1', message: 'The first page' });
});

router.get('/2', function(req, res, next) {
  res.render('index', { title: 'PAGE 2', message: 'The second page' });
});

router.get('/3', function(req, res, next) {
  res.render('index', { title: 'PAGE three', message: 'The third page' });
});

router.get('/4', function(req, res, next) {
  res.render('index', { title: 'PAGE four', message: 'The third page' });
});


module.exports = router;
