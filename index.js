const App = require("./App");

const app = new App();

app.createAuthor("J. R. R. Tolkien", "British", "...");
app.createAuthor("Rick Riordan", "American", "...");

const authors = app.getAuthors();

app.createBook(
  "O Hobbit",
  "...",
  "Fantasy",
  300,
  authors[0],
  "...",
  19.99,
  100
);
app.createBook(
  "a Sociedade do Anel",
  "...",
  "Fantasy",
  400,
  authors[0],
  "...",
  24.99,
  100
);
app.createBook(
  "O Ladão de Raios",
  "...",
  "Fantasy",
  500,
  authors[1],
  "...",
  24.99,
  100
);
app.createBook(
  "A Pirâmide Vermelha",
  "...",
  "Fantasy",
  600,
  authors[1],
  "...",
  24.99,
  100
);

const books = app.getBooks();

app.createUser("Nicolas", "nickmarvila@gmail.com", "123456");

const users = app.getUsers();

const items = [
  {
    product: books[0],
    quantity: 2,
  },
  {
    product: books[1],
    quantity: 1,
  },
  {
    product: books[3],
    quantity: 1,
  },
];

app.createOrder(items, users[0]);

app.showDatabase();
