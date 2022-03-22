const deleteBookFromLS = (ID, storedBooks) => {
  const idInNum = Number(ID);
  storedBooks.forEach((storedBook, index) => {
    if (storedBook.ID === idInNum) {
      storedBooks.splice(index, 1);
    }
  });
  localStorage.setItem('Books', JSON.stringify(storedBooks));
};

// eslint-disable-next-line import/prefer-default-export
export { deleteBookFromLS };