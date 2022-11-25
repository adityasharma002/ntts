const fs = require("fs");
var http = require('http');

http.createServer(function(req, res) {
  const url = req.url;
  if (url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Form</title></head>");
    res.write(
      "<body><form action='/msg' method='POST'><input type='text' name='msg'/><button type='submit'>Submit</button></form></body>"
    );
    res.write("</html>");
    return res.end();
  }
  if (url === "/msg" && req.method === "POST") {
    const data = [];
    req.on("data", (chunks) => {
      data.push(chunks);
    });

    req.on("end", () => {
      const parseddata = Buffer.concat(data).toString(); //message=hello
      const finaldata = parseddata.split("=")[1];

      var sum=0;
      for (var i = 1; i <= finaldata; ++i) {
        sum += i;
    }
   fs.writeFile("test.txt", sum, () => {
        console.log("File Written");
        res.end("sum calculated");
      });

    });
  }
}).listen(2000);