// ===================================
//                if-else
// ===================================


// program check the every condition and where get match then stop run the program.


var color = 'yellow';

if (color == 'blue') {
    console.log('color is blue');
}
else if (color == 'red') {
    console.log('color is red');
}
else if (color == 'green') {
    console.log('color is green');
}
else if (color == 'white') {
    console.log('color is white');
}
else if (color == 'skyblue') {
    console.log('color is skyblue');
}
else if (color == 'yellow') {
    console.log('color is yellow');
}
if (color == 'blue') {
    console.log('color is blue');
}
else {
    console.log('color is black');
}





// ====================================
//                SWITCH
// ====================================

// switch

// switch just check where to get match. switch directly goes to the match point and break the program


switch (color) {
    case 'blue':
        console.log('color is blue');
        break;
    case 'red':
        console.log('color is red');
        break;
    case 'green':
        console.log('color is green');
        break;
    case 'white':
        console.log('color is white');
        break;
    case 'yellow':
        console.log('color is yellow');
        break;
    default:
        console.log('color is black'); // no need to write break in default case.
}




