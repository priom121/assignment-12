import Swal from "sweetalert2";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useState } from "react";
import useAuth from "../../Hooks/useAuth";

const View = ({bios}) => {
 const { id,profileImage,type,
  name,division, date_of_birth, height,weight,race,fathers_name ,mother_name,
  partner_height,partner_weight, email, phoneNumber} = bios
  const [datas,setDatas] =useState([])
  const axiosPublic = useAxiosPublic()
const {user} = useAuth()

 const handlepremium =(bios)=>{
  const favorite = {
    id : bios.id,         //update korte hobe ?
    name : bios.name,
    email:bios.email,
    // emails:user?.email
  }
  
  Swal.fire({
    title: "Are you sure?",
    text: "You won't be a premium!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, !"
  }).then((result) => {
    if (result.isConfirmed) {
      axiosPublic.post('/modal',favorite)
      .then(res=>{
        console.log(res.data)
        // setData(res.data)
      })
      Swal.fire({
        title: "Success!",
        text: "this bio data send to admin approve page",
        icon: "success"
      });
    }
  });
 }
 return (
  <div className="max-w-screen-xl mx-auto">

<div className="max-w-md mt-5 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                           <div>
                               <img className="rounded-t-lg w-full h-72" src={profileImage} alt="" />
                           </div>
                           <div className="p-5">
                               <div className="flex justify-between">
                                   <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"> id : {id}</h5>
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Biodata Type :{type}
                                    </h5>
                               </div>
                               <p className="mb-3 font-normal text-white"> Name : {name}</p>
                           <p className="mb-3 font-normal text-white"> Date of Birth: {date_of_birth}</p>
                           <div className="flex justify-evenly">
                           <p className="mb-3 font-normal text-white"> Height : {height}</p>
                           <p className="mb-3 font-normal text-white">Weight : {weight}</p>
                           <p className="mb-3 font-normal text-white"> Race : {race}</p>
                           </div>
                           <div className="flex justify-between">
                           <p className="mb-3 font-normal text-white"> Father Name : {fathers_name}</p>
                           <p className="mb-3 font-normal text-white">Mother Name : {mother_name}</p>
                           </div>
                               <p className="mb-3 font-normal text-white">Permanent Division Name :{division} </p>
                               <p className="mb-3 font-normal text-white">Present Division Name : {division}</p>
                             <div className="flex justify-evenly">
                             <p className="mb-3 font-normal text-white ">    </p>
                             <p className="mb-3 font-normal text-white ">Expected Partner Height : {partner_height}</p>
                             <p className="mb-3 font-normal text-white ">Expected Partner Weight : {partner_weight}</p>
                             </div>
                             {/* <div className="flex justify-between">
                             <p className="mb-3 font-normal text-white ">Age : {Age}</p>
                             <p className="mb-3 font-normal text-white ">Occupation : {Occupation}</p>
                             </div> */}
                             <p className="mb-3 font-normal text-white ">Contact Email : {email}</p>
                             <p className="mb-3 font-normal text-white "> Mobile Number : { phoneNumber}</p>
                           </div>
                           <div className="text-center w-full p-2">
                             <button onClick={()=>handlepremium(bios)} className="btn ">Premium</button>
                           </div>
                    
                           </div>  
 
                           
                            </div>
 );
};

export default View;