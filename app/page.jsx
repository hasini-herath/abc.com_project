"use client";
import "@styles/globals.css"
import Feed from "@components/Feed";
import RoomContent from "@components/HomeContent/RoomContent";
import ArticleContent from "@components/HomeContent/ArticleContent";
import MealContent from "@components/HomeContent/MealContent";
import ServiceContent from "@components/HomeContent/ServiceContent";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import img from '@public/assets/images/alla.jpg'
import Image from 'next/image';
import React from "react";

export default function Home() {
  return (
    <>
      <Box>
        <main className="main">
          <Image className="main_image_top"
            src={img}
            alt='user_image'
          />
          <div className='main_image-text'>
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
      <RoomContent />
      <ServiceContent />
      <MealContent />
      <ArticleContent />
      <Image className="main_image_bottom"
        src={img}
        alt='user_image'
      />
    </>
  )
}