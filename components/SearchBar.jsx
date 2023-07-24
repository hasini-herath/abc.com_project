"use client";
import { Container, InputAdornment, TextField } from '@mui/material';
import { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';

export default function SearchBar({ searchImageHandler, loadImages }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (event) => {
    setSearchTerm(event.target.value);

    //console.log(searchTerm);
    let udatedlist = loadImages;
    udatedlist = udatedlist.filter((item) => {
     // console.log();
      return (
        item.file_name
          .toLowerCase()
          .indexOf(event.target.value.toLowerCase()) !== -1
      );
    });
    searchImageHandler(udatedlist);
  };

  return (
    <Container maxWidth="md" sx={{ mt: 5, mb: 5 }}>
      <TextField
        id="search"
        type="search"
        label="Search"
        value={searchTerm}
        onChange={handleChange}
        sx={{ width: 600 }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
    </Container>
  );
}
