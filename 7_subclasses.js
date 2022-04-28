class Book {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }
  getSummary = function () {
    return `"${this.title}" was written by ${this.author} and published in ${this.year}.`;
  };
}

// Magazine subclass

class Magazine extends Book {
  constructor(title, author, year, month) {
    super(title, author, year);
    this.month = month;
  }
}

const mag1 = new Magazine("Mag One", "John Cena", "2012", "Jan");

console.log(mag1.getSummary());
