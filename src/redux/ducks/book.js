//actions
const ADD_BOOK = "ADD_BOOK";
const DELETE_BOOK = "DELETE_BOOK";
const MODIFY_BOOK = "MODIFY_BOOK"


//reducer
const initState = {
    books: [
        {id: '1', name: 'Squirtle Laid an Egg', price: 59, category: 'Science', descripition: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. '},
        {id: '2', name: 'Marked for furture', price: 49,category: 'Math', descripition: 'Lorem ipsum, enim repellendus ipsam sunt autem at odit dolorum.'},
        {id: '3', name: 'a Helix Fossil was Found',price: 39, category: 'Technique', descripition: 'Consequatur voluptate laborum perferendis,voluptatum suscipit iste harum cum magni itaque animi laudantium fugiat.'}
    ]
};

export default function bookReducer(state = initState, action ){
    
    switch (action.type){
        case DELETE_BOOK :
            let deleteBooks = state.books.filter(book => action.book_id !==book.id);
            return {
                ...state,
                books: deleteBooks
            }
        case ADD_BOOK :       
            return {
                ...state,
                books: [...state.books, action.newBook]
            };
        case MODIFY_BOOK:
            let newBooks = state.books.map(book =>{
                if(action.newBook.id === book.id ){
                    const modifiedBook = Object.assign(book, action.newBook);
                }
                return book
            });
            return {
                ...state,
                books: newBooks
            }

        default: 
            return state;
    }

};

//Action Creators
export const addBook = (book) =>{
    return {
        type : ADD_BOOK,
        newBook : book
    }
};

export const deleteBook = (id) =>{
    return {
        type : DELETE_BOOK,
        book_id:id
    }
};

export const modifyBook = (book) =>{
    return {
        type: MODIFY_BOOK,
        newBook: book
        
    }
};