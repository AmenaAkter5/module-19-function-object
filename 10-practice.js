//===================================================
//              More Practice - Function
// ===================================================


// 1.

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


// or,

var result = jogKor(5 + 3, 6 + 7); // total set as two parameters
console.log(result);



// 2.

function biyogKor(first, second) {
    var biyogFol = first - second;
    return biyogFol;
}

var result = biyogKor(87, 18);
console.log(result);



// 3.

/* ১০.১: দুইটা সংখ্যা গুন করার একটা function লিখ। সেই ফাংশনে দুইটা 
ইনপুট নিবি তারপর সেই দুইটা ইনপুটকে গুন করে গুনফল একটা ভেরিয়েবলে 
রাখবি। শেষমেষ গুনফলটা return করে দিবি।  */


function multiply2Numbers(first, second) {
    var multiplication = first * second;
    return multiplication;
}

var result = multiply2Numbers(12, 14);
console.log(result);



// 4.

/* ১০.২: তিনটা সংখ্যা যোগ করার একটা ফাংশন লিখ। যেহেতু তিনটা সংখ্যা যোগ
করতে চাস, সেহেতু তিনটা ইনপুট ভেরিয়েবল নিবি। তারপর ফাংশনের ভিতরে 
সেই তিনটা ইনপুট ভেরিয়েবল যোগ করবি। বাকিটা তোর মাথা খাটিয়ে লিখে ফেল।  */

function add3Numbers(first, second, third) {
    var addition = first + second + third;
    return addition;
}

var result = add3Numbers(12, 15, 25);
console.log(result);



// 5.

function digun(number) {
    var multiplication = number * 2
    return multiplication;
}

var result = digun(25);
console.log(result);




//===================================================
//                Module Practice
// ===================================================


/*
প্রাকটিস চ্যালেঞ্জ (৪ টি প্রব্লেম):

১. একটা ফাংশন লিখবা যেটা ১৩ এর নামতা (multiplication table)
আউটপুট হিসেবে দেখাবে।


২. একটা ফাংশন লিখবা যেটা যেকোন নামকে uppercase বা রেগুলার কেইস
হিসেবে নিবে আর আউটপুট হিসেবে সেই নাম lowercase করে রিটার্ন করবে।

৩. fullName নামে একটা ফাংশন তৈরী কর যেটা তোমার নামের প্রথম অংশ
এবং তোমার নামের শেষের অংশ প্যারামিটার হিসেবে নিবে। আর তোমার নামের
দুই অংশ জোড়া দিয়ে আউটপুট হিসেবে তোমার পূর্ন নাম রিটার্ন করে দিবে।
যেমন ধরো, hablu এবং kanto ইনপুট প্যারামিটার হিসেবে দিলে আউটপুট
হিসেবে hablu kanto রিটার্ন করবে।


৪. একটা ফাংশন লিখবা যেটাকে তুমি কোন সংখ্যাকে ইনপুট হিসেবে দিলে সে
সেই সংখ্যার square করে সেই square কে রিটার্ন করবে।

অর্থাৎ তুমি ইনপুট হিসেবে 5 দিলে সেটাতে স্কয়ারে হিসেবে 25 আউটপুট
হিসেবে পাবে।


—----------

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


// Answers


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
