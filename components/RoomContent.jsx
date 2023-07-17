"use client";
import React from 'react'
import Room1 from '@public/assets/images/Room1.jpg'
import Room2 from '@public/assets/images/Room2.jpg'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
const RoomContent = () => {
  return (
    <div>
         <Box>
    <Typography className="home_content_title" >
    abc.com Rooms
    </Typography>
    <Image className="hero1"
      src={Room1}
      alt='user_image'
    />
    <Image className="hero1"
      src={Room2}
      alt='user_image'
    />
     <Image className="hero1"
      src={Room1}
      alt='user_image'
    />
    <Image className="hero1"
      src={Room2}
      alt='user_image'
    />
  </Box>
    </div>
  )
}

export default RoomContent