 let myLibrary = [];

//Constructor//
function Book(title,author,pages,) {
    this.title = title.value;
    this.author = author.value;
    this.pages = pages.value;
}

function addBookToLibrary() {
    var form = document.getElementById('myForm')
    form.style.display='none';

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
    var btnContainer = document.createElement('div')
    btnContainer.classList.add('btn-container')
    var divRead = document.createElement('button')
    divRead.classList.add('readBox')
    var divX = document.createElement('button')
    divX.setAttribute('data-index-number',myLibrary.indexOf(book))

    divX.classList.add('remove-book')
    divT.innerHTML = `${title.value}`
    divA.innerHTML = `${author.value}`
    divP.innerHTML = `${pages.value}` + ' pages'
    divX.innerHTML = '×'
    bookShelf.appendChild(bookCell)
    bookCell.appendChild(divT)
    bookCell.appendChild(divA)
    bookCell.appendChild(divP)
    bookCell.appendChild(divRead)
    bookCell.appendChild(divX)
    bookCell.appendChild(btnContainer)
    // Form reset after pressing submit //
    document.forms[0].reset();

divX.onclick = function(e) {
    var itemIndex = this.getAttribute('data-index-number')
    myLibrary.splice(itemIndex,1)
    e.target.parentElement.remove()
    console.log(myLibrary)
}
    if (checkBox.checked == true) {
        divRead.innerHTML = 'Already read'
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

// add/close button to open forms //
function addBtn() {
    var addBtn = document.getElementById('myForm')
    addBtn.style.display = 'flex';
}
function closeBtn() {
    var form = document.getElementById('myForm')
form.style.display='none';
}
    var readBtn = document.getElementById('readBtn')
