var http = require('http');
const fs = require('fs'); 
var server = http.createServer(function (req, res) {   

    fs.readFile('what.json', (err, data) => {
        if (err) throw err;
        let what = JSON.parse(data);
        res.write(JSON.stringify(what,null,1));  
        res.end(); 
    });
            
});
server.listen(5000);
console.log('Node.js web server at port 5000 is running..')