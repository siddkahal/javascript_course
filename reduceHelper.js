var numbers = [10, 20, 30];

var sum = 0;

for (var i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}

numbers.reduce(function(sum, number) {
  return sum + number;
}, 0);

var primaryColors = [
  {color: 'red'},
  {color: 'yellow'},
  {color: 'blue'}
];

primaryColors.reduce(function(prev, primaryColor) {
  prev.push(primaryColor.color);
  return prev;
}, []);

function balancedParens(string) {
  return !string.split("").reduce(function(previous, char) {
    if (previous < 0) { return previous; }
    if (char === "(") { return ++previous; }
		if (char === ")") { return --previous; }
    return previous;
  }, 0);
}

balancedParens("(())");
balancedParens("(()");
balancedParens(")(");

// Coding exercises

var trips = [{ distance: 34 }, { distance: 12 } , { distance: 1 }];

var totalDistance = trips.reduce(function(sum, trip) {
    return sum += trip.distance;
}, 0);

var desks = [
  { type: 'sitting' },
  { type: 'standing' },
  { type: 'sitting' },
  { type: 'sitting' },
  { type: 'standing' }
];

var deskTypes = desks.reduce(function(previous, desk) {
    if (desk.type === 'sitting') {
        previous.sitting++;
    } else {
        previous.standing++;
    }
    
    return previous;
    
}, { sitting: 0, standing: 0 });

function unique(array) {
    return array.reduce(function(acc, curr) {
        var found = acc.find(function(x) {
            return x === curr;
        });
        
        if (found) {
            return acc;
        } else {
            acc.push(curr);
            return acc;
        }
    }, []);
  
}


