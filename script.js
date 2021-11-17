

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
    pages: document.getElementById('pages').value,
    boxRead: document.getElementById('checkBox').value
}
myLibrary.push(bookInfo);
for (i = 0; i < myLibrary.length; i++) {
    console.log(myLibrary[i])
    var container = document.getElementById('book-shelf')
     var div = document.createElement('div')
     var divT = document.createElement('p')
     var divA = document.createElement('p')
     var divP = document.createElement('p')
     var divRead = document.createElement('button')
     var checkBox = document.getElementById('checkBox')
     div.classList.add('cell')
     divT.innerHTML = `${title.value}`
     divA.innerHTML = `${author.value}`
     divP.innerHTML = `${pages.value}`
     if (checkBox.checked == true) {
         divRead.innerHTML = 'Already Read'
     } else {
         divRead.innerHTML = 'Not read yet'
     }

     container.appendChild(div);
     div.appendChild(divT)
     div.appendChild(divA)
     div.appendChild(divP)
     div.appendChild(divRead)
}
// reset forms after submitting //
document.forms[0].reset();
localStorage.setItem('myBookList',JSON.stringify(myLibrary) );
}

function addBtn() {
    var form = document.getElementById('myForm');
    form.style.display = 'flex' ;
}
var submitBtn = document.querySelector('.submit-btn');
submitBtn.addEventListener('click',addBook)

var readBtn = document.getElementById('readBtn')

var closeBtn = document.querySelector('.x');
closeBtn.addEventListener('click', (event)=> {
    event.preventDefault();
    var form = document.getElementById('myForm')
    form.style.display = 'none';
})