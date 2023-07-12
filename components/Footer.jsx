
"use client";

import "@styles/globals.css"
import React from 'react'
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';  
import Box from '@mui/material/Box';

const Footer = () => {
  return (
    <>
    <Box className='footer'>
   
    <Box>
        <Typography className="footer_title">Guide.com</Typography>
        <Typography>Choose your favourite places</Typography>
    </Box>
  
    <Box className='bottom'>


    <Box className="bottom_content">
        <Typography className="typography">Project</Typography>
        <Link  className="bottom_link" href='/'>Changelog</Link>
        <Link  className="bottom_link" href='/'>Status</Link>
        <Link  className="bottom_link" href='/'>License</Link>
        <Link  className="bottom_link" href='/'>All Versions</Link>

    </Box>
    <Box className="bottom_content">
        <Typography className="typography">Community</Typography>
        <Link  className="bottom_link" href='/'>GitHub</Link>
        <Link  className="bottom_link" href='/'>Issues</Link>
        <Link  className="bottom_link" href='/'>Project</Link>
        <Link  className="bottom_link" href='/'>Twitter</Link>

    </Box>
    <Box className="bottom_content">
        <Typography className="typography">Help</Typography>
        <Link  className="bottom_link" href='/'>Support</Link>
        <Link  className="bottom_link" href='/'>Troubleshooting</Link>
        <Link  className="bottom_link" href='/'>Contact Us</Link>
        
    </Box>
    </Box>
    </Box>

 <Box className="footer_end">
 <Typography>@my Dream Place 2022</Typography>
 </Box>
 </>
  )
}

export default Footer