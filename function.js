//function decleration//
//function greetuser(name){
   // return "hello,$(name)!";
//}
//console call//
//console.log(greetuser("skillsikshya"));

const score=20
const grace=5

//function addmarks(score,grace){
    // return score + grace;
//}
//console.log(addmarks(score,grace));

// const addmarks=function(score,grace){
  //  return score + grace;
 //}
 //console.log(addmarks(score,grace));

//const addmarks=(score,grace)=>score + grace;
//console.log(addmarks(score,grace));

function isVaildEmail(email){
    if(!email.includes("@")){
        return false;//early exit
    }
    return true;
}

console.log(isVaildEmail("user@example.com"));
//true
console.log(isVaildEmail("userexample.com"));
//false

// describe('test.suits',()=>{
//     test('test1',()=>{
//         expect(isVaildEmail("user@example.com")).toBe(true);
//     });
// }); 