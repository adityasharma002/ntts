var http = require('http');
var fs = require('fs');
http.createServer(function (req, res) {
  fs.watchFile('test1.txt', (err)=>{
    if(err) return console.error('no such file');
    res.end('file changed');
     });
  
}).listen(2000);





