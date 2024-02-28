function Book(author, title, numPages, isRead) {
  this.author = author;
  this.title = title;
  this.numPages = numPages;
  this.isRead = isRead;
}

Book.prototype.info = function () {
  return `${this.title} by ${this.author}, ${this.numPages} pages, ${
    this.isRead ? 'already read' : 'not read yet'
  }`;
};

const theGoodLife = new Book('Leke Kolade', 'The Good Life', 153, true);

console.log(theGoodLife.info());
