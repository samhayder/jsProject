// Book Class: Represents a book
class Book {
    constructor(title, author, isbn){
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

// UI Class: Handle UI takes
class UI{
    static displayBook(){
        const books = Store.getBooks();
        /* const storedBook = [
            {
                title: 'JavaScript',
                author: 'ECAMAScript',
                isbn: 5236
            },
            {
                title: 'Fundamental Python',
                author: 'Traversy Media',
                isbn: 2365
            }
        ];
        const books = storedBook; */

        books.forEach((book) => UI.addBookToList(book))
    };

    //Add Book List to UI
    static addBookToList(book){
        const list = document.querySelector('#book_list');
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.isbn}</td>
            <td><a href="#" class="btn btn-danger btn-sm"> <i class="fa fa-trash delete"></i> </a></td>
        `
        list.appendChild(row);        
    };

    //Clear fields
    static clearFields(){
        document.querySelector('#title').value = '';
        document.querySelector('#author').value = '';
        document.querySelector('#isbn').value = '';
    };

    //Remove Single Book
    static removeBook(el){
        if(el.classList.contains('delete')){
            el.parentElement.parentElement.parentElement.remove();
        };
    };
};

//Local Store
class Store{
    static getBooks(){
        let books;
        if(localStorage.getItem('books') === null){
            books = [];
        }else{
            books = JSON.parse(localStorage.getItem('books'));
        };

        return books;
    };

    static addBook(book){
        const books = Store.getBooks();
        books.push(book)
        localStorage.setItem('books', JSON.stringify(books));
    };

    static removeBook(isbn){
        const books = Store.getBooks();

        books.forEach((book, index) => {
            if(book.isbn === isbn){
                books.splice(index, 1);
            };
        });

        localStorage.setItem('books', JSON.stringify(books));
    };
};

// Event: Display event
document.addEventListener('DOMContentLoaded', UI.displayBook)

// Event: Add a book
document.querySelector('#book_form').addEventListener('submit', (e) => {
    e.preventDefault();

    //Get form Values
    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const isbn = document.querySelector('#isbn').value;

    //Validate
    if(title === '' || author === '' || isbn === ''){
        alert('Please provide the necessary field input.')
    }else{
        //Instantiate Book
        const book = new Book(title, author, isbn);

        //Add Book to UI
        UI.addBookToList(book);

        //Add Book to Store
        Store.addBook(book);

        //Success Alert
        alert('Successful! Added Book.');

        //Clear fields
        UI.clearFields();
    };


});

//Event: Remove a book
document.querySelector('#book_list').addEventListener('click', (e) => {
    //Remove Book to UI
    UI.removeBook(e.target);

    //Remove to Local Store
    Store.removeBook(e.target.parentElement.parentElement.previousElementSibling.textContent)
});

