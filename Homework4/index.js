const fs = require('fs');

// CREATE
fs.writeFile('employees.json', '{"name": "Employee 1 Name", "salary": 2000}', 'utf8', (err)=>{
    if (err) console.log(err);
    else console.log("File created succesfully.");
});

// READ
fs.readFile('employees.json', 'utf8', (err, data)=>{
    if (err) console.log(err);
    else console.log("File read.");
    console.log(data);
});

// UPDATE
fs.appendFile('employees.json', '\n{"name": "Employee 2 Name", "salary": 3000}', 'utf8', (err)=>{
    if (err) console.log(err);
    else console.log("New data added.");
});

// DELETE
fs.unlink('employees.json', (err)=>{
    if (err) console.log(err);
    else console.log("Data deleted.");
});
