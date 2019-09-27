const add = (a, b) => a + b;

add(1, 2);

const double = number => 2 * number;

double(8);

const sayHello = () => 'Hello';

sayHello();

const numbers = [1,2,3];

numbers.map(number => 2 * number);

const team = {
  members: ['Jane', 'Bill'],
  teamName: 'SuperSquad',
  teamSummary: function() {
    // fat arrow function makes use of lexical this
    // this === team
    return this.members.map((member) => {
      return `${member} is on team ${this.teamName}`;
      // possible (ES5) solution .bind(this)
    });
  }
};

team.teamSummary();

// Coding Exercises

const fibonacci = n => {
  if (n < 3) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

const profile = {
    name: 'Alex',
  // cant use arrow function below  
  getName: function() {
        return this.name;
    }
};

