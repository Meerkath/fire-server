var request = require('request');

var cseUri = "http://192.168.143.151:8080/~/in-cse/?fu=1";
let options = {
  method:"GET",
  uri: cseUri,
  headers: {
    "X-M2M-Origin": "admin:admin",
    "Content-Type": "application/json"
  }
};

module.exports = () => {
  request(options, function(error, res, body){
    console.log(res);
    return res
  });
}
