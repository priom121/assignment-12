import { useState } from "react";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import useAuth from "../../Hooks/useAuth";




const ContactRequest = () => {
  const {user} =useAuth()
  const [request ,setRequest] =useState()
  const axiosPublic = useAxiosPublic()
  axiosPublic.get('/payment')

  .then(res=>{
    // console.log(res.data);
  const useData = res.data
    const findData = useData.filter(item => item?.selfEmail === user?.email);
    setRequest(findData)
  })
  // console.log(request);
  
return (
  <div>
     <h3 className="text-4xl text-cener">my Contact</h3>
  
     <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead className="text-base">
      <tr>
        <th>#</th>
        <th>Name</th>
        <th>Biodata id</th>
        <th>self email</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {
       request?.map((datas,idx)=>  <tr key={datas?._id}>
                                 <td>{++idx}</td>
                                 <th>{datas?.name}</th>
                                 <td>{datas?.selfBiodataId}</td>
                                 <td>{datas?.selfEmail}</td>
                                
                                 
                             
                           <button className="btn btn-secondary">Approve Request</button>
                              
                            </tr>)
      }
    
    </tbody>
  </table>
</div>
     
 </div>
);
};

export default ContactRequest;