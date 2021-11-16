let myLibrary = [];

// This is my Book Contructor! //
function Book(title,author,pages) {
this.title=title;
this.author=author;
this.pages=pages;
}

const addBook = (ev) => {
    ev.preventDefault();
}

let bookInfo = {
    title: document.getElementById('title').value,
    author: document.getElementById('author').value,
    pages: document.getElementById('pages').value,
}
myLibrary.push(bookInfo)
document.forms[0].reset();
localStorage.setItem('MyBookList', JSON.stringify(myLibrary) );

function addBtn() {
    var form = document.getElementById('myForm');
    form.style.display = 'flex' ;
}
function closeBtn() {
    var form = document.getElementById('myForm');
    form.style.display = 'none';
}
var submitBtn = document.querySelector('.submit-btn');
submitBtn.addEventListener('click',addBook)
