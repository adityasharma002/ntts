var zlib = require('zlib');
var fs = require('fs');

var prompt = require('prompt-sync')();
var data = prompt('Enter data to enter  ');

var writer = fs.createWriteStream('test.txt');
writer.write(data);
writer.end();
writer.on('finish', function() {
   console.log("Write completed.");
});


var gzip = zlib.createGzip();
var r = fs.createReadStream('test.txt');
var w = fs.createWriteStream('test.txt.gz');
r.pipe(gzip).pipe(w);