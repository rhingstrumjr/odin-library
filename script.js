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
    let title = document.getElementById('title');
    let author = document.getElementById('author');
    let pages = document.getElementById('pages');
    let haveRead = document.getElementById('read');
    myLibrary.push(book(title.value, author.value, pages.value, haveRead.checked))
    title.value = "";
    author.value = "";
    pages.value = "";
    haveRead.checked = false;
}

// const harryPotter = book('Chamber of Secrets', 'JK Rowling', 350, true);
document.getElementById("addBook").addEventListener('click', () => addBookToLibrary())