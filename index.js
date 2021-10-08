const express = require('express');
const members = require('./Members')
const path = require('path');
const logger = require('./middleware/logger')
const app = express();


// Int middleware 
// app.use(logger);
// gets all members
app.get('/api/members', (req,res) => {res.json(members);})

// Get single Member
app.get('/api/members/:id',(req, res) => {
  const found = members.some(member => member.id === parseInt(req.params.id));
  if(found){
    res.json(members.filter(member => member.id === parseInt(req.params.id)))
  } else {
    res.status(400).json({ msg: `No member with the id of ${req.params.id}.` });
  }
  
});

// Set static folder
app.use(express.static(path.join(__dirname, 'public')))

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));