class Book {
    constructor(title, author) {
        this.title = title;
        this.author = author;
        this.isAvailable = true;
    }

    borrowBook() {
        if (this.isAvailable) {
            this.isAvailable = false;
            return true;
        } else {
            return false;
        }
    }

    returnBook() {
        this.isAvailable = true;
    }
}

const library = [];

function addBook(title, author) {
    const newBook = new Book(title, author);
    library.push(newBook);
}

function borrowBook(title) {
    for (let i = 0; i < library.length; i++) {
        if (library[i].title === title) {
            if (library[i].borrowBook()) {
                console.log(`Successfully borrowed "${title}".`);
            } else {
                console.log(`Sorry, "${title}" is currently unavailable.`);
            }
            return;
        }
    }
    console.log(`Book "${title}" was not found in the library.`);
}

function displayLibrary() {
    console.log("=== LIBRARY CATALOG ===");
    for (let i = 0; i < library.length; i++) {
        const book = library[i];
        const status = book.isAvailable ? "Available" : "Borrowed";
        console.log(`Title: ${book.title} | Author: ${book.author} | Status: ${status}`);
    }
}

addBook("The Great Gatsby", "F. Scott Fitzgerald");
addBook("To Kill a Mockingbird", "Harper Lee");
addBook("1984", "George Orwell");

displayLibrary();

console.log("\n--- Borrowing a book ---");
borrowBook("1984");

console.log("\n--- Updated Library Catalog ---");
displayLibrary();