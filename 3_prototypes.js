// Prototype
function Book(title, author, year) {
  this.title = title;
  this.author = author;
  this.year = year;
}

// getSummary
Book.prototype.getSuumary = function () {
  return `"${this.title}" was written by ${this.author} and published in ${this.year}.`;
};
Book.prototype.getAge = function () {
  const years = new Date().getFullYear() - this.year;
  return `"${this.title}" is ${years} years old`;
};

// Revise / Change Year
Book.prototype.revise = function (newYear) {
  this.year = newYear;
  this.revised = true;
};

const book1 = new Book("Book One", "Johnny Doe", "1999");
const book2 = new Book("Book Two", "Mary Sue", "2001");

console.log(book1.getSuumary());
console.log(book1.getAge());
console.log(book2); // getSummary is in __proto
book2.revise("2007");
console.log(book2);
