// var name = 'Jane';
// var title = 'Software Engineer';
// var hourlyWage = 40;

//ES 6

const name = 'Jane';
let title = 'Software Engineer';
let hourlyWage = 40;

// some time later ...

title = 'Senior Software Engineer';
hourlyWage = 45;

function count(targetString) {
  // this variable declarations helps to indicate which values don't change
  // this helps to infer more about the function a little quicker 
  const characters = ['a', 'e', 'i', 'o', 'u'];
  let number = 0;
  
  for (var i = 0; i < targetString.length; i++) {
    if (characters.includes(targetString[i])) {
      number++;
    }
  }
  return number;
}

count('aeiobzxceiaipbiox');

// Coding Exercises 
const name_ce = 'joe';
let age = 54;
const dateOfBirth = '4/5/1965';

const statuses = [ 
  { code: 'OK', response: 'Request successful' },
  { code: 'FAILED', response: 'There was an error with your request' },
  { code: 'PENDING', response: 'Your reqeust is still pending' }
];
let message = '';
const currentCode = 'OK';

for (var i = 0; i < statuses.length; i++) {
  if (statuses[i].code === currentCode) {
    message = statuses[i].response;
  }
}




