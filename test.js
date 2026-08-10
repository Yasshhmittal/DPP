const fs = require("fs");
let passed = true;

console.log("Registration Test\n");

// TC-01: Check index.html

if (fs.existsSync("index.html")) {
    console.log("TC-01: index.html exists: PASS");
} else {
    console.log("TC-01: index.html exists: FAIL");
    passed = false;
}

// TC 02
if(fs.existsSync("style.css"))
{
    console.log("TC 02 : style.css exist : Pass");
}
else{
      console.log("TC 02 : style.css exist : Fail");
    passed = false;

}

// TC-04: check students.json

if(fs.existsSync("students.json")){
    console.log("TC-04: students.json exists: PASS");
} else {
    console.log("TC-04: students.json exists: FAIL");
    console.log("\nBuild FAILED");
    process.exit(1);
}

// Read JSON
const students = JSON.parse(fs.readFileSync("students.json"));

// TC-05 to TC-08: Validate all students
for(let i = 0; i < students.length; i++){
    const student = students[i];

    // TC-05: Name Validation
    if(student.name.trim() !== ""){
        console.log(`TC-05: Student ${i+1} Name Validation: PASS`);
    } else {
        console.log(`TC-05: Student ${i+1} Name Validation: FAIL`);
        passed = false;
    }

    // TC-06: Email Validation (must be @gmail.com)
    if(student.email.includes("@") && student.email.toLowerCase().endsWith("@gmail.com")){
        console.log(`TC-06: Student ${i+1} Email Validation: PASS`);
    } else {
        console.log(`TC-06: Student ${i+1} Email Validation: FAIL`);
        passed = false;
    }

    // TC-07: Mobile Validation (must be exactly 10 digits)
    if(/^[0-9]{10}$/.test(student.mobile)){
        console.log(`TC-07: Student ${i+1} Mobile Validation: PASS`);
    } else {
        console.log(`TC-07: Student ${i+1} Mobile Validation: FAIL`);
        passed = false;
    }

    // TC-08: Branch Validation
    if(student.branch.trim() !== ""){
        console.log(`TC-08: Student ${i+1} Branch Validation: PASS`);
    } else {
        console.log(`TC-08: Student ${i+1} Branch Validation: FAIL`);
        passed = false;
    }
}

// TC-09: Overall Build Status
if(passed){
    console.log("\nTC-09: All Tests Passed: PASS");
    console.log("Build SUCCESS");
    process.exit(0);
} else {
    console.log("\nTC-09: Some Tests Failed: FAIL");
    console.log("Build FAILED");
    process.exit(1);
}