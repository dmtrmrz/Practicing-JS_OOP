// Constructor
function Book(title, author, year) {
  this.title = title;
  this.author = author;
  this.year = year;
}

// getSummary
Book.prototype.getSuumary = function () {
  return `"${this.title}" was written by ${this.author} and published in ${this.year}.`;
};

function Magazine(title, author, year, month) {
  Book.call(this, title, author, year);

  this.month = month;
}

// Inherit Prototype
Magazine.prototype = Object.create(Book.prototype);

// Instantiate Magazine Object
const mag1 = new Magazine("Mag One", "Jane Doe", "2018", "Jan");

// Use Magazine constructor
Magazine.prototype.consructor = Magazine;

console.log(mag1);
