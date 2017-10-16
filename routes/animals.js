var express = require('express');
var router = express.Router();

/* GET animals listing. */
router.get('/', function(req, res, next) {
//  var myObj = {name: "name"}
  res.send('myObj');
});

module.exports = router;
