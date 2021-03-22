import React from 'react';
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';
import AddBook from '../Forms/AddBook';

const AddButton = () => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

 

  const body = (
    <div className = 'modal'>
      <h2 id="simple-modal-title">ADD A NEW BOOK</h2>
     
      <AddBook />
      
      <div className = 'modal-button'>
        <Button variant="outlined" color="primary" size="small" onClick={handleClose}>
          close
        </Button>
       
      </div>
    </div>
  );

  return ( 
    <div>
      <Button variant="contained" color="primary" onClick={handleOpen}>
        ADD A NEW BOOK
      </Button>

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
 
export default AddButton;
 
