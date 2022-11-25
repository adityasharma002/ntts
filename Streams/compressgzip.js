var zlib = require('zlib');
var fs = require('fs');

var gzip = zlib.createGzip();
var r = fs.createReadStream('test.txt');
var w = fs.createWriteStream('test.txt.gz');
r.pipe(gzip).pipe(w);