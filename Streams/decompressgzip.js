var zlib = require('zlib');
var fs = require('fs');

var gunzip = zlib.createGunzip();
var r = fs.createReadStream('test.txt.gz');
var w = fs.createWriteStream('test.txt');
r.pipe(gunzip).pipe(w);