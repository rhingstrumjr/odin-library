const book = (title, author, pages, haveRead) => {
    const obj = {
        info : () => { 
            return `${title} by ${author}, ${pages} pages, ${obj.haveRead ? 'have read' : 'not read yet'}`
            },
        haveRead
    };
    return obj
}


const harryPotter = book('Chamber of Secrets', 'JK Rowling', 350, true);