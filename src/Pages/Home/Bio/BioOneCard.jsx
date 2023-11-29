
import { Link, useLoaderData } from "react-router-dom";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import Swal from "sweetalert2";
import { useEffect, useState } from "react";
import Filter from "./Filter";

const BioOneCard = () => {
  const [filter ,setFilter] =useState([])
      const details = useLoaderData()
      // console.log('bio data', details);
  const { id,Biodata_Type,Image,Permanent_Division_Name,Age,Occupation,
    Name, Date_of_Birth, Height,Weight,Race,Father_Name,Mother_Name,
     Present_Division_Name, Expected_Partner_Age, Expected_Partner_Height,
     Expected_Partner_Weight, Contact_Email, Mobile_Number} = details 
     const axiosPublic = useAxiosPublic()

     useEffect(()=>{
       axiosPublic.get('/biodata')
       .then(res=>{
        // console.log(res.data);
        const item = res.data.filter(items=>items.Biodata_Type ===Biodata_Type)
        setFilter(item)
       })
     },[axiosPublic])
    //  console.log(filter);

      const handleFavourite =()=>{
       axiosPublic.post('/favorite',details)
       .then(response=>{
        console.log(response.data);
        Swal.fire({
          title: "Good job!",
          text: "successfully added to favourite data!",
          icon: "success"
        });
       })
       .catch(error=>console.log(error))

      }
                      
 return (
  <div className="flex py-10 justify-evenly flex-1">
 <div className="max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-5 ">

   <div className="max-w-md mt-5 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
<div>
    <img className="rounded-t-lg w-full h-72" src={Image} alt="" />
</div>
<div className="p-5">
    <div className="flex justify-between">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Id : {id}</h5>
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Biodata Type : {Biodata_Type}</h5>
    </div>
    <p className="mb-3 font-normal text-white"> Name : {Name}</p>
<p className="mb-3 font-normal text-white"> Date of Birth: {Date_of_Birth}</p>
<div className="flex justify-evenly">
<p className="mb-3 font-normal text-white"> Height : {Height}</p>
<p className="mb-3 font-normal text-white">Weight : {Weight}</p>
<p className="mb-3 font-normal text-white"> Race : {Race}</p>
</div>
<div className="flex justify-between">
<p className="mb-3 font-normal text-white"> Father Name : {Father_Name}</p>
<p className="mb-3 font-normal text-white">Mother Name : {Mother_Name}</p>
</div>
    <p className="mb-3 font-normal text-white">Permanent Division Name : {Permanent_Division_Name}</p>
    <p className="mb-3 font-normal text-white">Present Division Name : {Present_Division_Name}</p>
  <div className="flex justify-evenly">
  <p className="mb-3 font-normal text-white ">Expected Partner Age : {Expected_Partner_Age}</p>
  <p className="mb-3 font-normal text-white ">Expected Partner Height : {Expected_Partner_Height}</p>
  <p className="mb-3 font-normal text-white ">Expected Partner Weight : {Expected_Partner_Weight}</p>
  </div>
  <div className="flex justify-between">
  <p className="mb-3 font-normal text-white ">Age : {Age}</p>
  <p className="mb-3 font-normal text-white ">Occupation : {Occupation}</p>
  </div>
  <p className="mb-3 font-normal text-white ">Contact Email : {Contact_Email}</p>
  <p className="mb-3 font-normal text-white "> Mobile Number : { Mobile_Number}</p>
</div>
<div className="flex  p-5 justify-between">
  <button onClick={handleFavourite} className="btn btn-secondary">Add to favourite</button>
  <Link to={`/checkOut/`}>
  <button  className="btn btn-info">Request contact information</button>
  </Link>
</div>
</div>
<div className="flex-1">
<div className="grid grid-cols-1 md:grid-cols-3 gap-5">
 {
    filter.map(filters=><Filter key={filters._id} filters={filters}></Filter>)
  }
 </div>
</div>
</div> 

 </div>
);
};

export default BioOneCard;