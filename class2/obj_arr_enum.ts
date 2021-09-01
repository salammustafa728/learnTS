'use strict';
//{}=object specialize object type
// const person: {
//     name:string;
//     age: number;
//     hobbies: string[];
//     role: [number,string] // have an array with exactly two elements 
// } = {
//     // const person ={
//     name: 'salam',
//     age: 17,
//     hobbies:['sports','cooking'],
//     role:[2 , 'author']
// }
// person.role.push('admin'); // push a string value // push acceptable in tuple and didn't make an error
// person.role[1]=10; // make the secound element a number value

///////////////////////////////////////////
// const ADMIN = 0;
// const READONLY=1;
// const AUTHOR = 2; //enum we can use it to not initialize all of this 
enum Role {ADMIN='Admin', READONLY=100, AUTHOR=200} // you can use upper case or lower for the variables // you can give the value to the variables
// the value that you want if number or string whatever you want 
   const person ={
    name: 'salam',
    age: 17,
    hobbies:['sports','cooking'],
    role: Role.ADMIN
}


// let activieties:string[]; //to initialize a string array
// activieties=['sport'];  
if( person.role=== Role.AUTHOR){
    console.log('is author');
    
}
// let activieties:any[]; //to initialize an array accepts mixof types 
// activieties=['sport',0]; 
console.log(person.age);
for(const hobby of person.hobbies){
    console.log(hobby.toUpperCase());   
}

// Tuple a fixed length array [1,2] and fixed type 
// Enum enum{NEW,OLD} //automatically enumerated global constant identifiers
// Any type * any kind of value no specific type , flexible