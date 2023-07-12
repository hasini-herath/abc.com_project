"use client";

import React, { useState, useEffect } from "react";
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import GoogleIcon from '@mui/icons-material/Google';
import { signIn, signOut, useSession, getProviders } from 'next-auth/react';
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export default function Form(){
  const { data: session } = useSession();
  const [providers, setProviders] = useState(null);

  useEffect(() => {
    (async () => {
      const res = await getProviders();
      setProviders(res);
    })();
  }, []);

  return (
    <section className="signup_form">

<Typography  className="signup_title">
         Sign Up
      </Typography>
      <form className="form_register" >
      <label  required className="signup_label">E-mail</label>
      <TextField className="register_fields"
        size="small"
         
          id="outlined-required"
          label="abc@gmail.com"
        />
         <label  required className="signup_label">Password</label>
      <TextField className="register_fields"
           size="small"
          id="outlined-required"
          label="**********"
        />
             <Typography>
      <Checkbox className="checkbox"/>
      I accept the <Link>Terms of Service</Link> & <Link> Privacy Policy</Link>
      </Typography>

<Button className="signin_btn">
  Continue with E-mail
</Button>

<Typography className="center_title">
      
      ---- or use one of these options ----
      </Typography>

      <div className="google_login">
          <GoogleIcon className='google_logo' />

        {providers &&
              Object.values(providers).map((provider) => (
                <Button  className='google_title'
                
                key={provider.name}
                onClick={() => {
                  signIn(provider.id);
                }}
                
              >
             Continue with google
           
              </Button>
              ))}</div>
      </form>
      
    </section>
  );
}
