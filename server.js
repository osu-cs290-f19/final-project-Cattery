
var path = require('path');
var fs = require('fs');
var express = require('express');
var exphbs = require('express-handlebars');
var bodyParser = require('body-parser');
var app = express();

var catData = require('./catData.json');

var port =  process.env.PORT || 3000;
var bodyParser = require('body-parser');

const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');

const adapter = new FileSync('catData.json');
const db = low(adapter);

app.use(bodyParser.json());
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(bodyParser.json());

app.use(express.static('public'));

app.get('/', function (req,res){
  res.status(200).render('catteryPage', {catData: catData["cats"]});
});

app.post('/', function(req, res){
  res.status(200);
  console.log("writing");
  db.get('cats')
   .push({
      catID: req.body.catID,
      catNUM: req.body.catNUM,
      color: req.body.color,
      photoURL: req.body.photoURL,
      age: req.body.age,
      feedStat: req.body.feedStat,
      groomStat: req.body.groomStat,
      playStat: req.body.playStat,
      total: req.body.total,
      kids: req.body.kids
  })
    .write()
});


app.get('*', function (req, res) {
  res.status(404).render('404');
});

app.listen(port, function () {
  console.log("== Server is listening on port", port);
});
