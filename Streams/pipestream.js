var fs = require("fs");

// Create a readable stream
var reader = fs.createReadStream('test.txt');

// Create a writable stream
var writer = fs.createWriteStream('test1.txt');

writer.on('pipe', () => {
   console.log('Something is piping into the writer.');
 });
 reader.pipe(writer);
