var fs = require('fs'); 
fs.open('test.txt', 'w', 0o777, function (err, f) { 
if (err) return console.error('Error'); 
console.log("File opened!!");	 
}); 
