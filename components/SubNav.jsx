"use client";
import Link from '@mui/material/Link';
import "@styles/globals.css"
import React from 'react'

const Dashboard = () => {
  return (
    <div className='sub_nav_app'>

      <div className='sub_nav_form'>
        <Link href="/dashboard/home" className="sub_nav-links">
          Home
        </Link>
        <Link href="/dashboard/about" className="sub_nav-links">
          About
        </Link>
        <Link href="/dashboard/contactus" className="sub_nav-links">
          Contact Us
        </Link>
      </div>

    </div>
  )
}

export default Dashboard