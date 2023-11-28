import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";


const ManageUsers = () => {
     const axiosSecure = useAxiosSecure();
     const {data : users=[] ,refetch} = useQuery({
            queryKey:['/users'],
            queryFn: async ()=>{
              const res = await axiosSecure.get('/users',{
                  headers:{
                      authorization:`Bearer${localStorage.getItem('access-token')}`        
                  }
              })
              return res.data
            }                  
     })
//      make admin 
     const handleAdmin =(user)=>{
         axiosSecure.patch(`/users/admin/${user._id}`) 
         .then(res=>{
          console.log(res.data);
          if(res.data.modifiedCount > 0){
           refetch()
          Swal.fire({
          icon: "success",
           title: `${user.name}is a admin`,
           timer:1500
  });                 
          }
         })
     }
     const handlePremium = ()=>{

     }
 return (
 <div>
       <h2 className="text-4xl text-center mt-5 font-bold">Manage
        <span className="text-orange-400">Users</span> : {users.length} </h2> 
        <div>
        <div className="overflow-x-auto">
  <table className="table table-zebra">
    <thead className="text-lg">
      <tr>
          <th>Index</th>
        <th> User name</th>
        <th> User email</th>
        <th> Make admin</th>
        <th> Make premium</th>
      </tr>
    </thead>
    <tbody className="text-base mt-6">
      {
         users.map((user,idx)=>  <tr key={user._id}>
                              <th>{idx+1}</th>
                              <td>{user.name}</td>
                              <td>{user.email}</td>
                              <td>
       { user.admin === "admin" ? "Admin" :  <button onClick={()=>handleAdmin(user)} 
           className="btn btn-warning btn-lg"> admin
                    </button>}
                              </td>
                              <td>
<button onClick={()=>handlePremium(user._id)} className="btn btn-info btn-lg">Premium
                    </button>
                              </td>
                            </tr>)                     
      }
 
    </tbody>
  </table>
</div>                   
        </div>
 </div>
 );
};

export default ManageUsers;