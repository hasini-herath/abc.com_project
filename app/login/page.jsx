
"use client";
import { useState } from "react";
import SignIn from "@components/SignIn";
import { useRouter } from "next/navigation";

const ParentComponent = () => {
  const router = useRouter();
  const [submitting, setIsSubmitting] = useState(false);
  const [post, setPost] = useState({ email: "", password: "" });

  const createPrompt = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/login", {
        method: "POST",
        body: JSON.stringify({
          email: post.email,
          password: post.password,
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
    <div>
     
      <SignIn
        type="Login"
        post={post}
        setPost={setPost}
        submitting={submitting}
        handleSubmit={createPrompt}
      />
    </div>
  );
};

export default ParentComponent;
