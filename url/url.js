var url = require('url');
var adr = 'http://localhost:8000/default.htm?name=Raj&Age=20';
var q = url.parse(adr); //q is an object here; url.parse takes three parameters

console.log(q.host); //returns 'localhost:8080'
console.log(q.href);
console.log(q.hostname);
console.log(q.port);
console.log(q.pathname); //returns '/default.htm'
console.log(q.search); //returns '?year=2017&month=february'
console.log(q.path);
console.log(q.auth);
console.log(q.protocol);
console.log(q.query.name); //returns 'Raj'
console.log(q.query);
// console.log(q);