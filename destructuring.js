var expense = {
  type: 'Business',
  amount: '$45 USD'
};

// var type = expense.type;
// var amount = expense.amount;

// ES6

// the name of the property that we are trying to ref has to be the same
const { type } = expense;
const { amount } = expense;

// also works
// const { type, amount } = expense;

var savedFile = {
  extension: 'jpg',
  name: 'repost',
  size: 14040
};

function fileSummary(file) {
  return `The file ${file.name}.${file.extension} is of size ${file.size}`;
}

fileSummary(savedFile);

function fileSummaryBetter({ name, extension, size } , { color }) {
  return ` ${color} The file ${name}.${extension} is of ${size}`;
}

fileSummaryBetter(savedFile, { color: 'red' });

const companies = [
  'Google',
  'Facebook',
  'Uber'
];

// will grab the first element of the array
// also we use the square braces
// curly braces will extract the property of the object
const [ name, name1, name2 ] = companies;

name; // Google
name1; // Facebook
name2; // Uber

const [ first, ...rest ] = companies;

first; // Google
rest; // array with Facebook and Uber

const se_companies = [
  { name: 'Google', location: 'Mountain View' },
  { name: 'Facebook', location: 'Menlo Park' },
  { name: 'Uber', location: 'San Francisco' }
];

// Two sets of destructuring and it goes outer and then in
const [{ location }] = se_companies;
location; // Mountain View 

const Google = {
  locations: ['Mountain View', 'New York', 'London']
};

// much more challenging to destructure
const { locations: [ location ] } = Google;
location; // Mountain View

const points = [
  [4, 5],
  [10, 1],
  [0, 40]
];

points.map(([ x, y ]) => {
  return { x, y };
});

// the above code will return: [{"x":4,"y":5},...,{"x":0,"y":40}]

// Coding Exercises

const profile = {
  title: 'Engineer',
  department: 'Engineering'
};

function isEngineer({title, department}) {
  return title === 'Engineer' && department === 'Engineering';
}

const classes = [
  [ 'Chemistry', '9AM', 'Mr. Darnick' ],
  [ 'Physics', '10:15AM', 'Mrs. Lithun'],
  [ 'Math', '11:30AM', 'Mrs. Vitalis' ]
];

const classesAsObject = classes.map(([s, t, i]) => {
    return {subject: s, time: t, teacher: i};
});

const numbers = [1, 2, 3];

function double(nums) {
    const [num, ...rest] = nums;
    
    if (num === undefined) {
        return [];
    } else {
        return [2 * num, ...double(rest)];
    }
}

















 
