var path = require('path');

var express = require('express');
var app = express();


var port = 3000;


app.use(express.static('public'));


app.get('*', function (req, res) {
  res.status(404).sendFile(path.join(__dirname, 'public', '404.html'));
});

app.listen(port, function () {
  console.log("== Server is listening on port", port);
});
