"use client";

import React, { useEffect, useState, useMemo } from 'react';
//import './imageuploader.scss';
import axios from 'axios';
import {
  Modal,
  Box,
  FormControlLabel,
  Checkbox,
  Button,
  Radio,
  RadioGroup,
  FormControl,
  FormLabel,
} from '@mui/material';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import SearchBar from '@components/SearchBar';
// import EditImage from '../editImage/EditImage';

const imageTypeRegex = /image\/(png|jpg|jpeg)/gm;
export default function ImageUploader({
  setSelectedFiles,
  fetchedImages,
  locale,
}) {
  const [loadImages, setloadImages] = useState([]);
  const [searchedImage, setSearchedImage] = useState([]);
  const [imageFiles, setImageFiles] = useState([]);
  const [editImage, setEditImage] = useState([]);
  const [selectedImages, setSelectedImages] = useState([]);
  const [open, setOpen] = React.useState(false);
  const [uploading, setUploading] = React.useState(false);
  const handleMediaOpen = () => {
    setSearchedImage(loadImages);
    setOpen(true);
  };
  const [editImageOpen, setEditImageOpen] = useState(false);
  const handleMediaClose = () => setOpen(false);
  const [error, setError] = useState([]);
  //console.log('fetchedImages', searchedImage);
  // console.log('imageFiles top', imageFiles);
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '90%',
    height: '60vh',
    maxWidth: 1100,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
  };

  useEffect(() => {
    !locale ? getMediaFiels() : null;
  }, [localStorage.getItem('userId')]);

  useEffect(() => {
    !editImageOpen || open ? getMediaFiels() : null;
  }, [editImageOpen, open]);

  const getMediaFiels = () => {
    axios.get(`/api/image`).then((res) => {
      if (res.data.status === 200) {
        setloadImages(res.data.mediafiles);
        //console.log(res.data.mediafiles);
        setSearchedImage(res.data.mediafiles);
      } else if (res.data.status === 404) {
        //console.log(res.message, 'message');
      }
    });
  };

  const changeHandler = (e) => {
    //console.log('changeHandler', e);
    const validImageFiles = [];
    const { files } = e.target;
    for (let i = 0; i < files.length; i++) {
      const seleFile = files[i];
      if (seleFile.type.match(imageTypeRegex)) {
        validImageFiles.push(seleFile);
        //console.log(validImageFiles);
      }
    }
    if (validImageFiles.length) {
      setImageFiles(validImageFiles);
      return;
    }
    alert('Selected images are not of valid type!');
  };

  useEffect(() => {
    const images = [];
    const fileReaders = [];
    let isCancel = false;

    if (imageFiles.length) {
      imageFiles.forEach((file) => {
        const fileReader = new FileReader();
        fileReaders.push(fileReader);
        fileReader.onload = (e) => {
          const { result } = e.target;
          if (result) {
            images.push(result);
          }
          if (images.length === imageFiles.length && !isCancel) {
            uploadedFiles(images);
          }
        };
        fileReader.readAsDataURL(file);
      });
    }

    return () => {
      isCancel = true;
      fileReaders.forEach((fileReader) => {
        if (fileReader.readyState === FileReader.LOADING) {
          fileReader.abort();
        }
      });
    };
  }, [imageFiles]);

  // useEffect(() => {
  //   console.log(searchedImage);
  // }, [searchedImage]);

  const updateImageArrays = (newImages) => {
    setloadImages([...loadImages, ...newImages]);
    setSearchedImage([...searchedImage, ...newImages]);
  };

  const uploadedFiles = (value) => {
    //console.log('file uploade', value);
    setUploading(true);
    const data = { file: value };
    axios.post(`/api/images`, data).then((res) => {
      if (res.data.status === 200) {
        //console.log(res.data);
        setUploading(false);
        !locale
          ? updateImageArrays(res.data.imgIds)
          : setSelectedFiles(res.data.imgIds.map((x) => x.file_path));
        setError([]);
      } else if (res.data.status === 422) {
        setUploading(false);
        setError(res.data.errors, '422');
      } else {
        setUploading(false);
        //console.log(res.data.errors, 'error');
      }
    });
  };
  const searchImageHandler = (images) => {
    //console.log(images);
    setSearchedImage(images);
  };
  const handleCheckboxChange = (e) => {
    //console.log(e.target.value);
    setSelectedImages([e.target.value]);
    //console.log(selectedImages);
  };

  const insertMedia = () => {
    setSelectedFiles(selectedImages);
    handleMediaClose();
  };

  const editImageHandler = (item) => {
   // console.log('Double CLick', item);
    setEditImageOpen(true);
    setEditImage(item);
    // return <EditImage image={item} modalOpen={true} />;
  };

  const refreshPage = () => {
    //console.log('Refresh');
    setEditImageOpen(false);
    getMediaFiels();
    // return <EditImage image={item} modalOpen={true} />;
  };

  const handleClose = () => {
    setUploading(false);
  };
  return (
    <>
      {locale && (
        <div className="action-row" style={{ marginBottom: 20 }}>
          <input
            type="file"
            id="file"
            onChange={changeHandler}
            accept="image/png, image/jpg, image/jpeg"
            multiple
          />
        </div>
      )}
      {!locale && (
        <div className="image-uploader_wrap">
          <Button
            onClick={handleMediaOpen}
            className="add-media-btn"
            id="add-media"
          >
            Add Media
          </Button>

          <Modal
            open={open}
            onClose={handleMediaClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <div  style={{ marginBottom: 20 }}>
                <input
                  type="file"
                  open={true}
                  id="file"
                  onChange={changeHandler}
                  accept="image/png, image/jpg, image/jpeg"
                  multiple
                />
              </div>

              <div className="media-list">
                <FormControl>
                  <SearchBar
                    searchImageHandler={searchImageHandler}
                    loadImages={loadImages}
                  />

                  <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                    defaultValue={fetchedImages?.[0]}
                  >
                    {searchedImage?.map((item, index) => {
                      return (
                        <div key={index} className="media-icon">
                          <div className="media-thumbnail">
                            <img
                              onDoubleClick={() => editImageHandler(item)}
                              src={item.file_path}
                              alt=""
                            />
                          </div>
                          <FormControlLabel
                            value={item.id}
                            control={
                              <Radio
                                value={item.file_path}
                                onChange={(e) => handleCheckboxChange(e)}
                              />
                            }
                          />
                        </div>
                      );
                    })}
                  </RadioGroup>
                </FormControl>
              </div>

              <div className="action-row" style={{ textAlign: 'right' }}>
                <Button
                  variant={'outlined'}
                  className="user__theme-btn"
                  sx={{ marginY: 2 }}
                  onClick={insertMedia}
                >
                  Insert
                </Button>
              </div>
            </Box>
          </Modal>

          {editImageOpen && (
            <EditImage image={editImage} setEditImageOpen={setEditImageOpen} />
          )}
        </div>
      )}
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 200 }}
        open={uploading}
        onClick={handleClose}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </>
  );
}
