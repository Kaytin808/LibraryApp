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
function test() {
    myLibrary.forEach(function(i){
          console.log(i);
        })}
// add button to open forms //
function addBtn() {
    var addBtn = document.getElementById('myForm')
    addBtn.style.display = 'flex';
}
function closeBtn(ev) {
    ev.preventDefault();
var closeBtn = document.querySelector('.x');
closeBtn.style.display=none;
console.log('should work')
}

