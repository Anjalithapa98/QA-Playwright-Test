//1. ===(strict equality)
//check if the value on the leftexactly matches the right.

let statusCode = 200;

if (statusCode === 200) {
    console.log("Pass: Status code is 200");
} else {
    console.log("Fail: Status code is not 200");
}

//const label=score>==50? "Pass":"Fail";

const passCriteria=statusCode==="400" ? "Pass:The status code is 200":"Fail:The status code is not 200";
console.log(passCriteria);

// //2. !==(strict Inequality) 
// Return true if the two values are NOT the same
//The statusReceived is 200