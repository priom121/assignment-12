import { useEffect, useState } from "react";
import ProfileOneCard from "./ProfileOneCard";


const ProfileCard = () => {
 const [profile , setProFile] =useState([])
 useEffect(()=>{
   fetch('https://matrimonius-server.vercel.app/blog')
   .then(res=>res.json())
   .then(data=>{
    const premium = data.filter(premiums=>premiums.status ==='premium')
    setProFile(premium)
    // console.log(premium);
   })
   
},[])

return (
<div>
   <h2 className="text-center text-3xl mt-4 font-bold ">Premium BioData</h2>
   <div className="divider w-1/2 mx-auto "></div>
<div className="py-10 max-w-screen-xl mx-auto
   grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
     {
       profile.map(profiles=><ProfileOneCard key={profiles._id} profiles={profiles}>

       </ProfileOneCard>)
     }                                                                                     
  </div>
</div>
);
};

export default ProfileCard;