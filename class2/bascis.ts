'use srict';
const add=(a: number,b:number,showResult:boolean,phrase:string)=>{
      // if(typeof a !== 'number' || typeof b !== 'number'){
    //     throw new Error(' Incorrect input');
    // }
    let result = a+b;
    if(showResult){
        console.log(phrase + result);
    }else{
        return a+b;
    }
}

const num1=9;
const num2=6;
const printResult=true;
const resultPhrase = 'the result is: '
add(num1,num2,printResult,resultPhrase);

