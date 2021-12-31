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
    const author = document.getElementById('author');
    const title = document.getElementById('title');
    const pages = document.getElementById('pages');
    const haveRead = document.getElementById('read');
    if (title.value && author.value && pages.value) {
        myLibrary.push(book(title.value, author.value, pages.value, haveRead.checked))
        title.value = "";
        author.value = "";
        pages.value = "";
        haveRead.checked = false;
    } else {
        alert("Missing title, author, and/or pages.")
    }
    
}

// const harryPotter = book('Chamber of Secrets', 'JK Rowling', 350, true);
document.getElementById("addBook").addEventListener('click', () => addBookToLibrary())