// The Promise key word is just available at the browser level
let promise = new Promise((resolve, reject) => {
  resolve(); // sets the state of the promise to the resolved state
  // reject();  sets the state of the promise to the rejected state          
});

promise.then(() => {
  console.log('finally finished'); // with the code above the finally finished is printed
  // .then() is executed on resolve()
})

// with reject(); the above code will not run

promise.then(() => {
  console.log('will also run!');
)}

// the above code will also run with resolve

// you can string the then and catch statements
promise
  .then(() => console.log('This will also run'))
  .catch(() => console.log('something went wrong'));

// the catch will only run on reject()

promise = new Promise((resolve, reject) => {
  setTimeout(() => {
     // after 3sec it will pring finally finished and I also ran
     resolve();
  }, 3000);

  // if reject above then after 3sec uh oh will appear
});

promise
  .then(() => console.log('finally finished'))
  .then(() => console.log('I also ran'))
  .catch(() => console.log('uh oh !!!'));


// fetch 

const url = 'https://jsonplaceholder.typicode.com/posts/';

fetch(url)
  .then(data => console.log(data)) // this data is not the actual json of page, this is just info about the server request

// here is how you actual json data
fetch(url)
  .then(response => response.json())
  .then(data => console.log(data)); // the data now has the json we want

// shortcoming of fetch
// if the request fails (404 error) the catch statement will not be hit
// the catch will only fail if the network request completely failed to be issued at all
// this is different from any other AJAX library out there 
