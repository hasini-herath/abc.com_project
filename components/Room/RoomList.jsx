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
    { field: 'title', headerName: 'title', width: 130 },
    { field: 'overview', headerName: 'Overview', width: 130, },
    { field: 'description', headerName: 'Description', width: 130 },
    { field: 'room_type', headerName: 'room_type', width: 130 },
    { field: 'size', headerName: 'Size', width: 130 },
    { field: 'bed_description', headerName: 'Bed Description', width: 130 },
    { field: 'amenities', headerName: 'Amenities', width: 130 },
    { field: 'number_guest', headerName: 'Number Guest', width: 130 },
    { field: 'standard_price', headerName: 'Standard Price', width: 130 },
    { field: 'additional_charges', headerName: 'Additional Charges', width: 130 },
    { field: 'status', headerName: 'Status', width: 130 },
    { field: 'terms_conditions', headerName: 'terms_conditions', width: 130 },


  ];

  useEffect(() => {
    fetchPosts();
  }, []);

  return (


    <>
<div>

<Button href='/room/new' className='addbtn' >
     + Add Room
    </Button>
</div>

    <div style={{ height: 400, width: '100%' }}>
 
      
       <DataGrid className="datagrid"
         rows={allPosts?.map((post) => ({
          id: post._id,
          title: post.title,
          overview: post.overview,
          description: post.description,
          room_type: post.room_type,
          size: post.size,
          bed_description: post.bed_description,
          amenities: post.amenities,
          number_guest: post.number_guest,
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