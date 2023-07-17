"use client";

import React, { useState } from "react";
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import NativeSelect from '@mui/material/NativeSelect';
import Stack from '@mui/material/Stack';
import BedOutlinedIcon from '@mui/icons-material/BedOutlined';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';


const Form = ({ post, setPost, type, handleSubmit, submitting }) => {

  return (
    <section className="sub_form">
 
      <Typography className='room_title'>
       Edit Home Page
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>

        <Grid item xs={12}>
            <TextField
              required
              value={post.main_title}
              onChange={(e) => setPost({ ...post, main_title: e.target.value })}
              id="main_title"
              name="main_title"
              label="Main Title"
              fullWidth
              multiline
              rows={4}
              autoComplete="family-name"
             
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              value={post.main_description}
              onChange={(e) => setPost({ ...post, main_description: e.target.value })}
              id="main_description"
              name="main_description"
              label="Main Description"
              fullWidth
              multiline
              rows={4}
              autoComplete="family-name"
             
            />
          </Grid>

          <Grid item xs={12} >
            <TextField
              required
              id="sub_one"
              value={post.sub_one}
              onChange={(e) => setPost({ ...post, sub_one: e.target.value })}
              name="sub_one"
              label="Sub Title One"
              fullWidth
              autoComplete="shipping address-line2"
              size="small"
            />
          </Grid>

          <Grid item xs={12} >
            <TextField
              required
              id="sub_one_des"
              value={post.sub_one_des}
              onChange={(e) => setPost({ ...post, sub_one_des: e.target.value })}
              name="sub_one_des"
              label="Sub Title Description One"
              fullWidth
              autoComplete="shipping address-line2"
              size="small"
            />
          </Grid>

          <Grid item xs={12} >
            <TextField
              required
              id="sub_two"
              value={post.sub_two}
              onChange={(e) => setPost({ ...post, sub_two: e.target.value })}
              name="sub_two"
              label="Sub Title Two"
              fullWidth
              autoComplete="shipping address-line2"
              size="small"
            />
          </Grid>

          <Grid item xs={12} >
            <TextField
              required
              id="sub_two_des"
              value={post.sub_two_des}
              onChange={(e) => setPost({ ...post, sub_two_des: e.target.value })}
              name="sub_two_des"
              label="Sub Title Description One"
              fullWidth
              autoComplete="shipping address-line2"
              size="small"
            />
          </Grid>
        </Grid>


       
        <Stack className='room_btn'>
          <Button className='sub_addbtn'
            type='submit'
            disabled={submitting}
            endIcon={<SendIcon />}>
            {submitting ? `${type}ing...` : type}
          </Button>

   
        </Stack>
      </form>
    </section>
  );
}

export default Form;