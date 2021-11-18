myLibrary = [];

//Constructor//
function Book(title,author,pages,) {
    this.title = title;
    this.author = author;
    this.pages = pages;
}

function addBookToLibrary() {
    var form = document.getElementById('myForm')
    form.style.display='none';
    let bookInfo = {
    title: document.getElementById('title').value,
    author: document.getElementById('author').value,
    pages: document.getElementById('pages').value
}
myLibrary.push(bookInfo)

myLibrary.forEach(book =>  {

});
console.log(myLibrary)
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
     divX.dataset.name = `${title.value}`
     div.dataset.name = `${title.value}`
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
    divRead.addEventListener('click',() => {
        if (divRead.innerHTML == 'Already Read') {
            divRead.innerHTML = 'Not read yet'
        } else {
            divRead.innerHTML = 'Already Read'
        }
    })
    var removeBtn = document.querySelectorAll('.remove-book')
    removeBtn.forEach(books => {
        books.addEventListener('click',() => {
    if (divX.dataset.name === div.dataset.name)
    div.remove(div)
    })
    })
    
}
// reset forms after submit //
document.forms[0].reset();
localStorage.setItem('myBookList',JSON.stringify(myLibrary) );
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

