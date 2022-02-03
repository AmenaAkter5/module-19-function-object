// to see the object [console(object-name)]

var computer = {
    price: 29000,
    storage: '256gb',
    color: 'silver',
    processor: 'intel i5'
};

console.log(computer);





// to access object property [console(object-name.property-name)]

console.log(computer.processor);

var computerPrice = computer.price;
console(computerPrice);






// to set new value of a property


// 1st way:

computer.price = 22000;
console.log(computer);
console.log(computer.price);


// 2nd way:

computer['price'] = 23000;
console.log(computer);

console.log(computer.price);


// 3rd way: [set a variable which value is the property name of an object then change the variable value will set for the property value]

var priceProperty = 'price';

computer[priceProperty] = 24000;

console.log(computer);
console.log(computer.price);




// another example:

var storageProperty = 'storage';
computer[storageProperty] = '512gb';

computer['storage'] = '1tb';
computer.storage = '5tb';

console.log(computer);
console.log(computer.storage);






// ============================================
//                Video Summary
// =============================================


// to set new value of a property [summary]


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



// New things: Delete

delete computer.processor
console.log(computer);





