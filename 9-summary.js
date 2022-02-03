// =====================================================
//              B A S I C      C O N C E P T S
// ======================================================


// Basic concepts - 6 concepts 

/* 
1. variable
2. Array
3. Condition
4. Loop
5. Function
6. Object
*/


// Declare an array of Basic Concepts of programming

var concepts = ['variable', 'array', 'condition', 'loop', 'function', 'object'];







// =====================================================
//                     1. Variable
// ======================================================


// variable declare

var skyColor = 'white';


/* 

variable type - 1. Number
                2. String
                3. Boolean

*/







// =====================================================
//                     2. Array
// ======================================================


// 2. array

var phones = ['iPhone', 'shaomi', 'samsung', 'lg', 'htc'];

// replace

phones[3] = 'walton';

// check oppo's position/index
var oppoIndex = phones.indexOf('oppo'); // output: -1 [not exist]








// =====================================================
//                   3. Conditionals
// ======================================================


// conditionals

// check oppo's not existence in an array by if-else

if (phones.indexOf('oppo') == -1) {
    console.log('oppo is missing'); // output: show this result
}
else {
    console.log('oppo is here');
}


// or,

if (phones.indexOf('oppo') < 0) {
    console.log('oppo is missing'); // output: show this result
}
else {
    console.log('oppo is here');
}


// check shaomi is available

if (phones.indexOf('shaomi') != -1) {
    console.log('shaomi is available'); // output: show this result
}
else {
    console.log('shaomi is missing');
}


// or,


if (phones.indexOf('shaomi') >= 0) {
    console.log('shaomi is available'); // output: show this result
}
else {
    console.log('shaomi is missing');
}







// =====================================================
//                         4. Loop
// ======================================================

// loop

// while loop

var num = 0;

while (num <= 10) {
    console.log(i);
    i++;
}

// for loop

for (i = 0; i < phones.length; i++) {
    phone = phones[i];
    console.log(phone);
}






// =====================================================
//                     5. Function
// ======================================================


// function

function add3Number(num1, num2, num3) {
    var total = num1 + num2 + num3;
    return total;
}

var result = add3Number(87, 41, 56);
console.log(result);







// =====================================================
//                       6. Object
// ======================================================


// object

var microphone = {
    Brand: 'Blue yeti',
    color: 'Black',
    price: 200
};




