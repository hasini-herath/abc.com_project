import React from 'react';
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Button,
} from '@mui/material';
function DialogBox({ open, dialog, setOpenDialogBox }) {
  const { title, context, type, handler } = dialog;
  //console.log('type : ', type);
  const handleClose = () => {
    setOpenDialogBox(false);
  };
  return (
    <div>
      {' '}
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {context}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
          {type !== 'INFO' && <Button onClick={handler}>{type}</Button>}
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default DialogBox;
