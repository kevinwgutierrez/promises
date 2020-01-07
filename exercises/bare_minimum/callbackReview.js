/**
 * Implement these functions following the node style callback pattern
 */

var fs = require('fs');
var request = require('request');

// This function should retrieve the first line of the file at `filePath`
var pluckFirstLineFromFile = function (filePath, callback) {
  fs.readFile(filePath, (err, file) => {
    if (!err) {
      callback(null, file.toString().split('\n')[0]);
    } else {
      callback(err);
    }
  });
};

// This function should retrieve the status code of a GET request to `url`
var getStatusCode = function (url, callback) {
  // get = function (uri, options, callback)
  request.get(url, {}, (err, res) => {
    if (!err) {
      callback(null, res.statusCode);
    } else {
      callback(err);
    }
  });
};

// Export these functions so we can test them and reuse them in later exercises
module.exports = {
  getStatusCode: getStatusCode,
  pluckFirstLineFromFile: pluckFirstLineFromFile
};
