"use client";
import "@styles/globals.css"
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import service1 from '@public/assets/images/service1.jpg'
import service2 from '@public/assets/images/service2.jpg'
import Image from 'next/image';
import { useRouter } from "next/navigation";

const ServiceCard = ({ post}) => {
  const router = useRouter();

  const handleButtonClick = () => {
    router.push("/login");
  };

  
  return (
    <>
      <Box >
       
          <Image className="hero1"
      src={service2}
      alt='user_image'
    />  
   <Box className="article_content">
        <Typography onClick={handleButtonClick} className="article_title">
          {post.title}
        </Typography>

        <Typography className="article_des">
          {post.overview}
        </Typography>
        </Box>
     
      </Box>
    </>
  );
};

export default ServiceCard;