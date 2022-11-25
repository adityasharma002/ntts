var formidable = require('formidable');
var fs = require('fs');
var http = require('http');

http.createServer(function (req, res) {
  if (req.url == '/upload') {
    var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
      var oldpath = files.fileupload.path;
      var newpath = 'C:/Users/dell/Desktop/downloads/' + files.fileupload.name;
      fs.rename(oldpath, newpath, function (err) {
        if (err) return console.error(err);
        res.write('File uploaded successfully');
        res.end();
      });
 });
  } 
  else 
  {
    res.writeHead(200, {"Content-Type": "text/html"});
    res.write("<form action='upload' method='post' enctype='multipart/form-data'>");
    res.write("<input type='file' name='fileupload'><br>");
    res.write("<input type='submit'>");
    res.write("</form>");
    res.end();
  }
}).listen(2000);