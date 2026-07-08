const tests=[
    {id:1,name:'login flow',status:'pass'},
    {id:2,name:'checkout flow',status:'fail'},
    {id:3,name:'profile edit',status:'pass'},
    {id:4,name:'payment flow',status:'fail'}
];

//find the failing test
const failingTest = tests.find(test => test.status === 'fail');
console.log(failingTest); // Output: {id: 2, name: 'checkout flow', status: 'fail'}

const passingTest = tests.filter(test => test.status === 'pass');
console.log(passingTest); // Output: [{id: 1, name: 'login flow', status: 'pass'},
//  {id: 3, name: 'profile edit', status: 'pass'}]

// // get all the test name
//const testNames = tests.map(test => test.name);
//console.log(testNames); // Output: ['login flow', 'checkout flow', 'profile edit']

// // filter out only the passing tests
//const passingTests = tests.filter(test => test.status === 'pass');
//console.log(passingTests); // Output: [{id: 1, name: 'login flow', status: 'pass'}, 
// {id: 3, name: 'profile edit', status: 'pass'}]

// // count how many tests passed
const passedCount = tests.reduce((count, t) =>t.status === 'pass' ? count + 1 : count, 0);
console.log(passedCount); // Output: 2

// // check if all tests passed
//const allPassed = tests.every(test => test.status === 'pass');
// console.log(allPassed); // Output: false