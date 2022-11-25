var http=require('http');
var server = http.createServer(function(request,response)
{
console.log('it is a request');
response.write('Hello LPU');
console.log(request.url)
response.end();
});
server.listen(2000);
console.log('Server is running at port 2000');