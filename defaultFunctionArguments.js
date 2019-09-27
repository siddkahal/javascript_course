// only if method is undefined will it be assigned the default value of 'GET'
function makeAjaxRequest(url, method = 'GET') {
  // do something 
  return method; 
}

// here you are making sure the method gets the value null, if you want that behavior
makeAjaxRequest('google.com', null);

makeAjaxRequest('google.com');
makeAjaxRequest('google.com', 'POST');

function User(id) {
  this.id = id;
}

function generateId() {
  return Math.random() * 9999;
}

function createAdminUser(user = new User(generateId())) {
  user.admin = true;
  return user;
}

createAdminUser();

const another_user = new User(generateId());

createAdminUser(another_user);

// Coding Exercises 

function sum(a = 0, b = 0) {
  return a + b;
}

function addOffset(style = {}) {
  style.offset = '10px';
  return style;
}


