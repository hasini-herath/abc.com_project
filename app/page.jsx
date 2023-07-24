"use client";
import "@styles/globals.css"
import Feed from "@components/Feed";
import RoomContent from "@components/RoomContent";
import ArticleContent from "@components/ArticleContent";
import MealContent from "@components/MealContent";
import ServiceContent from "@components/ServiceContent";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import img from '@public/assets/images/alla.jpg'
import Image from 'next/image';

import Article from '@public/assets/images/article.jpg'

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


    </Box>
   <RoomContent/>
<ServiceContent/>
<MealContent/>
 <ArticleContent/>
  <Image className="hero2"
          src={img}
          alt='user_image'
        /> 

  </>
  )
}
