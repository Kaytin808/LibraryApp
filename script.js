

// This is my Book Contructor! //
function Book(title,author,pages) {
this.title=title;
this.author=author;
this.pages=pages;
}
const addBook = (ev) => {
    ev.preventDefault();
    let myLibrary = [];
let bookInfo = {
    title: document.getElementById('title').value,
    author: document.getElementById('author').value,
    pages: document.getElementById('pages').value
}
myLibrary.push(bookInfo);
for (i = 0; i < myLibrary.length; i++) {
    console.log(myLibrary[i])
    var container = document.getElementById('book-shelf')
     var div = document.createElement('div')
     div.classList.add('cell')
     container.appendChild(div);
}
// reset forms after submitting //
document.forms[0].reset();
}


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

// Book-shelf cards //
