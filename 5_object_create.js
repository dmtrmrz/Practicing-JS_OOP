// Object Of Protos

const bookProtos = {
  getSummary: function () {
    return `"${this.title}" was written by ${this.author} and published in ${this.year}.`;
  },
  getAge: function () {
    const years = new Date().getFullYear() - this.year;
    return `"${this.title}" is ${years} years old`;
  },
};

// Create Object

// const book1 = Object.create(bookProtos);
// book1.title = "Book One";
// book1.author = "John Cena";
// book1.year = "2012";

// Or
const book1 = Object.create(bookProtos, {
  title: { value: "Book One" },
  author: { value: "John Cena" },
  year: { value: "2012" },
});

console.log(book1);
