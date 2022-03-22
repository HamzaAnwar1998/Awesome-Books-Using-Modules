const getElements = () => {
  document.getElementById('booklist-container').style.display = 'flex';
  document.getElementById('addBooks-form').style.display = 'none';
  document.getElementById('contact-section').style.display = 'none';
};

// eslint-disable-next-line import/prefer-default-export
export { getElements };