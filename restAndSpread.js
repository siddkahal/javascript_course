function addNumbers(...numbers) {
  return numbers.reduce((sum, number) => {
    return sum + number;
  }, 0);
}

addNumbers(1,2,3,4,5,6,7,8,9,10);

const defaultColors = ['red', 'green'];
const userFavoriteColors = ['orange', 'yellow'];

[...defaultColors, ...userFavoriteColors ];

// without the dot dot dot the array itself is inserted
// not the contents of the array
[...defaultColors, userFavoriteColors ];

const fallColors = ['fire red', 'fall orange'];

// you can also add stuff on the fly
['blue', ...defaultColors, ...userFavoriteColors, ...fallColors ];

function validateShoppingList(...items) {
  if (items.indexOf('milk') < 0) {
    return ['milk', ...items];
  }
  
  return items
}

validateShoppingList('orange', 'bread', 'eggs');
validateShoppingList('orange', 'bread', 'eggs', 'milk');

const MathLibrary = {
  calculateProduct(...rest) {
    console.log('Please use the multiply method instead');
    return this.multiply(...rest);
  },
  multiply(a, b) {
    return a * b;
  }
};

MathLibrary.multiply(3,2);
MathLibrary.calculateProduct(4,3);

// Coding Exercises 

function product(...rest) {
  var numbers = [...rest];
  
  return numbers.reduce(function(acc, number) {
    return acc * number;
  }, 1)
}

function join(array1, array2) {
  return [...array1, ...array2];
}

function unshift(array, ...rest) {
  return [ ... rest, ...array];
}





