// function-declaration:

function startFan() { // function input parameter is optional
    console.log('walk towards switch');
    console.log('press the switch');
}
// function return is also optional. By requirements it will be set.




// function-call:

startFan(); // function need to call to run the function.



// we can call function by variable declaration of function-name. it is useful with input-parameter function.

var fanOn = startFan();
console.log(fanOn); // it is undefined until set the return on function of this variable.



// Fuction code can be written once.
// we can call function one more times when we needed.
// And no need to call function chronologically.



// after other works we can call function and function runs

console.log('eat breakfast');
console.log('drink tea');
console.log('take shower');

startFan();





