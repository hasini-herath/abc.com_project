"use client";

import Nav from "@components/Nav";
import Footer from "@components/Footer";
import Provider from "@components/Provider";
import Box from '@mui/material/Box';
export const metadata = {
  title: 'Sweet Space',
  description: 'Description of sweet space',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
        <Box sx={{ margin: '80px' }}>
          <Provider>
            <div className="main">
              <div />
            </div>
            <main>
              <Nav />
              {children}
            </main>
          </Provider>
        </Box>
        <Footer />
      </body>
    </html>
  )
}