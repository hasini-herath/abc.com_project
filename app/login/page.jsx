
"use client";
import { useState } from "react";
import SignIn from "@components/SignIn";
import { useRouter } from "next/navigation";

const ParentComponent = () => {
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);
  const [post, setPost] = useState({ email: "", password: "" });

  const handleSubmit = async () => {
    setSubmitting(true);
console.log("submit function started")
    try {
      const response = await fetch("/api/login", {
        method: "POST",
        body: JSON.stringify({
          email: post.email,
          password: post.password,
        }),
      
      });
   
      if (response.ok) {
       
        // Handle successful login here, e.g., redirect to dashboard page
        router.push("/");
        console.log("Login successful");
      } else {
        console.log("Login failed");
      }
    } catch (error) {
      console.log("error function"+error);
      console.error("Error during login:", error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div>
      <h1>Login Page</h1>
      <SignIn
        type="Login"
        post={post}
        setPost={setPost}
        submitting={submitting}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

export default ParentComponent;
