"use client";
import "@styles/globals.css"
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const PromptCard = ({ post}) => {

  return (
    <>
      <Box className="article-card">
        <Box className="article_content">
          
        <Typography className="article_title">
          {post.prompt}
        </Typography>

        <Typography className="article_des">
          {post.tag}
        </Typography>
        </Box>
        <Box >
              <Typography className="article_owner"  >
                {post.creator.username} ({post.creator.email})
              </Typography>
            </Box>
      </Box>
    </>
  );
};

export default PromptCard;