/* 

=================================
         Basic Concepts
=================================


We know the four Basic JavaScript Concepts:

1. variable
2. Array
3. Conditionals
4. Loop - (i) While
          (ii) For 

*/





// Day-1: Variable Declaration


// ================================
//           1. Variable
// ================================


// Variable Declaration

var favouriteBook = 'Productive Muslim';








// Day-2: Array, Conditionals


// =============================
//            2. Array
// ==============================


// Array - A variable with many items.

var bookList = ['Math', 'English', 'Bangla', 'ICT'];

// Array index is starting from 0

var banglaIndex = bookList.indexOf('Bangla'); // to know the index of Bangla
bookList[3] = 'story book'; // To change the item of specified position [by index]
bookList.push('Home Science'); // to add last element of array 
bookList.pop(); // to remove last element of array







// =================================
//          3. conditionals
// ==================================



if (bookList[2] == 'Bangla') {
    console.log('Yes I am Bangla');
}

else {
    console.log('Can not find Bangla');
}








// Day-3: Loop - (i) While loop, (ii) For loop

// =================================
//              4. Loop
// ==================================



// while loop

var i = 0; // loop variable

while (i <= 15) {
    console.log(i);
    console.log('looping looping looping');
    i++;
}


// for loop

for (var i = 0; i <= 15; i++) {
    console.log(i);
    console.log('looping looping looping');
}





