class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }
    printInfo() {
        console.log(`${this.title} by ${this.author}, published in ${this.year}`);
    }
}

class EBook extends Book {
    constructor(title, author, year, fileType) {
        super(title, author, year);
        this.fileType = fileType;
    }
    printInfo() {
        console.log(`${this.title} by ${this.author}, published in ${this.year}, file type: ${this.fileType}`);
    }
}

const ebook1 = new EBook('1984', 'George Orwell', 1949, 'PDF')
ebook1.printInfo();