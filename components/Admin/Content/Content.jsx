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
  const [showhide, setShowhide] = useState('');
  const handleshowhide = (event) => {
    const getuser = event.target.value;
    setShowhide(getuser);
  }

  return (
    <section className="room_body">
      <Typography className='room_title'>
        <BedOutlinedIcon className='room_logo' />  {type} Content
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12} >
            <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth>
                <NativeSelect
                  value={post.content_type}
                  id="content_type"
                  onChange={(e) => {
                    setPost({ ...post, content_type: e.target.value });
                    handleshowhide(e);
                  }}
                >
                  <option value=''>--Select Content Type--</option>
                  <option value='room'>Room</option>
                  <option value='meal'>Meal</option>
                  <option value='article'>Article</option>
                  <option value='service'>Service</option>
                </NativeSelect>
              </FormControl>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              value={post.title}
              onChange={(e) => setPost({ ...post, title: e.target.value })}
              id="title"
              name="title"
              label="Title"
              fullWidth
              autoComplete="family-name"
              variant="standard"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              value={post.overview}
              onChange={(e) => setPost({ ...post, overview: e.target.value })}
              id="overview"
              name="overview"
              label="Overview"
              fullWidth
              autoComplete="family-name"
              variant="standard"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="description"
              value={post.description}
              onChange={(e) => setPost({ ...post, description: e.target.value })}
              name="description"
              label="Description"
              fullWidth
              autoComplete="shipping address-line2"
              variant="standard"
            />
          </Grid>
          {/* when customer select room */}
          {
            showhide === 'room' && (
              <div className="grid-container">
                <TextField
                  id="room_type"
                  value={post.room_type}
                  onChange={(e) => setPost({ ...post, room_type: e.target.value })}
                  name="room_type"
                  label="Room Type"
                  fullWidth
                  autoComplete="shipping address-line2"
                  variant="standard"
                />
                <TextField
                  id="size"
                  value={post.size}
                  onChange={(e) => setPost({ ...post, size: e.target.value })}
                  name="size"
                  label="size"
                  fullWidth
                  autoComplete="shipping address-line2"
                  variant="standard"
                />
                <TextField
                  id="size"
                  value={post.size}
                  onChange={(e) => setPost({ ...post, size: e.target.value })}
                  name="size"
                  label="size"
                  fullWidth
                  autoComplete="shipping address-line2"
                  variant="standard"
                />
                <TextField
                  id="bed_description"
                  value={post.bed_description}
                  onChange={(e) => setPost({ ...post, bed_description: e.target.value })}
                  name="bed_description"
                  label="Bed Description"
                  fullWidth
                  autoComplete="shipping address-line2"
                  variant="standard"
                />
                <TextField
                  id="amenities"
                  value={post.amenities}
                  onChange={(e) => setPost({ ...post, amenities: e.target.value })}
                  name="amenities"
                  label="Amenities"
                  fullWidth
                  autoComplete="shipping address-line2"
                  variant="standard"
                />
                <TextField
                  id="number_guest"
                  value={post.number_guest}
                  onChange={(e) => setPost({ ...post, number_guest: e.target.value })}
                  name="number_guest"
                  label="Number of Guest"
                  fullWidth
                  variant="standard"
                />
              </div>
            )}
          {/* when customer select meal */}
          {
            showhide === 'meal' && (
              <div className="grid-container">
                <TextField
                  required
                  id="meal_type"
                  value={post.meal_type}
                  onChange={(e) => setPost({ ...post, meal_type: e.target.value })}
                  name="meal_type"
                  label="Meal Type"
                  fullWidth
                  autoComplete="shipping address-line2"
                  variant="standard"
                />
                <TextField
                  required
                  id="meal_plan"
                  value={post.meal_plan}
                  onChange={(e) => setPost({ ...post, meal_plan: e.target.value })}
                  name="meal_plan"
                  label="Meal Plan"
                  fullWidth
                  autoComplete="shipping address-line2"
                  variant="standard"
                />
                <TextField
                  required
                  id="portion_size"
                  value={post.portion_size}
                  onChange={(e) => setPost({ ...post, portion_size: e.target.value })}
                  name="portion_size"
                  label="Portion Size"
                  fullWidth
                  autoComplete="shipping address-line2"
                  variant="standard"
                />
                <TextField
                  required
                  id="meal_ingredients"
                  value={post.meal_ingredients}
                  onChange={(e) => setPost({ ...post, meal_ingredients: e.target.value })}
                  name="meal_ingredients"
                  label="Meal Ingredients"
                  fullWidth
                  variant="standard"
                />
              </div>
            )}

          {/* when customer select article */}
          {
            showhide === 'article' && (
              <div className="grid-container">
                <TextField
                  required
                  id="category"
                  value={post.category}
                  onChange={(e) => setPost({ ...post, category: e.target.value })}
                  name="category"
                  label="Category"
                  fullWidth
                  autoComplete="shipping address-line2"
                  variant="standard"
                />
              </div>
            )}

          {/* when customer select service */}
          {
            showhide === 'service' && (
              <div className="grid-container">
                <TextField
                  required
                  id="service_duration"
                  value={post.service_duration}
                  onChange={(e) => setPost({ ...post, service_duration: e.target.value })}
                  name="service_duration"
                  label="Service Duration"
                  fullWidth
                  autoComplete="shipping address-line2"
                  variant="standard"
                />
                <TextField
                  required
                  id="service_no_guest"
                  value={post.service_no_guest}
                  onChange={(e) => setPost({ ...post, service_no_guest: e.target.value })}
                  name="service_no_guest"
                  label="Number Of Guest"
                  fullWidth
                  autoComplete="shipping address-line2"
                  variant="standard"
                />
              </div>
            )}
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="standard_price"
              value={post.standard_price}
              onChange={(e) => setPost({ ...post, standard_price: e.target.value })}
              name="standard_price"
              label="Standard Price"
              fullWidth
              autoComplete="shipping address-line2"
              variant="standard"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="additional_charges"
              value={post.additional_charges}
              onChange={(e) => setPost({ ...post, additional_charges: e.target.value })}
              name="additional_charges"
              label="Additinal Charges"
              fullWidth
              autoComplete="shipping address-line2"
              variant="standard"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="status"
              value={post.status}
              onChange={(e) => setPost({ ...post, status: e.target.value })}
              name="status"
              label="Status"
              fullWidth
              autoComplete="shipping address-line2"
              variant="standard"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="terms_conditions"
              value={post.terms_conditions}
              onChange={(e) => setPost({ ...post, terms_conditions: e.target.value })}
              name="terms_conditions"
              label="Terms & Conditions"
              fullWidth
              autoComplete="shipping address-line2"
              variant="standard"
            />
          </Grid>
        </Grid>
        <Stack className='room_btn'>
          <Button className='room_addbtn'
            type='submit'
            disabled={submitting}
            endIcon={<SendIcon />}>
            {submitting ? `${type}ing...` : type}
          </Button>
          <Button className='room_cancelbtn' href='/'>Cancel</Button>
        </Stack>
      </form>
    </section>
  );
}
export default Form;