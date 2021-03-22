import React from 'react';
import {useSelector} from 'react-redux';
import DeleteButton from '../Buttons/DeleteButton';
import ModifyButton from '../Buttons/ModifyButton';

const Main = () => {

    const books = useSelector(state => state.books);

    return ( 
        <div>
            {books.map(book=>{
                return (
                    <div key = {book.id} className = 'book-container'>
                        <div className = 'book-list'>
                            <div className = 'book-button'>
                                <ModifyButton bookName = {book.name} book = {book}/>
                            </div>    
                            
                            <div className = "book-detail">
                                <span><em>price</em>: CAD${book.price}  <em>category</em>: {book.category}</span>
                            </div>
                        </div> 

                        <DeleteButton book = {book}/>
                    </div>
                    
                )
            })}
        </div>)
    ;
}
 
export default Main;
