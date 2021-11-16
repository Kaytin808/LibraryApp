let myLibrary = [];

// This is my Book Contructor! //
function Book() {

}

function addBookToLibrary() {
    var userInput = '';
    var title = document.getElementById('title').value;
    var author = document.getElementById('author').value;
    var pages = document.getElementById('pages').value;
    console.log(title,author,pages)
}

function addBtn() {
    var form = document.getElementById('myForm');
    form.style.display = 'flex' ;
}
function closeBtn() {
    var form = document.getElementById('myForm');
    form.style.display = 'none';
}
