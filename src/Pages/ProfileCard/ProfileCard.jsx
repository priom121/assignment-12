import { useEffect, useState } from "react";
import ProfileOneCard from "./ProfileOneCard";


const ProfileCard = () => {
 const [profile , setProFile] =useState([])
 useEffect(()=>{
   fetch('http://localhost:5000/blog')
   .then(res=>res.json())
   .then(data=>setProFile(data))
   
},[])
return (
<div>
   <h2 className="text-center text-3xl mt-4 font-bold ">BioData</h2>
   <div className="divider w-1/2 mx-auto "></div>
<div className="py-10 max-w-screen-xl mx-auto
   grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
     {
       profile.map(profiles=><ProfileOneCard key={profile.id} profiles={profiles}>

       </ProfileOneCard>)
     }                                                                                     
  </div>
</div>
);
};

export default ProfileCard;