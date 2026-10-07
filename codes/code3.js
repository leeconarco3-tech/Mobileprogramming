class Book {
    constructor(title, author) {
        this.title = title;
        this.author = author;
        this.isAvailable = true;
    }
}

const library = [];

function addBook(title, author) {
    library.push(new Book(title, author));
}

function borrowBook(title) {
    for (let i = 0; i < library.length; i++) {
        if (library[i].title === title) {
            library[i].isAvailable = false;
            console.log("Borrowed: " + title);
            return;
        }
    }
}

function displayLibrary() {
    for (let i = 0; i < library.length; i++) {
        let b = library[i];
        let status = b.isAvailable ? "Available" : "Borrowed";
        console.log(b.title + " - " + status);
    }
}

addBook("The Great Gatsby", "F. Scott Fitzgerald");
addBook("1984", "George Orwell");

displayLibrary();
borrowBook("1984");
displayLibrary();