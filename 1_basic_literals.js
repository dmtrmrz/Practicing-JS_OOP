// const s1 = "Hello";
// console.log(typeof s1);

// const s2 = new String("Bye");
// console.log(typeof s2);

// Object Literal
const book1 = {
  title: "Book One",
  author: "Johnny Doe",
  year: "1999",
  getSummary: function () {
    return `"${this.title}" was written by ${this.author} and published in ${this.year}.`;
  },
};

console.log(book1.getSummary());
console.log(Object.values(book1));
console.log(Object.keys(book1));

//

const book2 = {
  title: "Book Two",
  author: "Mary Sue",
  year: "2001",
  getSummary: function () {
    return `"${this.title}" was written by ${this.author} and published in ${this.year}.`;
  },
};
