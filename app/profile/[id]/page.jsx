"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

import Profile from "@components/Profile";

const UserProfile = ({ params }) => {
  const searchParams = useSearchParams();
  const userName = searchParams.get("name");

  const [userPosts, setUserPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(`/api/details/${params?.id}/posts`);
      const data = await response.json();
console.log("cccc")
      setUserPosts(data);
    };

    if (params?.id) fetchPosts();
    console.log("ddddc")
  }, [params.id]);

  return (
    <Profile
      name={userName}
      desc={`Welcome to 's personalized profile page. Explore 's exceptional prompts and be inspired by the power of their imagination`}
      data={userPosts}
    />
  );
};

export default UserProfile;
