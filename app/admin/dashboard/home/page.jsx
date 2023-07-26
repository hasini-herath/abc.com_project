"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Image from 'next/image';
import SubNav from "@components/SubNav";

import Form from "@components/Admin/Dashboard/Home";

const CreatePrompt = () => {
  const router = useRouter();
  const { data: session } = useSession();

  const [submitting, setIsSubmitting] = useState(false);
  const [post, setPost] = useState({ main_title: "", main_description: "",  sub_one: "",  sub_one_des: "",  sub_two: "", sub_two_des:"" });

  const createPrompt = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/dashboard/home/new", {
        method: "POST",
        body: JSON.stringify({
          main_title: post.main_title,
          userId: session?.user.id,
          main_description: post.main_description,
          sub_one: post.sub_one,
          sub_one_des: post.sub_one_des,
          sub_two: post.sub_two,
          sub_two_des: post.sub_two_des,
        }),
      });

      if (response.ok) {
        router.push("/");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
    <SubNav/>
    <Form
      type='Create'
      post={post}
      setPost={setPost}
      submitting={submitting}
      handleSubmit={createPrompt}
    />
    </>
  );
};

export default CreatePrompt;