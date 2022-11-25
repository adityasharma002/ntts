var fs = require('fs');
fs.readFile('./b/c/myfile.txt', function (err, data) { 
if (err) 
console.error('not found');
else
console.log(data.toString());
});