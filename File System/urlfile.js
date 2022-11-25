const fs = require('fs');
const fileUrl = new URL('file:C:/Users/dell/Desktop/z/b/c/myfile.txt');
var data = fs.readFileSync(fileUrl);
console.log(data.toString());