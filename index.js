/* eslint-disable max-classes-per-file */
/* eslint-disable no-unused-vars */
/* eslint-disable no-use-before-define */

// modules imports
import { deleteBookFromUI } from './modules/deleteBookFromUI.js';
import { deleteBookFromLS } from './modules/deleteBookFromLS.js';
import { addBookToUI } from './modules/addBookToUI.js';

class Store {
  // getting books from LS
  static getBooks() {
    let books;
    if (localStorage.getItem('Books') !== null) {
      books = JSON.parse(localStorage.getItem('Books'));
    } else {
      books = [];
    }
    return books;
  }

  // adding books to local storage
  static addBook(book) {
    storedBooks.push(book);
    localStorage.setItem('Books', JSON.stringify(storedBooks));
  }

  // removing books from local storage
  static removeBook(ID) {
    const storedBooks = Store.getBooks();
    deleteBookFromLS(ID, storedBooks);
  }
}

// global variable
const storedBooks = Store.getBooks();

// Book Class: Represents a book
class Book {
  constructor(ID, Title, Author) {
    this.ID = ID;
    this.Title = Title;
    this.Author = Author;
  }
}

// UI Class: handles UI tasks
class UI {
  // getting books
  static displayBooks() {
    storedBooks.forEach((storedBook, index) => {
      UI.addBookToList(storedBook, index);
    });
  }

  // adding book to list
  static addBookToList(storedBook) {
    addBookToUI(storedBook);
  }

  // clear form fields
  static clearForm() {
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
  }

  // delete books from UI
  static deleteBook(el) {
    // my first module
    deleteBookFromUI(el);
  }
}

// Event Display Books
document.addEventListener('DOMContentLoaded', UI.displayBooks);

// Event Add a book
document.getElementById('addBooks-form').addEventListener('submit', (e) => {
  e.preventDefault();
  // creating an unique id
  const date = new Date();
  const time = date.getTime();
  // end of creating an unique id

  // getting input values
  const bookTitle = document.getElementById('title').value;
  const bookAuthor = document.getElementById('author').value;

  // instantiate book
  const book = new Book(time, bookTitle, bookAuthor);

  // adding new book to UI
  UI.addBookToList(book);

  // adding book to LS
  Store.addBook(book);

  // clearing form fields
  UI.clearForm();
});

// Event: remove a book
document.getElementById('booklist-container').addEventListener('click', (e) => {
  UI.deleteBook(e.target);
  Store.removeBook(e.target.id);
});

// date and time
function time() {
  const date = new Date();
  const locale = navigator.language;
  const options = {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: 'false',
  };
  const myDate = date.toLocaleTimeString(locale, options);
  document.getElementById('date-and-time').textContent = myDate;
}

setInterval(time, 1000);

// body onload
document.getElementById('body').onload = () => {
  document.getElementById('booklist-container').style.display = 'flex';
  document.getElementById('addBooks-form').style.display = 'none';
  document.getElementById('contact-section').style.display = 'none';
};

// getting links
const list = document.getElementById('list');
const form = document.getElementById('form');
const contact = document.getElementById('contact');

// getting all links and applying click event
const links = document.querySelectorAll('.links');
links.forEach((link) => {
  link.addEventListener('click', (e) => {
    const clickedElement = e.target;
    const elementID = e.target.id;
    switch (elementID) {
      case 'list':
        document.getElementById('booklist-container').style.display = 'flex';
        document.getElementById('addBooks-form').style.display = 'none';
        document.getElementById('contact-section').style.display = 'none';
        clickedElement.classList.add('active');
        form.classList.remove('active');
        contact.classList.remove('active');
        break;
      case 'form':
        document.getElementById('addBooks-form').style.display = 'flex';
        document.getElementById('booklist-container').style.display = 'none';
        document.getElementById('contact-section').style.display = 'none';
        clickedElement.classList.add('active');
        list.classList.remove('active');
        contact.classList.remove('active');
        break;
      case 'contact':
        document.getElementById('addBooks-form').style.display = 'none';
        document.getElementById('booklist-container').style.display = 'none';
        document.getElementById('contact-section').style.display = 'flex';
        clickedElement.classList.add('active');
        list.classList.remove('active');
        form.classList.remove('active');
        break;
      default:
        document.getElementById('booklist-container').style.display = 'flex';
        document.getElementById('addBooks-form').style.display = 'none';
        document.getElementById('contact-section').style.display = 'none';
        clickedElement.classList.add('active');
        form.classList.remove('active');
        contact.classList.remove('active');
    }
  });
});