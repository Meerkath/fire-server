const { request } = require('express');
const express = require('express');
const router = express.Router();
const uuid = require('uuid');
const DbConnect = require('../model/DbConnect')

router.get('/', function(req, res) {
  res.send(
    [
      {
        id: uuid.v4(),
        center:['43.615', '7.0758'],
        color:'red'
      },
      {
        id: uuid.v4(),
        center:['43.61857052155855', '7.074852075580969'],
        color:'red'
      },
      {
        id: uuid.v4(),
        center:['43.62857052155855', '7.074652075580969'],
        color:'red'
      },
      {
        id: uuid.v4(),
        center:['43.65857052155855', '7.074552075580969'],
        color:'red'
      },
    ]  
);
});

router.post('/', function(req, res) {
  res.send('New fire created');
});

module.exports = router;