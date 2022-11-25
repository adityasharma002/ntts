var http = require('http');
var fs = require('fs');
http.createServer(function (req, res) {
  fs.writeFile('test.txt', 'Hello World!', function (err) { 
    if (err) console.log(err);
    else
console.log('Write operation complete.');
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end();
});
}).listen(2000);