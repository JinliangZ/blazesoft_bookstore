import React from 'react';
import Button from '@material-ui/core/Button';
import {useDispatch} from 'react-redux';
import { deleteBook } from '../../redux/ducks/book';

const DeleteButton = (props) => {
    const dispatch = useDispatch();

    const handleDelete = () =>{
        dispatch(deleteBook(props.book.id))
    }

    return ( 
        <div className = "delete-button">
            <Button variant="contained" color="secondary" onClick= {handleDelete}>
                DELETE
            </Button>
                
            
        </div>
     );
}
 
export default DeleteButton;