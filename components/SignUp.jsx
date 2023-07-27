"use client";
import React, { useState, useEffect } from "react";
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import GoogleIcon from '@mui/icons-material/Google';
import { signIn, useSession, getProviders } from 'next-auth/react';
import Home from "@app/page";
import Box from '@mui/material/Box';

const SignUp = ({ type, post, setPost, submitting, handleSubmit }) => {
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
          <Home />
        </>
      ) : (
        <>
          <Typography className="signup_form">
            <Typography className="signup_title">
              Sign Up
            </Typography>
            {providers &&
              Object.values(providers).map((provider) => (
                <Box>
                  <form onSubmit={handleSubmit} className="form_register">
                    <div>
                      <label htmlFor="email" className="signup_label">Email:</label>
                      <TextField className="register_fields"
                        fullWidth
                        size="small"
                        type="email"
                        id="email"
                        value={post.email}
                        onChange={(e) => setPost({ ...post, email: e.target.value })}
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="password" className="signup_label">Password:</label>
                      <TextField className="register_fields"
                        fullWidth
                        size="small"
                        type="password"
                        id="password"
                        value={post.password}
                        onChange={(e) => setPost({ ...post, password: e.target.value })}
                        required
                      />
                    </div>
                    <Button
                      type='submit'
                      disabled={submitting}
                      className="signin_btn"  >
                      {submitting ? `${type}ing...` : type}
                    </Button>
                  </form>
                  <Typography className="center_title">
                    ---- or use one of these options ----
                  </Typography>
                  <div className="google_login">
                    <GoogleIcon className='google_logo' />
                    <Button className='google_title'
                      key={provider.name}
                      onClick={() => {
                        signIn(provider.id);
                      }}
                    >
                      Continue with google
                    </Button>
                  </div>
                </Box>
              ))}
            <Typography className="center_title">
              Don't have an account? <Link>SignUp</Link>
            </Typography>
          </Typography></>
      )}
    </Typography>
  );
};
export default SignUp;