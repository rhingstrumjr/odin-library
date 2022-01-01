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
        displayBooks();
    } else {
        alert("Missing title, author, and/or pages.")
    }
}

function displayBooks () {
    const shelf = document.getElementById("shelf");
    myLibrary.forEach( (book, i) => {
        const card = document.createElement('div');
        card.setAttribute("data-loc", `${i}`)
        const titleHeading = document.createElement('h4');
        const title = document.createTextNode(book.title);
        titleHeading.appendChild(title);
        const authorHeading = document.createElement('h5');
        const author = document.createTextNode(`Author: ${book.author}`);
        authorHeading.appendChild(author);
        const pagesPara = document.createElement('p');
        const pages = document.createTextNode(`Pages: ${book.pages}`)
        pagesPara.appendChild(pages);
        const labelForReadButton = document.createElement('label');
        const readButton = document.createElement('button');
        readButton.setAttribute("data-loc", `${i}`);
        const readStatus = document.createTextNode(book.haveRead ? "Yes" : "No");
        readButton.appendChild(readStatus);
        labelForReadButton.appendChild(readButton);
        const removeButton = document.createElement('button');
        const removeWords = document.createTextNode("Remove");
        removeButton.appendChild(removeWords);
        const thingsToAdd = [titleHeading, authorHeading, pagesPara, labelForReadButton, removeButton];
        thingsToAdd.forEach(thing => {
            thing.setAttribute("data-loc", `${i}`)
            card.appendChild(thing)
        })
        shelf.appendChild(card)
    })
}

// const harryPotter = book('Chamber of Secrets', 'JK Rowling', 350, true);
document.getElementById("addBook").addEventListener('click', () => addBookToLibrary())