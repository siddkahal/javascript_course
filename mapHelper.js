var numbers = [1,2,3];
var doubledNumbers = [];

for (var i = 0; i < numbers.length; i++) {
  doubledNumbers.push(numbers[i] * 2);
}

// don't forget to put the reutrn statement
// the returned value will be put in the new returned array
var doubled = numbers.map(function(number) {
  return number * 2;
});

doubled;
doubledNumbers;

var cars = [
  {model: 'Buick', price: 'CHEAP'},
  {model: 'Camaro', price: 'expensive'}
];

var prices = cars.map(function(car) {
  return car.price;
});

prices;

// Coding Exercises

var images = [
  { height: '34px', width: '39px' },
  { height: '54px', width: '19px' },
  { height: '83px', width: '75px' },
];

var heights = images.map(function (image) {
    return image.height;
});

var trips = [
  { distance: 34, time: 10 },
  { distance: 90, time: 50 },
  { distance: 59, time: 25 }
];

var speeds = trips.map(function (i) {
    return i.distance / i.time;
});

function pluck(array, property) {
    return array.map(function(item) {
       return item[property]; 
    });
}
