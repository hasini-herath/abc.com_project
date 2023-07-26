"use client";

import { useState, useEffect } from "react";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import RoomCard from "@components/Content/RoomCard";
import Link from '@mui/material/Link';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const RoomCardList = ({ data, handleTagClick }) => {
  return (
    <div >
      {data.map((post) => (
        <RoomCard
          key={post._id}
          post={post}

        />
      ))}
    </div>
  );
};

const RoomContent = () => {
  const [allPosts, setAllPosts] = useState([]);

  // Search states
  const [searchText, setSearchText] = useState("");
  const [searchTimeout, setSearchTimeout] = useState(null);
  const [searchedResults, setSearchedResults] = useState([]);

  const fetchPosts = async () => {
    const response = await fetch("/api/content");
    const data = await response.json();

    setAllPosts(data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const filterPrompts = (searchtext) => {
    const regex = new RegExp(searchtext, "i"); // 'i' flag for case-insensitive search
    return allPosts.filter(
      (item) =>
        regex.test(item.creator.username) ||
        regex.test(item.tag)
    );
  };



  const handleTagClick = (tagName) => {
    setSearchText(tagName);

    const searchResult = filterPrompts(tagName);
    setSearchedResults(searchResult);
  };

  return (
    <section >
      <Box className="flex">
        <Box className="content_left">
          <Box className='content_box_box'>
            <Typography  className="article_des">
              Search By Room Name
            </Typography>
            <TextField className="content_search"
              type='text'
              size="small"
              required
            />

          </Box>
          <Box className='content_left_box'>
<h1></h1>
          </Box>
        </Box>
        <Box >
          <Box className='flex'>
          <Box >
          <Link href='admin/content/list' className="content-links"
                 >Popular
                </Link>
                <Link href='admin/content/list' className="content-links"
                 >All
                </Link>
        <Link href='admin/content/list' className="content-links"
                 >Single
                </Link>
                <Link href='admin/dashboard' className="content-links"
                 >Double
                </Link>
              
                <Link href='/' className="content-links"
               >Luxury
                </Link>
            </Box>
          </Box>



          {searchText ? (
            <RoomCardList data={searchedResults} handleTagClick={handleTagClick} />
          ) : (
            <Box className='content_middle'>
              <RoomCardList data={allPosts} handleTagClick={handleTagClick} />
            </Box>
          )}

        </Box>
      </Box>
    </section>
  );
};

export default RoomContent;