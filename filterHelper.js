var products = [
  {name: 'cucumber', type: 'vegetable'},
  {name: 'banana', type: 'fruit'},
  {name: 'celery', type: 'vegetable'},
  {name: 'orange', type: 'fruit'}
];

var filteredProducts = [];

for (var i = 0; i < products.length; i++) {
    if (products[i].type === 'fruit') {
    filteredProducts.push(products[i]);
  }
};

filteredProducts;

products.filter(function(product) {
  return product.type === 'vegetable';  
});

var priceProducts = [
  {name: 'cucumber', type: 'vegetable', quantity: 0, price: 1},
  {name: 'banana', type: 'fruit', quantity: 10, price: 15},
  {name: 'celery', type: 'vegetable', quantity: 30, price: 9},
  {name: 'orange', type: 'fruit', quantity: 3, price: 5}
];

// Type is 'vegetable', quantity is greater than 0, price is less than 10
priceProducts.filter(function(product) {
  return product.type === 'vegetable' && product.quantity > 0 && product.price < 10;
});

var post = {id: 4, title: 'New Post'};
var comments = [
  {postId: 4, content: 'awesome post'},
  {postId: 3, content: 'it was ok'},
  {postId: 4, content: 'neat'}
];

function commentsForPost(post, comments) {
 return comments.filter(function(comment) {
   return comment.postId === post.id;
 });
}

commentsForPost(post, comments);

// Coding exercises 

var numbers = [15, 25, 35, 45, 55, 65, 75, 85, 95];

var filteredNumbers = numbers.filter(function (num) {
    return num > 50;
});

var users = [
 { id: 1, admin: true },  
 { id: 2, admin: false },
 { id: 3, admin: false },
 { id: 4, admin: false },
 { id: 5, admin: true },
];

var filteredUsers = users.filter(function (user) {
    return user.admin;
});

function reject(array, iteratorFunction) {
    return array.filter(function (x) {
        return !iteratorFunction(x);
    })
}
