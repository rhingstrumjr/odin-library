let myLibrary = [];

const book = (title, author, pages, haveRead) => {
    return {
        get title() {
            return title
        },
        get author() {
            return author
        },
        get pages() {
            return pages
        },
        haveRead
    }
}

function addBookToLibrary () {
    return myLibrary.push(book(document.getElementById('title').value, document.getElementById('author').value, document.getElementById('pages').value, document.getElementById('read').checked))
}

// const harryPotter = book('Chamber of Secrets', 'JK Rowling', 350, true);
document.getElementById("addBook").addEventListener('click', () => addBookToLibrary())