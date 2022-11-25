var http = require('http');
var zlib = require('zlib');
var fs = require('fs');
http.createServer(function (req, res) {
var gzip = zlib.createGzip();
var r = fs.createReadStream('test.txt');
var w = fs.createWriteStream('test.txt.gz');
r.pipe(gzip).pipe(w);
   res.end(); 
}).listen(2000);
