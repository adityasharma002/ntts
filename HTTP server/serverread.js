var http = require('http');
var fs = require('fs');
http.createServer(function (req, res) {
  fs.readFile('test.txt', function(err, data) {
    if(err) 
    {
      res.write('Error in reading file');
    }
    else
    {
    console.log('File read successfully');
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
  }
    res.end();
  });
}).listen(2000);