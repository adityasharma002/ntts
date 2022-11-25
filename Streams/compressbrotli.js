// Node.js program to demonstrate the      
// createBrotliCompress() method 
  
// Including zlib and fs module 
const zlib = require("zlib"); 
const fs = require('fs'); 
  
// Creating readable Stream 
const inp = fs.createReadStream('test.txt'); 
  
// Creating writable stream 
const out = fs.createWriteStream('test.txt.gz'); 
  
// Calling createBrotliCompress method 
const brot = zlib.createBrotliCompress(); 
  
// Piping 
inp.pipe(brot).pipe(out); 
console.log("Program Completed!")