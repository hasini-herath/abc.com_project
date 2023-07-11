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
            <Link href="/" className="nav-links">
               Test   
            </Link>

            
            <Link href='/room/list' className="nav-links"
                  onClick={handleClose}>RoomList
                </Link>
                <Link href='/room/new' className="nav-links"
                  onClick={handleClose}>Room
                </Link>
                <Link href='/' className="nav-links"
                onClick={handleClose}>Test
                </Link>
                <Link href='/' className="nav-links"
                onClick={handleClose}>Test
                </Link>
                <Link href='/' className="nav-links"
                   onClick={handleClose}>Test
                </Link>
           <Button className='signout_btn' onClick={signOut} >
              Sign Out
            </Button>
            
          </Box>

        ) : (
          <>
              {providers &&
              Object.values(providers).map((provider) => (
                <Button 
                  key={provider.name}
                  onClick={() => {
                    signIn(provider.id);
                  }}
                  className='black_btn'
                >
                  Sign in
                </Button>
              ))}
          </>
        )}
      </Box>

      <div >
      {session?.user ? (
          <Box >
        
      
          
          
         
          </Box>
        ) : (
          <>
              {providers &&
              Object.values(providers).map((provider) => (
                <Button 
                  key={provider.name}
                  onClick={() => {
                    signIn(provider.id);
                  }}
                 
                >
                  Sign in
                </Button>
              ))}
          </>
        )}
        
      </div>
      
    
    </Box>  
    </div>
      </div>
    
  )
}

export default Nav;