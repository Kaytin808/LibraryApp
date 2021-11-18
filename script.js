let myLibrary = [];


//Constructor//
function Book(title,author,pages,) {
    this.title = title;
    this.author = author;
    this.pages = pages;
}
function addBookToLibrary() {

    let bookInfo = {
    title: document.getElementById('title').value,
    author: document.getElementById('author').value,
    pages: document.getElementById('pages').value
}
myLibrary.push(bookInfo)
}

// add button to open forms //
function addBtn() {
    var addBtn = document.getElementById('myForm')
    addBtn.style.display = 'flex';
}


function loopBooks() {
for (i=0;i < myLibrary.length; i++) {
    if (title.value == title.value) {
        
    }
}
}
loopBooks(); 