// multiple-parameter


// ================================
//              Addition
// ================================

function addition(num1, num2) {
    console.log(num1, num2);
    var total = num1 + num2; // two input parameters will be added
    return total;
}

// function-call

addition(21, 59);


// we can also declare variable for each numbers

var number1 = 35;
var number2 = 47;

addition(number1, number2); // output: 35, 47


// according to input parameter's position, function will take numbers

addition(number2, number1); // output: 47, 35



// To get return output:

var result = addition(10, 20);
console.log(result);







// ==========================================
//              Multiplication
// ==========================================

// Multiplication

function multiplication(first, second) {
    var result = first * second;
    return result;
}

var total = multiplication(500, 10);
console.log('total taka', total); // output: 5000






// ==========================================
//               Subtraction
// ==========================================

// subtraction:

function subtraction(first, second) {
    var result = first - second;
    return result;
}

var totalSubtraction = subtraction(87, 23);
console.log(totalSubtraction); // output: 64






// ==========================================
//                  Divide
// ==========================================

// divide

function divide(first, second) {
    var result = first / second;
    return result;
}

var totalDivision = divide(42, 7);
console.log(totalDivision); // output: 6






