const express = require('express');
const router = express.Router();
const uuid = require('uuid');

// Get all hydrants
router.get('/', function(req, res) {
  res.send(
    [
      {
        id: uuid.v4(),
        center:['43.615', '7.0758'],
      },
      {
        id: uuid.v4(),
        center:['43.61857052155855', '7.074852075580969'],
      },
      {
        id: uuid.v4(),
        center:['43.62857052155855', '7.074652075580969'],
      },
      {
        id: uuid.v4(),
        center:['43.65857052155855', '7.074552075580969'],
      },
    ]  
);
});

// Create hydrant
router.post('/', (req, res) => {
  const newHydrant = {
    id: uuid.v4(),
    center: req.body.center,
  }
  if(!Array.isArray(newHydrant.center)){
    return res.status(400).json({ msg: 'Please make sure you give an array.'});
  }
  // Add hydrant
  res.json(hydrants);
})


module.exports = router;