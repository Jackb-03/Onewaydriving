var express = require('express');
var app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');


// index page
app.get('/', function (req, res) {
  //var mascots = [
  //{ name: 'Sammy', organization: "DigitalOcean", birth_year: 2012},

  // ];
  var tagline = "No programming concept is complete without a cute animal mascot.";

  res.render('pages/index', {
    //mascots: mascots,
    //tagline: tagline
  });
});



// about-us page
app.get('/about-us', function (req, res) {
  res.render('pages/about');
});

// services page
app.get('/services', function (req, res) {
  res.render('pages/services');
});

// parent information
app.get('/parent-info', function (req, res) {
  res.render('pages/parent');
});

// FAQ page
app.get('/FAQ', function (req, res) {
  res.render('pages/FAQ');
});

// pricing page
app.get('/pricing', function (req, res) {
  res.render('pages/pricing');
});

// contact page
app.get('/contact', function (req, res) {
  res.render('pages/contact');
});



app.listen(process.env.PORT || 5000);