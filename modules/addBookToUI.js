const addBookToUI = (storedBook) => {
  document.getElementById('booklist-container').innerHTML += `
      <div class="table">
          <h4 class="bt1">${storedBook.Title} by ${storedBook.Author}</h4>
          <button id="${storedBook.ID}" class="remove-btn">Remove</button>
      </div>
      `;
};

// eslint-disable-next-line import/prefer-default-export
export { addBookToUI };