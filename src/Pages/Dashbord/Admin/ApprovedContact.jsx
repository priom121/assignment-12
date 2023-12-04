import { useState } from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";


const ApprovedContact = () => {
    const [data,setData] =useState()
     const axiosSecure =useAxiosSecure()
     axiosSecure.get('/payment')
     .then(res=>{
      setData(res.data)
     })                        
return (
 <div>
     <h3 className="text-4xl text-cener"> Approved Contact</h3>
  
     <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead className="text-base">
      <tr>
        <th>#</th>
        <th>Biodata id</th>
        <th>self email</th>
        <th>role</th>
      </tr>
    </thead>
    <tbody>
      {
       data?.map((datas,idx)=>  <tr key={datas?._id}>
                                 <td>{++idx}</td>
                                 <td>{datas?.selfBiodataId}</td>
                                 <td>{datas?.selfEmail}</td>
                              <th>{datas?.name}</th>
                           <button className="btn btn-secondary">Approve Request</button>
                              
                            </tr>)
      }
    
    </tbody>
  </table>
</div>
     
 </div>
);
};

export default ApprovedContact;