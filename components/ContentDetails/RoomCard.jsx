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
       
          <Image className="content_image"
      src={service2}
      alt='user_image'
    />  
 
        <Box className="content_background">

        <Typography onClick={handleButtonClick} className="content_title" >
          {post.title}
        </Typography>
        <Typography className="content_sub_title" >
          Overview
        </Typography>
        <Typography className="content_details" >
          {post.overview}
        </Typography>
        <Typography className="content_sub_title" >
          Description
        </Typography>
        <Typography className="content_details">
          {post.description}
        </Typography>
        <Typography className="content_sub_title" >
          Standard Price
        </Typography>
        <Typography className="content_details" >
         
          {post.standard_price}
          
        </Typography>
        <Typography className="content_sub_title" >
          Additional Charges
        </Typography>
        <Typography className="content_details" >
          {post.additional_charges}          
        </Typography>
        <Typography className="content_sub_title" >
          Terms & Conditions
        </Typography>
        <Typography className="content_details">
          {post.terms_conditions}
          
        </Typography>
        
        <Typography className="content_status">
          {post.status}          
        </Typography>
        </Box>
        </Box>
     
     
    </>
  );
};

export default RoomCard;