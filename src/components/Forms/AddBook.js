import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import { addBook } from '../../redux/ducks/book';


const AddBook = () => {
    const dispatch = useDispatch();
    const [newBook, setNewBook] = useState({});
    const [msg, setMsg] = useState('');
    const handleChange = (e) =>{
        setNewBook({
            ...newBook,
            [e.target.id]:e.target.value,
            id: Math.random().toString()
        })
    };

    const handleSubmit = (e) =>{
        e.preventDefault();        
        dispatch(addBook(newBook));
        setMsg('THE BOOK IS ALREADY ADDED SUCCESSFULLY!');
    };


    return ( 
        <form onSubmit ={handleSubmit}>
            <h3>{msg}</h3>
            <div className="input-field">
                <label htmlFor = 'name'>Book Name:</label>
                <input type="text" id = 'name' placeholder= "book name"  onChange= {handleChange} required/>
            </div>

            <div className="input-field">
                <label htmlFor = 'price'>Price:</label>
                <input type="number" id = 'price' placeholder= "book price" onChange= {handleChange} required/>
            </div>

            <div className="input-field">
                <label htmlFor = 'category'>Category:</label>
                <input type="text" id = 'category' placeholder= "book category" onChange= {handleChange} required/>
            </div>

            <div className="input-field">
                <label htmlFor = 'descripition'>Descripition:</label>
                <textarea id= 'descripition' className="materialize-textarea" onChange= {handleChange} rows="5" cols="33" placeholder= "book descripition"></textarea>
            </div>

            <div className="input-field">
                
                <button className = "btn">
                    submit
                </button>
                
            </div>
        </form>
     );
}
 
export default AddBook;