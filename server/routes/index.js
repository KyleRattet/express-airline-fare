var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Air Fare Calculator' });
});

router.post('/', function(req, res, next) {
  //entire form object

  //set up variables to grab values of each
  var departureCity = req.body.dep_city;
  var arrivalCity = req.body.arr_city;
  var totalBags = req.body.bags;
  var fareClass = req.body.fare_class;
  var wifi = req.body.wifi;
  var discount = req.body.discount;
  res.send(req.body);
});

function calculuate (dep, arr, bags, fare, wifi, discount) {

}

// What do we want to do?
  // Set up route to handle a POST request to '/' - DONE
  // Grab form values - DONE
  // Write a function to calculuate the fare price
  // Render output back to index.html


module.exports = router;
