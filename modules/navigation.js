// getting links
const list = document.getElementById('list');
const form = document.getElementById('form');
const contact = document.getElementById('contact');

const navigation = (e) => {
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
};

// eslint-disable-next-line import/prefer-default-export
export { navigation };