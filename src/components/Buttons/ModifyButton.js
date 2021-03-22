import React from 'react';
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';
import ModifyBook from '../Forms/ModifyBook';


const ModifyButton = (props) => {
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  
    
  
  
    const body = (
      <div className = 'modal'>
        <h2 id="simple-modal-title">Modify A Book</h2>
        
  
        <ModifyBook book = {props.book }/>
        
        <div className = 'modal-button'>
          <Button variant="outlined" color="primary" size="small" onClick={handleClose}>
            close
          </Button>
        </div>
      </div>
    );
  
    return ( 
      <div>
        <button variant="contained"  onClick={handleOpen}>
            <h4>    Book Name: {props.bookName} </h4>
        </button>
  
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="simple-modal-title"      
        >
          {body}
        </Modal>
      </div>
     );
}
 
export default ModifyButton;