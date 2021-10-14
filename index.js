var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();
var discover = require('./components/discover')
var cors =  require('cors')
var discover = require('./components/discover')

app.use(cors());  
let port = 5000
app.use(bodyParser.json());
app.listen(port, function () {
  console.log(`Server started on port ${port}`);  
});

app.get('/feux', function(req, res) {
  res.send(
    [
      {
        id: 100,
        center:['43.615', '7.0758'],
        color:'red'
      },
      {
        id: 101,
        center:['43.61857052155855', '7.074852075580969'],
        color:'red'
      },
      {
        id: 102,
        center:['43.62857052155855', '7.074652075580969'],
        color:'red'
      },
      {
        id: 103,
        center:['43.65857052155855', '7.074552075580969'],
        color:'red'
      },
    ]  
);
});