'use strict';
const combine = (input1, input2, resultConversion) => {
    let result;
    if (typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-num') {
        result = +input1 + +input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
    // if(resultConversion === 'as-num'){
    //     return parseFloat(result);
    // }else{
    //     return result.toString();
    // }
};
const combinedAges = combine(20, 30, 'as-num');
console.log(combinedAges);
const combinedStringAges = combine('20', '30', 'as-num');
console.log(combinedStringAges);
const combinedNames = combine('salam', ' mustafa', 'as-text');
console.log(combinedNames);
