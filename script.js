 let myLibrary = [];

//Constructor//
<<<<<<< HEAD
class Book {
    constructor(title,author,pages) {
        this.title = title;
        this.author = author;
        this.pages = pages;
    }
=======
function Book(title,author,pages,) {
    this.title = title.value;
    this.author = author.value;
    this.pages = pages.value;
>>>>>>> 54349327f774f3e164279a34dbc69ae57aa16a96
}

function addBookToLibrary(item) {
    var form = document.getElementById('myForm')
    form.style.display='none';
<<<<<<< HEAD

    let bookInfo = {
    title: document.getElementById('title').value,
    author: document.getElementById('author').value,
    pages: document.getElementById('pages').value
}
    if (bookInfo.title == '') {
        alert('you entered nothing!')
    } else {
        myLibrary.push(bookInfo)
        addBook();
        document.forms[0].reset();
    }

console.log(myLibrary)
function addBook() {
     var container = document.getElementById('book-shelf')
     var div = document.createElement('div')
     var divT = document.createElement('p')
     var divA = document.createElement('p')
     var divP = document.createElement('p')
     var divRead = document.createElement('button')
     var divX = document.createElement('button')
     var checkBox = document.getElementById('checkBox')
     div.classList.add('cell')
     divRead.classList.add('readBox')
     divX.classList.add('remove-book')
     divT.classList.add('title')
     divT.innerHTML = `${title.value}`
     divA.innerHTML = `${author.value}`
     divP.innerHTML = `${pages.value}`
     divX.innerHTML = '×'
     // Give id to index of the book I just made //


     container.appendChild(div);
     div.appendChild(divT)
     div.appendChild(divA)
     div.appendChild(divP)
     div.appendChild(divRead)
     div.appendChild(divX)
     if (checkBox.checked == true) {
        divRead.innerHTML = 'Already Read'
=======

    const book = new Book(title,author,pages)
    myLibrary.push(book)
    displayBooks(book)
    console.log(myLibrary)
}
function displayBooks(book) {
    var bookShelf = document.getElementById('book-shelf')
    var bookCell = document.createElement('div')
    bookCell.classList.add('cell')
    var divT = document.createElement('p')
    divT.classList.add('title')
    var divA = document.createElement('p')
    var divP = document.createElement('p')
    var divRead = document.createElement('button')
    divRead.classList.add('readBox')
    var divX = document.createElement('button')   
    var checkBox = document.getElementById('checkBox')
    divX.classList.add('remove-book')
    divT.innerHTML = `${title.value}`
    divA.innerHTML = `${author.value}`
    divP.innerHTML = `${pages.value}` + ' pages'
    divX.innerHTML = '×'
    if (checkBox.checked == true) {
        divRead.innerHTML = 'Already read'
>>>>>>> 54349327f774f3e164279a34dbc69ae57aa16a96
    } else {
        divRead.innerHTML = 'Not read yet'
    }
    divRead.addEventListener('click', () => {
        if (divRead.innerHTML == 'Already read') {
            divRead.innerHTML = 'Not read yet'
        } else {
            divRead.innerHTML= 'Already read'
        }
    })
<<<<<<< HEAD
    var removeBtn = document.querySelectorAll('.remove-book')
    removeBtn.forEach(books => {
    books.addEventListener('click', (e)=> {
     e.target.parentElement.remove()
     myLibrary.splice(myLibrary.indexOf(item));

    })
    })
}
}
// reset forms after submit //
document.forms[0].reset();
// add button to open forms //
=======

    bookShelf.appendChild(bookCell)
    bookCell.appendChild(divT)
    bookCell.appendChild(divA)
    bookCell.appendChild(divP)
    bookCell.appendChild(divRead)
    bookCell.appendChild(divX)
    // Form reset after pressing submit //
    document.forms[0].reset();

    // remove from array on button //
    divX.onclick = function(e) {
        myLibrary.splice(myLibrary.indexOf(book),1)
        e.target.parentElement.remove()
        console.log(myLibrary)
    }
}
console.log(myLibrary)

// add/close button to open forms //
>>>>>>> 54349327f774f3e164279a34dbc69ae57aa16a96
function addBtn() {
    var addBtn = document.getElementById('myForm')
    addBtn.style.display = 'flex';
}
function closeBtn() {
    var form = document.getElementById('myForm')
form.style.display='none';
}
<<<<<<< HEAD
var readBtn = document.getElementById('readBtn')
=======
    var readBtn = document.getElementById('readBtn')
>>>>>>> 54349327f774f3e164279a34dbc69ae57aa16a96
