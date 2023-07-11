"use client";
import { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Form from "@components/Room/Room";

const Test = () => {
  const router = useRouter();
  const { data: session } = useSession();
  const [submitting, setIsSubmitting] = useState(false);
  const [post, setPost] = useState({
  title:"", 
  overview: "", 
  description: "", 
  room_type: "" ,
  room_type: "",
  bed_description:"", 
  amenities:"", 
  number_guest:"", 
  standard_price:"", 
  additional_charges:"", 
  status:"", 
  terms_conditions:"",
});

  const test = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/room/new", {
        method: "POST",
        body: JSON.stringify({
          title: post.title,
          overview: post.overview,
          userId: session?.user.id,
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
        }),
      });

      if (response.ok) {
        router.push("/room/list");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Form
      type='Add'
      post={post}
      setPost={setPost}
      submitting={submitting}
      handleSubmit={test}
    />
  );
};

export default Test;