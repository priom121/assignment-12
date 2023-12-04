import { useEffect, useState } from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";


const OurSuccess = () => {
        const [success,setSuccess] =useState([])
     const axiosSecure = useAxiosSecure()
     useEffect(()=>{
 axiosSecure.get('/review') 
 .then(res=>{
console.log(res.data);
    setSuccess(res.data)                             
    })
     },[axiosSecure])
  const handleOpen =(e ,successd)=>{
      e.preventDefault()
      Swal.fire({
 title: "Details",
 html:`
 <img className ="w-full" src="${successd.couple_image}"/>
 <p>Marriage Date: ${ successd.marriage_date}</p>
 <p> selfBiodataNumber ${successd.selfBiodataNumber}</p>
 <p> partnerBiodataNumber ${successd.partnerBiodataNumber}</p>
 <p> Review : ${successd.review_star}</p>

 `,
  width: 600,
  padding: "3em",
 color: "#716add",
 background: "#fff url(/images/trees.png)",
 backdrop: `
 rgba(0,0,123,0.4)
 url("/images/nyan-cat.gif")
  left top
  no-repeat
                              `
 });
 console.log(success);
  }   
                         
return (
  <div>
     <h2 className="text-5xl mt-5 font-bold text-center text-green-400"> Our Success Story </h2>                                                                                  
     <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr className="text-base">
        <th>#</th>
        <th>Male biodata id</th>
        <th>feMale biodata id</th>
        <th>view story</th>
      </tr>
    </thead>
    <tbody>
      {
       success?.map ((successd,idx)=>   <tr key={successd._id}>
        <th>{++idx}</th>
        <td>{successd.selfBiodataNumber}</td>
        <td>{successd.partnerBiodataNumber}</td>
        <button className="btn btn-success" onClick={(e)=>handleOpen(e,successd)}>Open</button>
      </tr>)
      }
   

    </tbody>
  </table>
</div>
 <div className="ml-5 w-full p-5 mt-7 py-10 ">

     {/* {
          success.map(successd=><div key={successd._id}>
                          
                              <div className="card card-compact mb-5 h-96  bg-base-100 shadow-xl shadow-blue-500">
                                <figure><img className="w-full bg-cover" src={successd.image} alt="Shoes" /></figure>
                                <div className="card-body flex justify-between">
                                  <h2 className="card-title"> marriage date : {successd.marriage_date}</h2>
                                  <p> review : {successd.review_star}</p>
                                </div>
                                <p className="text-center">{successd.description.slice(0,50)}. . . .</p>
                                
                              
                              </div>                                                                                       
                               </div>)
     }                          */}
 </div>
 
   </div>
 );
};

export default OurSuccess;