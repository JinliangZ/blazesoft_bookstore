import React, {useState} from 'react';
import { useDispatch} from 'react-redux';
import { modifyBook } from '../../redux/ducks/book';


const ModifyBook = (props) => {
    const dispatch = useDispatch();
    const [msg, setMsg] = useState('');
    const [newBook, setNewBook] = useState({});


    const handleChange = (e)=>{
        setNewBook({
            ...newBook,
            [e.target.id]:e.target.value,
            id: props.book.id
        });
    };

       
    const handleSubmit = (e) =>{
        e.preventDefault();        
        dispatch(modifyBook(newBook));
        setMsg('THE BOOK IS MODIFIED SUCCESSFULLY!');
    };


    return ( 
        <form onSubmit={handleSubmit}>
            <h3>{msg}</h3>
            <div className="input-field">
                <label htmlFor = 'name'>Book Name:</label>
                <p>Before: {props.book.name}</p>
                <p>After: </p>
                <input type="text" id = 'name' placeholder= "book name" onChange= {handleChange} required/>
            </div>

            <div className="input-field">
                <label htmlFor = 'price'>Price:</label>
                <p>Before: CAD${props.book.price}</p>
                <p>After: </p>
                <input type="number" id = 'price' placeholder= "book price" onChange= {handleChange} />
            </div>

            <div className="input-field">
                <label htmlFor = 'category'>Category:</label>
                <p>Before: {props.book.category}</p>
                <p>After: </p>
                <input type="text" id = 'category' placeholder= "book category" onChange= {handleChange} />
            </div>

            <div className="input-field">
                <label htmlFor = 'descripition'>Descripition:</label>
                <p>Before: {props.book.descripition}</p>
                <p>After: </p>
                <textarea id= 'descripition' className="materialize-textarea"  rows="5" cols="33" placeholder= "book descripition" onChange= {handleChange} ></textarea>
            </div>

            <div className="input-field">
                <button className = "btn" >
                    submit
                </button>
            </div>
        </form>
     );
}
 
export default ModifyBook;