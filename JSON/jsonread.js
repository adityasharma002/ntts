const fs = require('fs');
fs.readFile('student.json', (err, data) => {
    if (err) throw err;
    let student = JSON.parse(data);
    console.log(JSON.stringify(student,null,10));
    // console.log(JSON.stringify(student,['marks'],2));
    console.log(student);
});