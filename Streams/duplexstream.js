var fs = require("fs");
var data = 'This is node.js class';

// Create a writable stream
var writer = fs.createWriteStream('test.txt');
var reader = fs.createReadStream('test.txt');

// Write the data to stream with encoding to be utf8
writer.write(data,'UTF8');

// Mark the end of file
writer.end();

// Handle stream events --> finish, and error
writer.on('finish', function() {
   console.log("Write completed.");
});

var data = '';
reader.on('data', function(chunk) {
   data=chunk;
});

reader.on('end',function() {
   console.log(data.toString());
});

writer.on('error', function(err) {
   console.error(err);
});