
import { useLoaderData } from "react-router-dom";

const BioOneCard = () => {
      const details = useLoaderData()
//       console.log('bio data', details);
      const { id,Biodata_Type,Image,Permanent_Division_Name,Age,Occupation} = details 
                      
 return (
 <div className="max-w-screen-xl mx-auto">
   <div className="max-w-sm mt-5 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
<div>
    <img className="rounded-t-lg w-full h-72" src={Image} alt="" />
</div>
<div className="p-5">
    <div className="flex justify-between">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Id : {id}</h5>
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Biodata Type : {Biodata_Type}</h5>
    </div>
    <p className="mb-3 font-normal text-white">Permanent Division Name : {Permanent_Division_Name}</p>
  <div className="flex justify-between">
  <p className="mb-3 font-normal text-white ">Age : {Age}</p>
  <p className="mb-3 font-normal text-white ">Occupation : {Occupation}</p>
  </div>
</div>
</div> 

 </div>
);
};

export default BioOneCard;