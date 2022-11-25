const fs = require('fs'); 
fs.watchFile( "test.txt", { bigint: true,  persistent: true, interval: 15000, },(curr, prev) => { 
	console.log("\nThe file was edited"); 
	console.log("Previous Modified Time", prev.mtime); 
	console.log("Current Modified Time", curr.mtime); 
	console.log("The contents of the current file are:", 
	fs.readFileSync("test.txt", "utf8") 
	); 
} 
); 

fs.stat('test.txt', function (err, stats) {  
    if (err) {  
        return console.error('not found');  
    }  
    console.log(stats); });

// Make Changes to the file for the first time 
fs.writeFileSync("test.txt", 
   "File Contents are Edited"); 
  
// Make Changes to the file for the second time 
setTimeout( 
  () => fs.writeFileSync("test.txt", 
          "File Contents are Edited Again"), 
  5000 
); 


