var http=require('http');
function reqresp(request, response)
{
    console.log('it is a request');
    response.write('Hello LPU');
    response.end();
}
var server = http.createServer(reqresp);
server.listen(2000);
console.log('Server is running at port 2000');