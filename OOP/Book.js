class Book {
    constructor (title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }
    printInfo () {
        console.log(`${this.title} by ${this.author}, published in ${this.year}`);
    }
}

const book1 = new Book('1984', 'George Orwell', 1949);
const book2 = new Book('To Kill a Mockingbird', 'Harper Lee', 1960);    
const book3 = new Book('The Great Gatsby', 'F. Scott Fitzgerald', 1925);
book1.printInfo();
book2.printInfo();
book3.printInfo();