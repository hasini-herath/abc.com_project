"use client";
import "@styles/globals.css"
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import meal from '@public/assets/images/alla.jpg'
import Image from 'next/image';
import { useRouter } from "next/navigation";

const MealCard = ({ post}) => {
  const router = useRouter();

  const handleButtonClick = () => {
    router.push("/login");
  };

  
  return (
    <>
      <Box >
       
          <Image className="hero1"
      src={meal}
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

export default MealCard;