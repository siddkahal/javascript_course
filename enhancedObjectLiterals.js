function createBookShop(inventory) {
  return {
    inventory: inventory,
    inventoryValue: function() {
      return this.inventory.reduce((total, book) => total + book.price, 0);
    },
    priceForTitle: function(title) {
    	return this.inventory.find(book => book.title === title).price;
    }
  };
}

const inventory = [
  {title: 'Harry Potter', price: 10 },
  {title: 'Eloquent Javascript', price: 15 }
];

const bookShop = createBookShop(inventory);

bookShop.inventoryValue();
bookShop.priceForTitle('Harry Potter');

// ES6 syntax changes and enhancements 

function createBookShopBetter(inventory) {
  return {
    inventory,
    inventoryValue() {
      return this.inventory.reduce((total, book) => total + book.price, 0);
    },
    priceForTitle(title) {
    	return this.inventory.find(book => book.title === title).price;
    }
  };
}

// Coding Exercises 

const red = '#ff0000';
const blue = '#0000ff';

const COLORS = { red, blue };

const fields = ['firstName', 'lastName', 'phoneNumber'];
      
const props = { fields };

const canvasDimensions = function(width, initialHeight) {
  const height = initialHeight * 9 /16;
  return { 
    width, 
    height 
  };
}

const color = 'red';

const Car = {
  color,
  drive() {
    return 'Vroom!';
  },
  getColor() {
    return this.color;
  }
};
