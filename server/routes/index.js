var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Air Fare Calculator' });
});

router.post('/', function(req, res, next) {
  //entire form object
  // res.send(req.body);
  // set up variables to grab values of each
  var departureCity = req.body.dep_city;
  var arrivalCity = req.body.arr_city;
  var totalBags = req.body.bags;
  var fareClass = req.body.fare_class;
  var wifi = req.body.wifi;
  var discount = req.body.discount;

  var total = calculate(departureCity, arrivalCity, totalBags, fareClass, wifi, discount);
  res.render('index', {
    title: 'Air Fare Calculator',
    output:total  });
  console.log(calculate(departureCity, arrivalCity, totalBags, fareClass, wifi, discount));

});

function calculate (dep, arr, bags, fare, wifi, discount) {
  var total = 0;
  if (dep === 'chi' && arr === 'la') {
    total += 100;
  }

  if (bags) {
    total += bags * 25;
  }

  if (fare === '200') {
    total += 200;
  }

  if (wifi === 'on') {
    total += 20;
  }

  if (discount) {
    total = total * (1-discount);
  }

  return total;

}

// What do we want to do?
  // Set up route to handle a POST request to '/' - DONE
  // Grab form values - DONE
  // Write a function to calculuate the fare price
  // Render output back to index.html


module.exports = router;
