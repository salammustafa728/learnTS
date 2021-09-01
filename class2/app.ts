"use strict";

let userInput: unknown;
let userName: string;
// unkown type we can store any value in it without having errors similar to any but any more flexible
// we shoudln't use it always but it's better than any
userInput = 5;
userInput = "Max";
if (typeof userInput === "string") {
  userName = userInput;
}

/// never type
const generateError = (message: string, code: number) => { // this function return never / never return anything
//   throw { message: message, errorCode: code };
// while(true){}  // another case for never type infinite loop
}; // this function crashes the script if there is an error it will excute this fun

 
const result2= generateError('An Error Occured! ',500);
console.log(result2);
