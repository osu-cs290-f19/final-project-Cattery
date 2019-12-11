var path = require('path');
var fs = require('fs');
var express = require('express');
var exphbs = require('express-handlebars');
var bodyParser = require('body-parser');

var app = express();

var catData = require('./catData.json');

var port =  process.env.PORT || 3000;

app.use(bodyParser.json());
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(bodyParser.json());

app.use(express.static('public'));

app.get('/', function (req,res){
  res.status(200).render('catteryPage', {catData: catData});
});

app.post('/newCat', function (req, res, next) {
  var cat = req.params.toLowerCase();
  if (catData[cat]) {
    if (req.body) {
      catData[cat].cats.push();
    }
  } else {

  }
});

app.get('*', function (req, res) {
  res.status(404).render('404');
});

app.listen(port, function () {
  console.log("== Server is listening on port", port);
});
