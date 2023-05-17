module.exports = class Database {
  #storage = {
    authors: [],
    books: [],
    posters: [],
    orders: [],
    users: [],
  };

  //quero que o usuario fale o que quer encontrar no banco de dados
  find(key) {
    return this.#storage[key];
  }

  //metodo para salvar dados
  saveAuthor(author) {
    this.#storage.authors.push(author);
  }

  //dados Book

  findBookByName(bookName) {
    return this.#storage.books.find((b) => b.name === bookName);
  }

  //verificando se o livro ja existe e salvando caso não existir
  saveBook(book) {
    const bookExists = this.findBookByName(book.name);
    if (!bookExists) {
      this.#storage.books.push(book);
    }
  }

  //method add to Stock
  addBooksToStock(bookName, quantity) {
    const book = this.findBookByName(bookName);
    book?.addBooksToStock(quantity);
  }

  //method remove to Stock
  removeBooksFromStock(bookName, quantity) {
    const book = this.findBookByName(bookName);
    book?.removeFromStock(quantity);
  }

  //dados Poster

  findPosterByName(posterName) {
    return this.#storage.posters.find((p) => p.name === posterName);
  }

  //verificando se o livro ja existe e salvando caso não existir
  savePoster(poster) {
    const posterExists = this.findPosterByName(poster.name);
    if (!posterExists) {
      this.#storage.posters.push(poster);
    }
  }

  //method add to Stock
  addPosterToStock(posterName, quantity) {
    const poster = this.findPosterByName(posterName);
    poster?.addPosterToStock(quantity);
  }

  //method remove to Stock
  removePosterFromStock(posterName, quantity) {
    const poster = this.findPosterByName(posterName);
    poster?.removeFromStock(quantity);
  }

  //salvar usuarios, se o usuario nao existir
  saveUser(user) {
    const userExists = this.#storage.users.find((u) => u.email === user.email);
    if (!userExists) {
      this.#storage.users.push(user);
    }
  }

  //salvar o pedido
  saveOrder(order) {
    this.#storage.orders.push(order);
  }

  //debug
  showStorage() {
    console.table(this.#storage.authors);
    console.table(this.#storage.books);
    console.table(this.#storage.posters);
    console.table(this.#storage.users);
    console.table(this.#storage.orders.map((order) => order.data));
  }
};
