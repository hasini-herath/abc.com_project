"use client";

import "@styles/globals.css"
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';  

import { useState,useEffect } from "react";
import { signIn, signOut, useSession, getProviders } from 'next-auth/react';
import Button from '@mui/material/Button';


import Link from '@mui/material/Link';

const Nav = () => {
  const { data: session } = useSession();
  const [providers, setProviders] = useState(null);
  const [toggleDropdown, setToggleDropdown] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  useEffect(() => {
    (async () => {
      const res = await getProviders();
      setProviders(res);
    })();
  }, []);

  return (
    <div className='app-bar'>
    
      <div >
    <Box display="flex"
    justifyContent="space-between"
    width="100%"
    marginBottom="16px"
    paddingTop="3px">

<Link className="logo" href="/" >
      abc.com
      
    </Link>
  
      <Box className="test" >
      {session?.user ? (
          <Box >
             <Link href='/' className="nav-links"
                  onClick={handleClose}>Home
                </Link>
            

            
            <Link href='admin/content/list' className="nav-links"
                  onClick={handleClose}>Content
                </Link>
                <Link href='admin/dashboard' className="nav-links"
                  onClick={handleClose}>Dashboard
                </Link>
              
                <Link href='/' className="nav-links"
                onClick={handleClose}>About
                </Link>
                <Link href='/' className="nav-links"
                  onClick={handleClose}>Contact Us
                </Link>
           <Button className='signout_btn' onClick={signOut} >
              Sign Out
            </Button>
            
          </Box>

        ) : (
          <>

          
                <Link href='/' className="nav-links"
                  onClick={handleClose}>Home
                </Link>
                <Link href='/' className="nav-links"
                  onClick={handleClose}>Contact Us
                </Link>
                <Link href='/' className="nav-links"
                onClick={handleClose}>About
                </Link>
                <Link href='content/room' className="nav-links"
                  onClick={handleClose}>Room
                </Link>
                <Link href='/' className="nav-links"
                  onClick={handleClose}>Meal
                </Link>
                <Link href='/' className="nav-links"
                onClick={handleClose}>Service
                </Link>
                <Link href='/' className="nav-links"
                  onClick={handleClose}>Article
                </Link>
                <Link href='/' className="nav-links"
                  onClick={handleClose}>Booking
                </Link>
                <Button  href='/register' className='register_btn' >
                  Register
                </Button>
                <Button href='/login' className='signout_btn' >
                  Login
                </Button>
            
          </>
        )}
      </Box>

 
    
    </Box>  
    </div>
      </div>
    
  )
}

export default Nav;