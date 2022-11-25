var http = require('http');
var server = http.createServer(function (req, res) 
{   
    if (req.url == '/') 
	{     
        res.write('Welcome to Index page');
    }
    else if (req.url == "/emp") 
	{
        res.write('Welcome to Employees page');
    }
    else if (req.url == "/admin") 
	{
        res.write('Welcome to Admin page');
    }
    else
    {
        res.write('Invalid Request!');
    }
    res.end();
});
server.listen(2000);
console.log('Server is running at port 2000');