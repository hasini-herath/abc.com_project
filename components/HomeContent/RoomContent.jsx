"use client";

import { useState, useEffect } from "react";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import RoomCard from "@components/HomeContent/RoomCard";
import Link from '@mui/material/Link';


const RoomCardList = ({ data, handleTagClick }) => {
  return (
    <div className='feed'>
      {data.map((post) => (
        <RoomCard
          key={post._id}
          post={post}
          handleTagClick={handleTagClick}
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
             <Typography className="home_content_title" >
    abc.com Rooms
    </Typography>

      {/* All Prompts */}
      <Box>
      {searchText ? (
        <RoomCardList data={searchedResults} handleTagClick={handleTagClick} />
      ) : (
        <RoomCardList data={allPosts.slice(0, 3)} handleTagClick={handleTagClick} />
      )}
      <Link>More</Link>
    </Box>
    </section>
  );
};

export default RoomContent;