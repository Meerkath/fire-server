var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();
var discover = require('./components/discover')

app.use(bodyParser.json());
app.listen(5000, function () {
});

console.log(discover);


app.get('/feux', function(req, res) {
  res.send({
    id: 100,
    center:'43.61557052155855, 7.075852075580969',
    color:'red'
  });
});