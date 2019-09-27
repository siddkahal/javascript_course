function Car(options) {
  this.title = options.title;
}

// use of this prototype is confusing and not well documented in terms of inheritance 
Car.prototype.drive = function() {
  return 'vroom';
}

const car = new Car({ title: 'Focus' });
car.drive(); // vroom
car; // {"title":"Focus"}

function Toyota(options) {
  Car.call(this, options);
  this.color = options.color;
}

// this is super confusing boiler plate code just to set up inheritance 
Toyota.prototype = Object.create(Car.prototype);
Toyota.prototype.constructor = Toyota;

Toyota.prototype.honk = function() {
  return 'beep';
}

const toyota = new Toyota({ color: 'red', title: 'Daily Driver' });
toyota; // object that inherited to some degree from car

// Refactoring to ES6 code

class Car {
  constructor({ title }) {
    this.title = title;
  }

  drive() {
    return 'vroom';
  }
}

const car = new Car({ title: 'Toyota' });
car;
car.drive();

class Toyota extends Car {
  constructor(options) {
    super(options); // Car.constructor(options)
    this.color = options.color;
  }

  honk() {
    return 'beep';
  }
}

const toyota = new Toyota({ color: 'red' });

toyota.honk();
toyota; // does set up for the toyota and car 
toyota.drive(); // you can do this now

// Coding Exercises 

class Monster {
  constructor(options) {
      this.name = options.name;
      this.health = 100;
  }
}

class Snake extends Monster {
    bite(snake) {
        snake.health -= 10;
    }
}

