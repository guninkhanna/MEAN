// var express = require('express');
// var router = express.Router();

// router.get('/', function (req, res, next) {
//   //res.send sends whatever we want to the browser 
//   // res.send('INDEX PAGE'); - this is a quick way to putput to the browser to check

//   //res.render to render html files to the browser

//   res.render('index.html');

// });

// module.exports = router;


var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
  res.render('index.html');
});

module.exports = router;