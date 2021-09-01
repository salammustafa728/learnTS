'use strict';
// we can make our new type be using type keyword you can't use the type that it exists in js
type Combinable = number | string;
type ConversionDiscrptor = 'as-num' | 'as-text';
const combine=(
    input1: Combinable,
    input2: Combinable , 
    resultConversion: ConversionDiscrptor
    )=>{
    let result
    if(typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-num'){
         result = +input1 + +input2;
    }else{
        result = input1.toString() + input2.toString();
    }
    return result;
    // if(resultConversion === 'as-num'){
    //     return parseFloat(result);
    // }else{
    //     return result.toString();
    // }

}

const combinedAges = combine(20,30,'as-num');
console.log(combinedAges);

const combinedStringAges = combine('20','30','as-num');
console.log(combinedStringAges);

const combinedNames = combine('salam',' mustafa','as-text');
console.log(combinedNames);

// union type accept a different tpyes of values by using | 