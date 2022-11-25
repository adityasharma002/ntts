var http = require('http');
var url = require('url');
var fs = require('fs');

var server = http.createServer(function (req, res) {
  var q = url.parse(req.url, true);
  var filename = "." + q.pathname;
  fs.writeFile(filename, 'hey', function(err) {
    if (err) return res.end("404 Not Found");
    res.write('Contents written');
    return res.end();
  });
});
server.listen(8000);
