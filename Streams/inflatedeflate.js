//compression using deflate
var zlib = require('zlib');
var fs = require('fs');

var gzip = zlib.createDeflate();
var r = fs.createReadStream('test.txt');
var w = fs.createWriteStream('test.txt.gz');
r.pipe(gzip).pipe(w);



//decompression using inflate
var zlib = require('zlib');
var fs = require('fs');

var gzip = zlib.createInflate();
var r = fs.createReadStream('test.txt.gz');
var w = fs.createWriteStream('test1.txt');
r.pipe(gzip).pipe(w);