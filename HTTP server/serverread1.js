var http = require('http');
var fs = require('fs');
var server = http.createServer(function (req, res) {
    if (req.url == "/lpuadmissions") 
    {
        fs.readFile("index.htm", function (error, data) {
            if (error) {
                //resp.writeHead(404);
                res.write('Contents you are looking are Not Found');
                console.log('a request');
            } 
            else {
                res.write(data);
                console.log('a request');
            }
            res.end();
        });
    } 
    else {
        res.write('<h1>Welcome to LPU official website</h1>');
        res.write('<body bgcolor="bisque"></body');
        console.log('a request');
        res.end();
    }
});
server.listen(2000);