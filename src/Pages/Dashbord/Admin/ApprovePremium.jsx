import { useEffect, useState } from "react";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";


const ApprovePremium = () => {
        const [approve ,setApprove] =useState([]) 
        const axiosPublic = useAxiosPublic()  
       useEffect(()=>{
        axiosPublic.get('/modal') 
        .then(res=>{
          // console.log(res);
          setApprove(res.data)
        })
       
       },[])                  
return (
<div>
     <h3 className="text-center text-5xl mt-5 font-bold">Approved Premium</h3>
     <div>
     <div className="overflow-x-auto">
  <table className="table mt-10 ml-5 table-zebra bg-red-300">
    <thead>
      <tr className="text-lg ">
        <th>Name</th>
        <th> Email</th>
        <th> Biodata Id</th>
        <th> Make Premium</th>
      </tr>
    </thead>
    <tbody className="text-lg font-bold">
      {
        approve.map(approves=>   <tr key={approves._id}>
          <th>{approves.name}</th>
          <td>{approves.email}</td>
          <td>{approves.id}</td>
          <td>Make Premium</td>
        </tr>)
      }
   
    </tbody>
  </table>
</div>
     </div>                                                                                     
 </div>
 );
};

export default ApprovePremium;