// ====================================
//                  Break
// =====================================


// where condition fulfills loop stop the program.

var i = 0;

while (i < 10) {
    console.log(i);
    if (i == 5) {
        break;
    }
    i++;
}

// for loop

for (i = 0; i <= 20; i++) {
    console.log(i);
    if (i == 8) {
        break;
    }
} // after getting 8 loop will be stopped


for (i = 0; i <= 20; i++) {
    console.log(i);
    if (i > 8) {
        break;
    }
} // after getting 9 loop will be stopped





// array

var numbers = [54, 35, 21, 98, 23, 101, 45, 67];

for (i = 0; i < numbers.length; i++) {
    number = numbers[i];
    console.log(number);
    if (number > 100) {
        break;
    }
} // after get 101 loop will be stopped






// ===========================================
//                  Continue
// ===========================================

// continue

// don't show the number which is greater than 90. just skip that and show next number.

for (i = 0; i < numbers.length; i++) {
    var number = numbers[i];
    if (number > 90) {
        continue; // skip the numbers which are larger than 90
    }
    console.log(number);
}




