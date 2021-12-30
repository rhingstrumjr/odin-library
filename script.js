let myLibrary = [];

const book = (title, author, pages, haveRead) => {
    const book = {
        info : () => { 
            return `${title} by ${author}, ${pages} pages, ${book.haveRead ? 'have read' : 'not read yet'}`
            },
        haveRead
    };
    return book
}

function addBookToLibrary () {
    book(document.getElementById('title').value, document.getElementById('author').value, document.getElementById('pages').value, document.getElementById('read').checked)
}

const harryPotter = book('Chamber of Secrets', 'JK Rowling', 350, true);