const Database = require("./Database");
const Author = require("./entities/Author");
const Book = require("./entities/Book");
const Order = require("./entities/Order");
const User = require("./entities/User");
const Poster = require("./entities/Poster");

//method save the user
module.exports = class App {
  static #database = new Database();

  createUser(name, email, password) {
    const user = new User(name, email, password);
    App.#database.saveUser(user);
  }

  //obter usuarios da base de dados
  getUsers() {
    return App.#database.find("users");
  }

  //method save author
  createAuthor(name, nationality, bio) {
    const author = new Author(name, nationality, bio);
    App.#database.saveAuthor(author);
  }

  getAuthors() {
    return App.#database.find("authors");
  }

  //Criando Livros
  createBook(
    title,
    synopsis,
    genre,
    pages,
    author,
    description,
    price,
    inStock
  ) {
    const book = new Book(
      title,
      synopsis,
      genre,
      pages,
      author,
      description,
      price,
      inStock
    );
    App.#database.saveBook(book);
  }

  //method adicionar mais livros no estoque
  addBook(bookName, quantity) {
    App.#database.addBooksToStock(bookName, quantity);
  }

  getBooks() {
    return App.#database.find("books");
  }

  //Criando Posters
  createPoster(name, description, height, width, price, inStock) {
    const poster = new Poster(name, description, height, width, price, inStock);
    App.#database.savePoster(poster);
  }

  //method adicionar mais Posters no estoque
  addPoster(posterName, quantity) {
    App.#database.addPosterToStock(posterName, quantity);
  }
  getPosters() {
    return App.#database.find("posters");
  }

  //method orders e descontando a quantidade de itens no estoque
  createOrder(items, user) {
    const order = new Order(items, user);
    App.#database.saveOrder(order);
    order.data.items.forEach(({ product, quantity }) => {
      if (product instanceof Book) {
        App.#database.removeBooksFromStock(product.name, quantity);
      } else if (product instanceof Poster) {
        App.#database.removePosterFromStock(product.name, quantity);
      }
    });
  }

  //Devolver os pedidos que estao salvos no Database
  getOrders() {
    return App.#database.find("orders");
  }
  //debug atributos privados
  showDatabase() {
    App.#database.showStorage();
  }
};
