"use client";
import React from 'react'
import img from '@public/assets/images/alla.jpg'
import Box from '@mui/material/Box';

import Typography from '@mui/material/Typography';
import Image from 'next/image';
const RoomContent = () => {
  return (
    <div>
    <Box>
    <Typography className="home_content_title" >
    abc.com Meals
    </Typography>
    <Image className="hero1"
      src={img}
      alt='user_image'
      
    />
    <Image className="hero1"
      src={img}
      alt='user_image'
    />
  </Box>
    </div>
  )
}

export default RoomContent