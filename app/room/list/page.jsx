"use client";

import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";


import Room from "@components/Room/RoomList";

const MyProfile = () => {

  const { data: session } = useSession();

  const [post, setPost] = useState([]);

  useEffect(() => {
    const fetchPost = async () => {
      const response = await fetch(`/api/room/${session?.roomId}/post`);
      const data = await response.json();

      setPost(data);
    };

    if (session?.roomId) fetchPost();
  }, [session?.roomId]);


  return (
    <Room
      
      data={post}
    
    />
  );
};

export default MyProfile;