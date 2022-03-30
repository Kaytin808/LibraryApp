 let myLibrary = [];

//Constructor//
class Book {
    constructor(title,author,pages) {
        this.title = title;
        this.author = author;
        this.pages = pages;
    }
}

function addBookToLibrary(item) {
    var form = document.getElementById('myForm')
    form.style.display='none';

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
function addBtn() {
    var addBtn = document.getElementById('myForm')
    addBtn.style.display = 'flex';
}
function closeBtn() {
    var form = document.getElementById('myForm')
form.style.display='none';
}
var readBtn = document.getElementById('readBtn')
