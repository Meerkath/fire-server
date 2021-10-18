var express = require('express');
var app = express();
var cors =  require('cors')
var discover = require('./components/discover')

let port = 5000

// Body Parser Middleware and Cors
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

// Api routes
app.use('/fires', require('./routes/fires'));
app.use('/hydrants', require('./routes/hydrants'));


// Start
app.listen(port, function () {
  console.log(`Server started on port ${port}`);
});
