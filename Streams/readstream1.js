const fs = require('fs');
const server = require('http').createServer();

server.on('request', (req, res) => {
  const src = fs.createReadStream('test.txt');
  src.pipe(res);
});

server.listen(2000);

/*const fs = require('fs');
const server = require('http').createServer();

server.on('request', (req, res) => {
  fs.readFile('test.txt', (err, data) => {
    if (err) throw err;
  
    res.end(data);
  });
});

server.listen(8000);*/