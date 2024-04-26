class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
        this.read = false; // Indicates whether the book has been read or not
    }

    getTitle() {
        return this.title;
    }

    getAuthor() {
        return this.author;
    }

    getYear() {
        return this.year;
    }

    isRead() {
        return this.read; // Returns the read status of the book
    }

    toggleRead() {
        this.read = !this.read; // Toggles the read status of the book
    }
}

class Library {
    constructor() {
        this.library = []; // Array to store books
    }

    addBook(newBook) {
        this.library.push(newBook); // Adds a new book to the library
    }

    removeBook(bookToRemove) {
        this.library = this.library.filter(book => book !== bookToRemove); // Removes a book from the library
    }

    displayBooks() {
        const booksContainer = document.getElementById("booksContainer");
        booksContainer.innerHTML = ""; // Clears the container before displaying books

        console.log("Books in the library:");
        for (const book of this.library) {

            const bookCard = document.createElement("div"); // Creates a div element for each book
            bookCard.classList.add("book-card");
            bookCard.innerHTML = `<p>Title: ${book.getTitle()}</p>
                                  <p>Author: ${book.getAuthor()}</p>
                                  <p>Year: ${book.getYear()}</p>
                                  <div class="buttonsBookCard">
                                  <button class="readButton">${book.isRead() ? 'Read' : 'Not Read'}</button>
                                  <button class="removeButton">Remove Book</button>
                                  </div>`;

            const readButton = bookCard.querySelector('.readButton');
            readButton.addEventListener("click", function () {
                book.toggleRead(); // Toggles the read status when the button is clicked
                myLibrary.displayBooks(); // Updates the display after toggling
            });

            const removeButton = bookCard.querySelector('.removeButton');
            removeButton.addEventListener("click", function () {
                myLibrary.removeBook(book); // Removes the book when the button is clicked
                myLibrary.displayBooks(); // Updates the display after removing
            });

            booksContainer.appendChild(bookCard); // Appends the book card to the container
        }
    }
}

const myLibrary = new Library(); // Creates a new library object

document.getElementById("addBookButton").addEventListener("click", function () {
    document.getElementById("addBookForm").style.display = "block"; // Displays the add book form
});

document.getElementById("bookForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevents the default form submission behavior

    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const year = parseInt(document.getElementById("year").value);

    const newBook = new Book(title, author, year); // Creates a new book object
    myLibrary.addBook(newBook); // Adds the new book to the library
    myLibrary.displayBooks(); // Updates the display

    document.getElementById("addBookForm").style.display = "none"; // Hides the add book form after submission
});
