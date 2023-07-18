"use client";

import React, { useState, useEffect } from "react";
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import GoogleIcon from '@mui/icons-material/Google';
import { signIn, useSession, getProviders } from 'next-auth/react';
import Home from "@app/page";

const SignIn = ({ type, post, setPost, submitting, handleSubmit }) => {

  const { data: session } = useSession();
  const [providers, setProviders] = useState(null);
 
 
  useEffect(() => {
    (async () => {
      const res = await getProviders();
      setProviders(res);
    })();
  }, []);

  return (

<Typography >

{session?.user ? (
<>
<Home/>
</>


) : (
    
  <>
<Typography className="signup_form">
<Typography  className="signup_title">
         Sign In
      </Typography>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={post.email}
            onChange={(e) => setPost({ ...post, email: e.target.value })}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={post.password}
            onChange={(e) => setPost({ ...post, password: e.target.value })}
            required
          />
        </div>
        <button
          type="submit"
          disabled={submitting}
          className="px-5 py-1.5 text-sm bg-primary-orange rounded-full text-white"
        >
          {submitting ? `${type}ing...` : type}
          
        </button>
      </form>
      
<Typography className="center_title">
      
      ---- or use one of these options ----
      </Typography>

      <div className="google_login">
          <GoogleIcon className='google_logo' />

        {providers &&
              Object.values(providers).map((provider) => (
                <Button className='google_title'
                
                key={provider.name}
                onClick={() => {
                  signIn(provider.id);
                }}
                
              >
             Continue with google
           
              </Button>
              ))}</div>
              <Typography className="center_title">
      
      Don't have an account? <Link>SignUp</Link> 
      </Typography>
      </Typography></>

)}

    </Typography>
  );
};
export default SignIn;
