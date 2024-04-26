# Library Management Application

This is a simple JavaScript application for managing a library of books. Users can add new books, mark books as read or unread, and remove books from the library.

## Features

- Add new books with title, author, and publication year.
- Mark books as read or unread.
- Remove books from the library.

## Usage

To use the application:

1. Clone or download the repository.
2. Open the `index.html` file in your web browser.
3. Use the "Add Book" button to add new books to the library.
4. Click on the "Read" button to toggle the read status of a book.
5. Click on the "Remove Book" button to remove a book from the library.

## Technologies Used

- HTML
- CSS
- JavaScript

## Code Structure

The application consists of two main classes:

1. `Book`: Represents a single book with properties such as title, author, year, and read status. It also has methods to toggle the read status.

2. `Library`: Represents the library collection, containing an array of `Book` objects. It has methods to add new books, remove books, and display the library.