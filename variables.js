/* The JS review of ES6 Syntax */
//Using Strick mode
"use strict"; // Global scope;
let strictVar = "I am under strict mode"; // This gives errpr when ise Strict, when not under strick mode no error
console.log(strictVar)

const num1= 4908
const str1 = "Hello JS"
const arr1 = [23,4,23,135,654]
const obj1 = {
    fname : "Happy",
    lanme:"Coding",
    nick:"HC"
}

console.log(num1,str1,arr1,obj1)

// num1 = 129 // This throw error and stops execution
//str1 ="Hello REACT" // This throws error and stops execution
//arr1 = [2,4,6,8,10] // This throws error and stops execution
// obj1 = {
//     first:"new",
//     last:"old",
//     pet:"Dog"
// } // This throws error and stops execution
// obj1 = {
//     fname:"New Coding",
//     lname: "New style",
//     nick :"new"
// } // This stops execution and throes error
arr1.push(238782)
obj1.fname ="Happy Coding"
obj1.newString = "Coders paradise"
console.log(num1,str1,arr1,obj1)