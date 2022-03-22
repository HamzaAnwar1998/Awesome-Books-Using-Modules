const deleteBookFromUI = (el) => {
  if (el.classList.contains('remove-btn')) {
    el.parentElement.remove();
  }
};

// eslint-disable-next-line import/prefer-default-export
export { deleteBookFromUI };