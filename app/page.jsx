"use client";
import "@styles/globals.css"
import Feed from "@components/Feed";
import ImageUploader from "@components/ImageUploader";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import img from '@public/assets/images/alla.jpg'
import Image from 'next/image';
import Room1 from '@public/assets/images/Room1.jpg'
import Room2 from '@public/assets/images/Room2.jpg'
import Article from '@public/assets/images/article.jpg'
import service1 from '@public/assets/images/service1.jpg'
import service2 from '@public/assets/images/service2.jpg'
import React from "react";
export default function Home() {


  return (
    <>


    <Box>

    <main className="main">
   
    <Image className="hero"
          src={img}
          alt='user_image'
        /> 

       


<div className='hero-text'>
        <Typography className="maintitle" >
    Discover & Share
      </Typography>
              <Typography className="subtitle" >
      AI-Powered Prompts
         </Typography>
        
         <Typography className="description">
    <Box >Promptopia is an open-source AI prompting tool for modern world to
      discover, create and share creative prompts</Box> 
    </Typography>
    </div>
    </main>
<Feed />

<ImageUploader/>
    </Box>
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
  <Box>
    <Typography className="home_content_title" >
    abc.com Articles
    </Typography>
    <Image className="hero1"
      src={Article}
      alt='user_image'
    />
    <Image className="hero1"
      src={Article}
      alt='user_image'
    />
  </Box>
  <Image className="hero2"
          src={img}
          alt='user_image'
        /> 

  </>
  )
}
