'use strict';
const button = document.querySelector('button')!;

button.addEventListener('click',()=>{
    console.log('clicked!');
    
})
//the code above work becuase of lib option in tsconfig.json it use for DOM
// const userName1='Raniaaa';

// console.log(userName1);


//tsc filename.ts -w   //watch mode to keep the program running
// tsc init to inilize the tsc file and it create a tsconfig.json file so now we can run tsc command without a specific file
// or we can use watch mode tsc -w 
// tsconfig.json file it's a crucial file for managingthis project it tolds ts how it should compile 
// exclude option in tsconfig.json file defind to put inside it the file that will not incude in compilation  
// we can control the compilation option inside it and target which version we'll work with 
// npEmittOnError option it restict us from initilize a js file that have errors