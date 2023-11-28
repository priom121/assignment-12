import Swal from "sweetalert2";
import useAuth from "../../../Hooks/useAuth";

const AdminLogOut = () => {
        const {logOut} =useAuth() 
const signOut =()=>{
logOut()
 Swal.fire({
 title: "Done!",
 text: "Log Out successfully",
 icon: "success"
 });
}                     
return (
 <div className=" ">
 <h2 className="text-xl mt-10 ml-10 font-bold">you click the log out button and successfully logout</h2>
   <button className="btn mt-5 ml-52 
  items-center justify-center  btn-primary" onClick={signOut}>Log out</button>                                                                                   
 </div>
 );
};

export default AdminLogOut;