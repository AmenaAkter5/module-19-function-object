// ===================================
//           Input-Parameter
// ===================================


function bringSingara(taka) {
    console.log('singarar jonno dise', taka);
    console.log('singara please');
}

bringSingara(100); // if input is missing then parameter is shown undefined.

bringSingara(200);



// we can declare a variable for parameter and can input the variable name

var money = 250;

bringSingara(money); // parameter takes the value of 'variable'



// we can call function by variable declaration of function-name. it is useful with input-parameter and return statement.


var singaraAno = bringSingara(300); // here we also can input "money"

console.log(singaraAno); // it is undefined until set the return on function of this variable. because this value takes the return value.







// ===================================
//               Return
// ===================================


// Return

function bringSingara(taka) {
    console.log('singarar jonno dise', taka);
    console.log('singara please');
    var singaraPrice = 10;
    singaraQuantity = taka / singaraPrice
    return singaraQuantity;
}

bringSingara(100);



/* return value is not shown after run the program until declare 
a variable to call function. the return value will be the value 
for that variable by which we call function. */



// to get return-value

var singara = bringSingara(100);
console.log('Take singara', singara); // value of return is the value of singara.


// to see the return value we need to console "singara"




