import { useLoaderData } from "react-router-dom";


const ProfileDetails = () => {
 const details =useLoaderData()
 const { id,Biodata_Type,Image,Permanent_Division_Name,Age,Occupation} =details
return (

<div className="card bg-stone-500 mt-40 max-w-screen-lg mx-auto lg:card-side shadow-blue-400 shadow-xl">
<div>
<figure><img className="h-[350px] pt-5 rounded pl-48 bg-cover w-[750px]" src={Image} alt="Album"/></figure>
  <div className="card-body pl-20">
    <h2 className="card-title text-white"> Id : {id}</h2>
    <div className="flex justify-between">
    <p className="text-lg font-semibold text-white"> Type : {Biodata_Type}</p>
    <p className="text-lg font-semibold text-white"> Division : {Permanent_Division_Name}</p>
    </div>
    <p className="text-lg font-semibold text-white"> Age : {Age}</p>
    <p className="text-lg font-semibold text-white"> Occupation : {Occupation}</p>
  
  </div>
</div>
</div>

 );
};

export default ProfileDetails;
