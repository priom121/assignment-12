import { useEffect, useState } from "react";
import Reviews from "./Reviews";


const Review = () => {
    const [review ,setReview] =useState([])
      useEffect(()=>{
        fetch('https://matrimonius-server.vercel.app/review')
        .then(res=>res.json())
        .then(data=>{
           setReview(data)
        })
      },[])                    
return (
 <div className="bg-cyan-200">
      <h2 className="text-3xl font-bold text-center 
      ">Success Story</h2>
      <div className="grid grid-cols-1  py-10 gap-7
       md:grid-cols-2 max-w-screen-2xl mx-auto lg:grid-cols-4">
    {
      review.map(reviews=><Reviews key={reviews._id} reviews={reviews}></Reviews>)
    }                          
    </div>                                                                                    
 </div>
 );
};

export default Review;