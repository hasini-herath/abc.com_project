"use client";
import "@styles/globals.css"
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import service1 from '@public/assets/images/service1.jpg'
import service2 from '@public/assets/images/room1.jpg'
import Image from 'next/image';
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

const RoomCard = ({ post}) => {
  const router = useRouter();
  const { data: session } = useSession();
  const handleButtonClick = () => {
    console.log(post);

    if (post._id === session?.user.id) return router.push("/content/contentdetails/room");
    console.log("post");
    router.push(`/content/contentdetails/room/${post._id}?name=${post}`);
  };
  
  return (
    <>
      <Box className="article_content">
       
          <Image className="hero1"
      src={service2}
      alt='user_image'
    />  
 
        
        
        <Typography onClick={handleButtonClick} >
          {post.title}
        </Typography>

        <Typography >
          {post.overview}
        </Typography>
        <Typography >
          {post.description}
        </Typography>
        <Typography >
          {post.standard_price}
          
        </Typography>
        <Typography >
          {post.additional_charges}
          
        </Typography>
        <Typography >
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