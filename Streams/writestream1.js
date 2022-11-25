const fs = require('fs');
const file = fs.createWriteStream('test.txt');

for(let i=0; i<= 100; i++) {
  file.write('Lorem ipsum');
}

file.end();
file.on('finish', function() {
    console.log("Write completed.");
 });
 
file.on('error', function(err) {
    console.error('Error occurred');
 });
 