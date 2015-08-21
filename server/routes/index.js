var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Air Fare Calculator' });
});

// What do we want to do?
  // Set up route to handle a POST request to '/'
  // Grab form values
  // Write a function to calculuate the fare price
  // Render output back to index.html


module.exports = router;
