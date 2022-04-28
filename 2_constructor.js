// Constructor
function Book(title, author, year) {
  this.title = title;
  this.author = author;
  this.year = year;
  this.getSuumary = function () {
    return `"${this.title}" was written by ${this.author} and published in ${this.year}.`;
  };
}

const book1 = new Book("Book One", "Johnny Doe", "1999");
const book2 = new Book("Book Two", "Mary Sue", "2001");

console.log(book1.getSuumary());
