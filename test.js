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