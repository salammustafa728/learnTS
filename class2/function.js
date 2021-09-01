'use strict';
const add2 = (n1, n2) => {
    return n1 + n2;
};
const printResult2 = (num) => {
    console.log('Result: ' + num);
};
const addAndHandle = (n1, n2, cb) => {
    let result = n1 + n2;
    cb(result);
};
// unction can't be undefind execept if we put a return; without anything after it. but oid more specific for the function that doesn't return a value
printResult2(add2(5, 12));
//  let combineValues: Function; // this datatype means we'll store a function inside this variable but it's not efficient way
// let combineValues: () => number;   // that mean it accept any function doesn't have parameter and return a number
let combineValues; // we can specific which type of function we want to assign
combineValues = add2; // 
//  combineValues = printResult2; // it's confusing
console.log(combineValues(8, 8));
addAndHandle(10, 20, (result) => {
    console.log(result);
});
