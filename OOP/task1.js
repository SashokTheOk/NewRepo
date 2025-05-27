class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    };
    get title() {
        return this._title;
    };
    set title(value) {
        if (value === " ") {
            console.log("Title cannot be empty");
            return;
        }
        this._title = value;
    };
    get author() {
        return this._author;
    };
    set author(value) {
        if (value === " ") {
            console.log("Author cannot be empty");
            return;
        }
        this._author = value;
    };
    get year() {
        return this._year;
    }
    set year(value) {
        if (isNaN(value) || value < 0) {
            console.log("Year must be a positive number");
            return;
        }
        this._year = value;
    };
    static findOldestBook(books) {
        let oldestBook = books[0];
        for (let book of books) {
            if (book.year < oldestBook.year) {
                oldestBook = book;
            }
        }
        return oldestBook;
    }
}

class EBook extends Book {
    constructor(title, author, year, fileType) {
        super(title, author, year);
        this.fileType = fileType;
    };
    get fileType() {
        return this._fileType;
    };
    set fileType(value) {
        if (value === " ") {
            console.log("File type cannot be empty");
            return;
        }
        this._fileType = value;
    };
    static fromBook(book, fileType) {
        return new EBook(book.title, book.author, book.year, fileType);
    }
}

const ebook1 = new EBook('1984', 'George Orwell', 1949, 'PDF');
const book1 = new Book('The Lord of the Rings', 'J.R.R. Tolkien', 1954);
const ebook2 = new EBook('Dune', 'Frank Herbert', 1965, 'EPUB');
const book2 = new Book('Pride and Prejudice', 'Jane Austen', 1813);

const library = [ebook1, book1, ebook2, book2];
const oldestBook = Book.findOldestBook(library);
console.log(`The oldest book is "${oldestBook.title}" by ${oldestBook.author}, published in ${oldestBook.year}.`);

const ebookFromBook = EBook.fromBook(book1, 'fb2');
console.log(`Converted book "${ebookFromBook.title}" by ${ebookFromBook.author}, published in ${ebookFromBook.year}, to EBook with file type: ${ebookFromBook.fileType}.`)