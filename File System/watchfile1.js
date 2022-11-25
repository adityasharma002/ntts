const fs = require('fs'); 
fs.watchFile("file1.txt", (curr, prev) => { 
console.log("\nThe File was modified"); 
console.log("Previous Modification Time", prev.mtime); 
console.log("Current Modification Time", curr.mtime); 
}); 

// Renaming the file to a new name 
setTimeout( 
  () => fs.renameSync("file1.txt", "file2.txt"), 1000 
); 

// Renaming the file back to its old name cd
setTimeout( 
() => fs.renameSync("file2.txt", "file1.txt"), 
7000 
); 
