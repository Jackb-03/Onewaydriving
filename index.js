var express = require('express');
var app = express();

app.use( express.static( "public" ) );

// set the view engine to ejs
app.set('view engine', 'ejs');


// index page
app.get('/', function(req, res) {
  var mascots = [
    { name: 'Sammy', organization: "DigitalOcean", birth_year: 2012},

  ];
  var tagline = "No programming concept is complete without a cute animal mascot.";

  res.render('pages/index', {
    mascots: mascots,
    tagline: tagline
  });
});

// about page
app.get('/about', function(req, res) {
  res.render('pages/about');
});

// pricing page
app.get('/pricing', function(req, res) {
  res.render('pages/pricing');
});

// services page
app.get('/services', function(req, res) {
  res.render('pages/services');
});

// contact page
app.get('/contact', function(req, res) {
  res.render('pages/contact');
});

app.listen(8080);
console.log('Server is listening on port http://192.168.0.101:8080');

app.listen(3000);
console.log('Server is listening on port http://192.168.0.124:3000');