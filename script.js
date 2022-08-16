 let myLibrary = [];

//Constructor//
function Book(title,author,pages,) {
    this.title = title.value;
    this.author = author.value;
    this.pages = pages.value;
}
    const submitListen = document.querySelector('.submit-btn')
    const titleField = document.getElementById('title')
    const authorField = document.getElementById('author')
    const pageField = document.getElementById('pages')
    const titleFieldBorder = document.querySelector('input[name="title"]')
    const authorFieldBorder = document.querySelector('input[name="author"]')
    const pageFieldBorder = document.querySelector('input[name="pages"]')
    const addBook = document.querySelector('.add-book')


pageField.addEventListener('invalid', (event)=> {
            if (event.target.validity.valueMissing){
                event.target.setCustomValidity("Pages can't be empty")
            }
        })
        pageField.addEventListener('change', (event)=>{
            event.target.setCustomValidity("")
        })
authorField.addEventListener('invalid',(event) => {
    if(event.target.validity.valueMissing) {
        event.target.setCustomValidity("Author can't be empty")
    }
})
authorField.addEventListener('change', (event)=> {
    event.target.setCustomValidity("")
})

// title
    titleField.addEventListener('invalid', function (event) {
    if (event.target.validity.valueMissing) {
        event.target.setCustomValidity("Title can't be empty")
    }
})
titleField.addEventListener('change', function (event) {
    event.target.setCustomValidity('');
    titleFieldBorder.style.borderColor ='';
    return;
})
const checkAll = document.querySelector('form')
submitListen.addEventListener('click', () => {
    // titleFieldBorder.style.borderColor = 'blue';
    
displayBooks()
})


function addBookToLibrary() {
    var form = document.getElementById('myForm')
    form.style.display='none';

    const book = new Book(title,author,pages)
    myLibrary.push(book)
    // displayBooks(book)
    
    // console.log(myLibrary)
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

    // check validation
    if (titleField.value.length === 0) {
        return;
    } else if (authorField.value.length === 0) {
        return;
    } else if (pageField.value.length === 0 || isNaN(pageField.value)) {
        return;
    }

    bookShelf.appendChild(bookCell)
    bookCell.appendChild(divT)
    bookCell.appendChild(divA)
    bookCell.appendChild(divP)
    bookCell.appendChild(divRead)
    bookCell.appendChild(divX)
    // Form reset after pressing submit //
    document.forms[0].reset();
    // close pop up form //
    let popForm = document.querySelector('.form-popup')
    popForm.style.display = 'none';
    // remove from array on button //
    divX.onclick = function(e) {
        myLibrary.splice(myLibrary.indexOf(book),1)
        e.target.parentElement.remove()
        console.log(myLibrary)

    }
}
console.log(myLibrary)


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
