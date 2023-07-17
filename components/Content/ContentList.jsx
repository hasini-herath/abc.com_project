"use client";
import * as React from 'react';
import { useState, useEffect } from "react";
import { DataGrid } from '@mui/x-data-grid';
import Link from "next/link";

import Button from '@mui/material/Button';
export default function BasicTable() {

  const [allPosts, setAllPosts] = useState([]);
  
  const fetchPosts = async () => {
    const response = await fetch("/api/room");
    const data = await response.json();

    setAllPosts(data);
  };
  const columns = [
    { field: 'content_type', headerName: 'content_type', width: 150 },
    { field: 'title', headerName: 'title', width: 150 },
    { field: 'overview', headerName: 'Overview', width: 150, },
    { field: 'description', headerName: 'Description', width: 150 },
    { field: 'standard_price', headerName: 'Standard Price', width: 150 },
    { field: 'additional_charges', headerName: 'Additional Charges', width: 150 },
    { field: 'status', headerName: 'Status', width: 150 },
    { field: 'terms_conditions', headerName: 'terms_conditions', width: 150 },


  ];

  useEffect(() => {
    fetchPosts();
  }, []);

  return (


    <>
<div>

<Button href='/content/new' className='addbtn' >
     + Add Content
    </Button>
</div>

    <div style={{ height: 400, width: '100%' }}>
 
      
       <DataGrid className="datagrid"
         rows={allPosts?.map((post) => ({
          id: post._id,          
          content_type: post.content_type,
          title: post.title,
          overview: post.overview,
          description: post.description,
          standard_price: post.standard_price,
          additional_charges: post.additional_charges,
          status: post.status,
          terms_conditions: post.terms_conditions,


        }))}

   
        columns={columns}


        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
    </>
  );
}