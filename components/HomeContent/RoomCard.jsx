"use client";
import "@styles/globals.css"
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import service1 from '@public/assets/images/service1.jpg'
import service2 from '@public/assets/images/room1.jpg'
import Image from 'next/image';
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import Room from "@models/room";
const RoomCard = ({ post}) => {
  const router = useRouter();
  const { data: session } = useSession();
  const handleButtonClick = () => {
    console.log(post);

    if (post._id === session?.user.id) return router.push("/profile");
    console.log("post");
    router.push(`/profile/${post._id}?name=${post}`);
  };
  
  return (
    <>
      <Box className="article_content">
       
          <Image className="hero1"
      src={service2}
      alt='user_image'
    />  
 
        
        
        <Typography onClick={handleButtonClick} className="article_title">
          {post.title}aa
        </Typography>

        <Typography className="article_des">
          {post.overview}ee
        </Typography>
        <Typography className="article_des">
          {post.description}dd
        </Typography>
        <Typography className="article_des">
          {post.standard_price}
          
        </Typography>
        <Typography className="article_des">
          {post.additional_charges}
          
        </Typography>
        <Typography className="article_des">
          {post.terms_conditions}oo
          
        </Typography>
        <Typography className="article_des">
          {post.room_type}          
        </Typography>
        </Box>
     
     
    </>
  );
};

export default RoomCard;