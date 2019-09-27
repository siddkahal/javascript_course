const colors = ['red', 'green', 'blue'];

// for of loop
for (let color of colors) {
  console.log(color); // logs all the colors
}

const numbers = [1,2,3,4];

let total = 0;

for (let number of numbers) {
  total += number;
}

// total = 10

// generator function, as denoted by *
function* numbers() {
 yield;
}

const gen = numbers();
gen.next(); // {"done":"false"}
gen.next(); // {"done":"true"}

function* shopping() {
  // stuff on the sidewalk
  // walking down the sidewalk

  // go into the store with cash
  const stuffFromStore = yield 'cash';
  // think of the above code like a pause of the execution of the function
  
  // walking to laundry place
  const cleanClothes = yield 'laundry';

  // walking back home
  return [stuffFromStore, cleanClothes];

}

// stuff in the store

const gen2 = shopping(); // no code of the function is acutally invoked here
gen2.next(); // leaving our house

// walking into the store
// walking thorough the asiles
// purchase our stuff

gen2.next('groceries'); // leaving the store with groceries 
// think of the above code as 'const stuffFromStore = "groceries"'
// jumping right back into the same spot as you left

function* colors() {
  yield 'red';
  yield 'blue';
  yield 'green';
}

const myColors = [];
// notice for the for of loops there is no gen.next()
// you can use generators to iterate through any data structure really
for (let color of colors()) {
  myColors.push(color);
}

myColors; // array with red blue and green values in it

const testingTeam = {
  lead: 'Amanda',
  tester: 'Bill',
  [Symbol.iterator]: function* () {
    yield this.lead;
    yield this.tester;
  }
};

const engineeringTeam = {
  testingTeam,
  size: 3,
  department: 'Engineering',
  lead: 'Jill',
  manager: 'Alex',
  engineer: 'Dave',
  [Symbol.iterator]: function* () {
    yield this.lead;
    yield this.manager;
    yield this.engineer;
    yield* this.testingTeam;
  }
};

  // Generator delegation statement 
  // think of this as the jump to the other iterator
  // the * can be thought of as "you may want these values as well"
  // now the above function passes in the whole testingTeam
  // in the testingTeam there is code for how the for of loop should handle it

const names = [];

for (let name of engineeringTeam) {
  names.push(name);
}

names; // array with just Jill Alex and Dave

// Generator gunctions and iterators in Classes

// VERY IMPORTANT: GENERATORS CAN'T BE USED IN ARRAY HELPERS OR CALLBACKS

class Comment {
  constructor(content, children) {
    this.content = content;
    this.children = children;
  }

  *[Symbol.iterator]() {
    yield this.content;
    for (let child of this.children) {
      yield* child;
    }
  }
}

const children = [
  new Comment('good comment', []),
  new Comment('bade comment', []),
  new Comment('meh', [])
];

const tree = new Comment('Great post!', children);

const values = [];
for (let value of tree) {
  values.push(value);
}

values; // array with all [Great post, ... , meh]

