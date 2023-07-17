"use client";
import React from 'react'
import service1 from '@public/assets/images/service1.jpg'
import service2 from '@public/assets/images/service2.jpg'
import Box from '@mui/material/Box';

import Typography from '@mui/material/Typography';
import Image from 'next/image';
const RoomContent = () => {
  return (
    <div>
           <Box>
    <Typography className="home_content_title" >
      abc.com Services
    </Typography>
    <Image className="hero1"
      src={service1}
      alt='user_image'
    />
    <Image className="hero1"
      src={service2}
      alt='user_image'
    />
       <Image className="hero1"
      src={service1}
      alt='user_image'
    />
    <Image className="hero1"
      src={service2}
      alt='user_image'
    />
  </Box>
    </div>
  )
}

export default RoomContent