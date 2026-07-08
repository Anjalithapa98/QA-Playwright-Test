let testNumber = 20
const graceMarks =20

// Assignment operator
console.log('Test number',testNumber)

testNumber ++
console.log("increment by 1",testNumber)

testNumber --
console.log('decrement by 1',testNumber)

testNumber+=10
console.log("Add and assign",testNumber)

testNumber-=10
console.log("subtract and assign",testNumber)

//Arthmetic Operators
console.log("Grace Marks addition to score", testNumber + graceMarks);
console.log("Grace Marks  substraction to score", testNumber - graceMarks);
console.log("Grace Marks Mutiply to score", testNumber * graceMarks);
console.log("Grace Marks divide to score", testNumber / graceMarks);
console.log("Grace Marks remainder to score", testNumber % graceMarks);

if (testNumber===graceMarks){
    console.log("Both numbers are equal")
}
else{
    console.log("Two number are different")
}

if (testNumber>=graceMarks){
    console.log("The greater number is",testNumber);
}
else{
    console.log("The greater number is",graceMarks);
}