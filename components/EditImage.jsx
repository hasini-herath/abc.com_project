import React, { useEffect, useState, useRef } from 'react';
//import '../galaryImageUploader/galaryImageuploader.scss';
import axios from 'axios';
import { Modal, Box, Button } from '@mui/material';
import DialogBox from '@components/DialogBox';
export default function EditImage({ image, setEditImageOpen }) {
  const dialogTypes = {
    Info: 'INFO',
    Close: 'CLOSE',
    Delete: 'DELETE',
    Save: 'SAVE',
  };
  const [open, setOpen] = useState(true);
  const [openDialogBox, setOpenDialogBox] = useState(false);
  const [newImageName, setNewImageName] = useState(image.file_name);
  const [error, setError] = useState([]);
  const [dialog, setDialog] = useState({
    title: 'Default Title',
    context: 'Pass your msg here',
    type: dialogTypes.Info,
    handler: () => {},
  });

  //console.log('Open Edit Image Modal', image);

  const handleMediaClose = () => {
    //console.log(open);
    setEditImageOpen(false);
    setOpen(false);
  };

  const getConfirmation = (type, handler) => {
    setDialog({
      title: 'Delete request',
      context: `Do you want to ${type.toLowerCase()} ?`,
      type: type,
      handler: handler,
    });
    setOpenDialogBox(true);
  };

  const handleImageDelete = () => {
    axios.delete(`/api/images/${image.id}`).then((res) => {
      //console.log(res);
      handleMediaClose();
      if (res.data.success) {
        //console.log('--------------POST Success-----------------------------');
        setDialog({
          title: 'Request Succeeded',
          context: 'Image is deleted successfully!',
          type: dialogTypes.Info,
        });
        setOpenDialogBox(true);
        setError([]);
      } else if (res.data.status === 422) {
        setError(res.data.errors, '422');
      } else {
        //console.log(res.data.errors, 'error');
        setDialog({
          title: 'Request Failed',
          context: 'Sorry somthing went wrong!',
          type: dialogTypes.Info,
        });
        setOpenDialogBox(true);
      }
    });
  };

  const handleImageNameEdit = () => {
    //console.log(`-----------------${newImageName}-----------------`);
    image.file_name;

    const data = { file_name: newImageName };
    axios.put(`/api/images/${image.id}`, data).then((res) => {
      //console.log(res);
      handleMediaClose();
      if (res.data.success) {
       // console.log('--------------POST Success-----------------------------');
        setDialog({
          title: 'Request Succeeded',
          context: 'Name is saved successfully!',
          type: dialogTypes.Info,
        });
        setOpenDialogBox(true);
        setError([]);
      } else if (res.data.status === 422) {
        setError(res.data.errors, '422');
      } else {
        //console.log(res.data.errors, 'error');
        setDialog({
          title: 'Request Failed',
          context: 'Sorry somthing went wrong!',
          type: dialogTypes.Info,
        });
        setOpenDialogBox(true);
      }
    });
  };

  const handleChange = (event) => {
    setNewImageName(event.target.value);
  };
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '90%',
    height: '90vh',
    maxWidth: 1100,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 8,
  };
  return (
    <>
      <Modal
        open={open}
        onClose={() => handleMediaClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="media-image">
            {/* <div className="media-thumbnail"> */}
            <label>
              <img src={image.file_path} alt="" />
            </label>
            {/* </div> */}
          </div>
          <div className="flex"></div>
          <Button onClick={handleMediaClose}>close</Button>

          <label htmlFor="img-edit">
            <input type="text" value={newImageName} onChange={handleChange} />
          </label>
          <Button
            id="img-edit"
            onClick={() =>
              getConfirmation(dialogTypes.Save, handleImageNameEdit)
            }
          >
            Save
          </Button>
          <Button
            id="img-del"
            onClick={() =>
              getConfirmation(dialogTypes.Delete, handleImageDelete)
            }
          >
            Delete
          </Button>
        </Box>
      </Modal>
      {openDialogBox && (
        <DialogBox
          open={openDialogBox}
          setOpenDialogBox={setOpenDialogBox}
          dialog={dialog}
        />
      )}
    </>
  );
}
