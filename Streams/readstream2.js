var http = require('http');
var fs = require('fs');
http.createServer(function (req, res) {
var reader = fs.createReadStream('test.txt'); 
reader.on('data', function(chunk) {
   data = chunk;
});
reader.on('end',function() {
   res.end(data);
});
reader.on('error', function(err) {
   console.error(err);
});
}).listen(2000);
