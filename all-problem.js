// ==========================================
//                   Function
// ===========================================


// 1.

// function-declaration:

function startFan() { // function input parameter is optional
    console.log('walk towards switch');
    console.log('press the switch');
}
// function return is also optional. By requirements it will be set.



// function-call:

startFan();


// we can call function by variable declaration of function-name. it is useful with input-parameter of function.

var fanOn = startFan();
console.log(fanOn); // it is undefined until set the return on function.




// after other works we can call function and function runs

console.log('eat breakfast');
console.log('drink tea');
console.log('take shower');

startFan();




// 2.

// Input-parameter

function bringSingara(taka) {
    console.log('singarar jonno dise', taka);
    console.log('singara please');
}

bringSingara(100); // if input is missing then program is shown undefined.

bringSingara(250);



// 3.

// input: variable

// we can declare a variable for input parameter and input variable name.


function bringSingara(taka) {
    console.log('singarar jonno dise', taka);
    console.log('singara please');
}

var money = 300;

bringSingara(money);


// we can call function by variable declaration of function-name. it is useful with input-parameter and return statement.

var singaraAno = bringSingara(200);
console.log(singaraAno); // it is undefined until set the return on function of this variable.



// 4.

// Return

function bringSingara(taka) {
    console.log('singarar jonno dise', taka);
    console.log('singara please');
    var singaraPrice = 10;
    singaraQuantity = taka / singaraPrice
    return singaraQuantity;
}

bringSingara(100);




/* return value is not shown until declare a variable to call function.
the return value will be the value for that variable by which we 
call function. */


// to get return-value

var singara = bringSingara(100);
console.log('Take singara', singara); // value of return is the value of singara.


// to see the return value we need to console "singara"


// 5.

// Addition

function addition(num1, num2) {
    console.log(num1, num2);
    var total = num1 + num2; // two input parameters will be added
    return total;
}

var result = addition(10, 20);
console.log(result);


// 6.

// Multiplication

function multiplication(first, second) {
    var result = first * second;
    return result;
}

var total = multiplication(500, 10);
console.log(total);


// 7.

// subtraction:

function subtraction(first, second) {
    var result = first - second;
    return result;
}

var totalSubtraction = subtraction(87, 23);
console.log(totalSubtraction);


// 8.

// divide

function divide(first, second) {
    var result = first / second;
    return result;
}

var totalDivision = divide(42, 7);
console.log(totalDivision);






//===================================================
//              More Practice - Function
// ===================================================

// 9.

function jogKor(number1, number2) {
    var jogFol = number1 + number2;
    return jogFol;
}

var result = jogKor(87, 32);
console.log(result);

// input variable

var chalerDam = 28;
var dalerDam = 33;

var result = jogKor(chalerDam, dalerDam);
console.log(result);

// [if two console runs then two results are shown.]


// or,

var result = jogKor(5 + 3); // second is undefined. the total is counted as first parameter
console.log(result);


// or,

var result = jogKor(5 + 3, 6 + 7); // total set as two parameters
console.log(result);


// 10.

function biyogKor(first, second) {
    var biyogFol = first - second;
    return biyogFol;
}

var result = biyogKor(87, 18);
console.log(result);


// 11.

/* ১০.১: দুইটা সংখ্যা গুন করার একটা function লিখ। সেই ফাংশনে দুইটা 
ইনপুট নিবি তারপর সেই দুইটা ইনপুটকে গুন করে গুনফল একটা ভেরিয়েবলে 
রাখবি। শেষমেষ গুনফলটা return করে দিবি।  */


function multiply2Numbers(first, second) {
    var multiplication = first * second;
    return multiplication;
}

var result = multiply2Numbers(12, 14);
console.log(result);


// 12.

/* ১০.২: তিনটা সংখ্যা যোগ করার একটা ফাংশন লিখ। যেহেতু তিনটা সংখ্যা যোগ
করতে চাস, সেহেতু তিনটা ইনপুট ভেরিয়েবল নিবি। তারপর ফাংশনের ভিতরে 
সেই তিনটা ইনপুট ভেরিয়েবল যোগ করবি। বাকিটা তোর মাথা খাটিয়ে লিখে ফেল।  */

function add3Numbers(first, second, third) {
    var addition = first + second + third;
    return addition;
}

var result = add3Numbers(12, 15, 25);
console.log(result);


// 13. 

function digun(number) {
    var multiplication = number * 2
    return multiplication;
}

var result = digun(25);
console.log(result);






// ==========================================
//                   Object
// ===========================================


// 9.

// object

// object declare


var student1 = {
    ID: 01,
    name: 'Zarin Subah',
    marks: 81,
    phone: 01256
};

// to get access object & object property

var computer = {
    price: 29000,
    storage: '32gb',
    color: 'silver',
    processor: 'intel i5'
};

console.log(computer);

console.log(computer.processor);

var computerPrice = computer.price;
console(computerPrice);



// 10.

// to set new value of a property


// 1st way

computer.price = 22000;

// 2nd way

computer['price'] = 23000;

// 3rd way

var priceProperty = 'price';
computer[priceProperty] = 24000;

// console:

console.log(computer);
console.log(computer.price);







// ==================================================
//                  Module - Practice
// ===================================================


/* 
১. একটা ফাংশন লিখবা যেটা ১৩ এর নামতা (multiplication table) 
আউটপুট হিসেবে দেখাবে। 
*/

function multiplicationTable(input) {
    for (i = 1; i <= 10; i++) {
        console.log(input + '*' + i + '=' + input * i);
    }
}

var result = multiplicationTable(13);


/* 
২. একটা ফাংশন লিখবা যেটা যেকোন নামকে uppercase বা রেগুলার কেইস
হিসেবে নিবে আর আউটপুট হিসেবে সেই নাম lowercase করে রিটার্ন করবে।
*/


function lowerCase(text) {
    var lowerText = text.toLowerCase();
    return lowerText;
}

var output = lowerCase('Hello Everyone');
console.log(output);


// Make Uppercase

function upperCase(text) {
    var upperText = text.toUpperCase();
    return upperText;
}

var output = upperCase('Hello Everyone');
console.log(output);


/* 
৩. fullName নামে একটা ফাংশন তৈরী কর যেটা তোমার নামের প্রথম অংশ
এবং তোমার নামের শেষের অংশ প্যারামিটার হিসেবে নিবে। আর তোমার নামের
দুই অংশ জোড়া দিয়ে আউটপুট হিসেবে তোমার পূর্ন নাম রিটার্ন করে দিবে।
যেমন ধরো, hablu এবং kanto ইনপুট প্যারামিটার হিসেবে দিলে আউটপুট
হিসেবে hablu kanto রিটার্ন করবে।
*/

function fullName(name1, name2) {
    var addName = name1 + ' ' + name2;
    return addName;
}

var output = fullName('Amena', 'Akter');
console.log(output);


/* 
৪. একটা ফাংশন লিখবা যেটাকে তুমি কোন সংখ্যাকে ইনপুট হিসেবে দিলে সে
সেই সংখ্যার square করে সেই square কে রিটার্ন করবে।

অর্থাৎ তুমি ইনপুট হিসেবে 5 দিলে সেটাতে স্কয়ারে হিসেবে 25 আউটপুট
হিসেবে পাবে।
*/

function makeSquare(input) {
    var square = Math.pow(input, 2);
    return square;
}

var output = makeSquare(10);
console.log(output);


/* 
Extra

—--------------

৫) pizza নামের একটা object কে নিচের উদাহরণ মতো define করবা :


const pizza = {

 toppings: ['cheese', 'sauce', 'pepperoni'],

 crust: 'deep dish',

 serves: 2

}

এবং pepperoni প্রিন্ট করবা।
*/


var pizza = {

    toppings: ['cheese', 'sauce', 'pepperoni'],

    crust: 'deep dish',

    serves: 2

};

console.log(pizza);

console.log(pizza.toppings[2]);

// pepperoni is in index 2 in toppings





