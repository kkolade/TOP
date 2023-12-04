function Book(title, author, numOfPages, isRead) {
  this.title = title;
  this.author = author;
  this.numOfPages = numOfPages;
  this.isRead = isRead;

  this.info = function () {
    return `${this.title} by ${this.author}, ${this.numOfPages} pages ${
      this.isRead ? 'already read' : 'not read yet'
    }`;
  };
}

const goodTimes = new Book('Good Times', 'Leke Kolade', 296, false);

console.log(goodTimes);
console.log(goodTimes.info());
