import { useEffect, useState } from "react";
import View from "./View";
import useAuth from "../../Hooks/useAuth";



const ViewBioData = () => {
      const [ bio ,setBio] =useState([])
      const {user} =useAuth()
       useEffect(()=>{
            fetch('http://localhost:5000/postBio')
            .then(res=>res.json())
            .then(data=>{
                  const filter =data.filter(item=>item?.email === user?.email)
                  setBio(filter)
            })
       },[user?.email])
       console.log(bio);
return (
<div className="">
<h3 className="text-4xl font-bold text-center mt-12 text-yellow-500">
      View Bio Data</h3>
      <div className="divider"></div>
    <div className="grid grid-cols-1 py-10 md:grid-cols-2 mt-7 pl-3 lg:grid-cols-3 gap-5">
    {
            bio.map(bios=> <View key={bios._id}bios={bios}></View> )
      }
    </div>
                                                                                                                                                                 
 </div>
 );
};

export default ViewBioData;