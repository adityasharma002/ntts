var http = require('http');
var fs = require('fs');
http.createServer(function (req, res) {
    fs.writeFile('test.txt', 'Hello World all!', function (err) { 
        if (err) console.log(err);
        else console.log('Write operation complete.');
    res.end();
  });
}).listen(2000);