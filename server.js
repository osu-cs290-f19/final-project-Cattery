var path = require('path');
var express = require('express');
var exphbs = require('express-handlebars');
var app = express();

var catData = require('./catData.json');

var port =  process.env.PORT || 3000;

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(express.static('public'));

app.get('/', function (req,res){
  res.status(200).render('catteryPage', {catData: catData});
});

app.get('*', function (req, res) {
  res.status(404).sendFile(path.join(__dirname, 'public', '404.html'));
});

app.listen(port, function () {
  console.log("== Server is listening on port", port);
});
