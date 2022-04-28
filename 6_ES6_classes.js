class Book {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }
  getSummary = function () {
    return `"${this.title}" was written by ${this.author} and published in ${this.year}.`;
  };
  static topBookStore() {
    return "Barnes & Noble";
  }
}

// Instantiate Object

const book1 = new Book("Book One", "John Cena", "2021");

console.log(book1);
console.log(Book.topBookStore());
