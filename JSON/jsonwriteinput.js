const fs = require('fs');
const prompt=require('prompt-sync')();

var student = new Object();
student.name = prompt("Enter name of student : ");
student.age = Number(prompt("Enter age of student : "));
student.gender = prompt("Enter the gender of student : ");
 
let data = JSON.stringify(student, null, 2);

fs.writeFile('student.json', data, (err) => {
    if (err) throw err;
    console.log('Data written to file');
});
