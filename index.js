function fetchBooks() {
  let dog = fetch('https://anapioficeandfire.com/api/books')
  .then(resp => resp.json())
  .then(json => console.log(json));
  renderBooks(dog)
  return dog
}

function renderBooks(books) {
  const main = document.querySelector('main');
  Array.from(books).forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}


document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});
