const http=require('http');
const server = http.createServer((req,res)=>{
    
res.write("<html>");
res.write("<body><input type=text><input type=submit></body>");
res.write("<html>");
res.end();
console.log('it is a request');
}
);
server.listen(2000);