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
        card.setAttribute("data-loc", `${i}`);
        card.classList.add("card");
        card.innerHTML = `
            <h4>${book.title}</h5>
            <h5>${book.author}</h5>
            <p>${book.pages} pages</p>
            <label>Read? <button onclick="changeReadStatus(${i})">${book.haveRead ? "Yes" : "No"}</button></label>
            <button onclick="removeBook(${i})">Remove from library</button>`;
        shelf.appendChild(card)
    })
}

// const harryPotter = book('Chamber of Secrets', 'JK Rowling', 350, true);
document.getElementById("addBook").addEventListener('click', () => addBookToLibrary())