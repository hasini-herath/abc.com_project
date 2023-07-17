"use client";
import { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Form from "@components/Content/Content";


const Test = () => {
  const router = useRouter();
  const { data: session } = useSession();
  const [submitting, setIsSubmitting] = useState(false);
 
  const [post, setPost] = useState({

    content_type:"",
    title:"", 
    overview: "", 
    description: "", 
    room_type: "" ,
    size: "",
    bed_description:"", 
    amenities:"", 
    number_guest:"", 
    standard_price:"", 
    additional_charges:"", 
    status:"", 
    terms_conditions:"",
    meal_type:"",
    meal_plan:"",
    portion_size:"",
    meal_ingredients:"",
    article:"",
    category:"",
    service:"",
    service_duration:"",
    service_no_guest:"",
});
    
  const test = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const content_type = post.content_type;
      const data = {
        content_type: content_type,
        title: post.title,
        overview: post.overview,
        userId: session?.user.id,
        description: post.description,
        standard_price: post.standard_price,
        additional_charges: post.additional_charges,
        status: post.status,
        terms_conditions: post.terms_conditions,
      };
    
      if (content_type === "room") {
        data.room = [{
          room_type: post.room_type,
          size: post.size,
          bed_description: post.bed_description,
          amenities: post.amenities,
          number_guest: post.number_guest
        }];
      } else if (content_type === "meal") {
        data.meal = [{
          meal_type: post.meal_type,
          meal_plan: post.meal_plan,
          portion_size: post.portion_size,
          meal_ingredients: post.meal_ingredients
        }];
      }
      else if (content_type === "article") {
        data.article = [{
          category: post.category
        }];
      }else if (content_type === "service") {
        data.service = [{
          service_duration: post.service_duration,
          service_no_guest: post.service_no_guest
        }];
      }
    
      const response = await fetch("/api/room/new", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data),
      });
    
      console.log("checking room type: " + post.room_type);
      if (response.ok) {
        router.push("/content/list");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsSubmitting(false);
    }
  ;
  }

  return (
    <Form
      type='Add'
      post={post}
      setPost={setPost}
      submitting={submitting}
      handleSubmit={test}
    />
  );}


export default Test;