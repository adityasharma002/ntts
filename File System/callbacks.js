//Concept of blocking and non blocking code


// var fs = require("fs");
// var data = fs.readFileSync('test.txt');
// console.log(data.toString());
// console.log("Program Ended");
//toString() method is used to decode a buffer data to string according to the specified encoding type.

var fs = require("fs");
fs.readFile('test.txt', function (err, data) {
   if (err) return console.error(err);
   console.log(data.toString());
});
console.log("Program Ended");