var http = require('http');
var fs = require('fs');
var server = http.createServer(function (req, resp) {
    if (req.url == "/lpuadmissions") {
        fs.readFile("index.htm", function (error, pgResp) {
            if (error) {
                //resp.writeHead(404);
                resp.writeHead(404, {'Content-Type': 'text/html'});
                resp.write("404 Not Found");
            } 
            else {
                resp.write(pgResp);
                console.log('a request');
            }
             
            resp.end();
        });
    } 
    else {
        resp.write('<h1>Welcome to LPU official website</h1>');
      resp.write('<body bgcolor="bisque"></body');
      console.log('a request');
        resp.end();
    }
});
server.listen(8000);