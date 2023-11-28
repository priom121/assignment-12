import { NavLink, Outlet } from "react-router-dom";
import { FaEdit ,FaStreetView ,FaAddressCard, FaLock, FaHome, FaHandPeace } from "react-icons/fa";
import { MdFavoriteBorder } from "react-icons/md";
import useAdmin from "../Hooks/useAdmin";
const Dashbord = () => {
  const [admin] = useAdmin();
 console.log('admin ',admin);
return (
 <div className="flex max-w-screen-xl  mx-auto">
    <div className="w-64 min-h-screen bg-cyan-400">
       <ul className="menu p-4 text-lg">
    {
      admin ? <>
           <li >                     
       <NavLink to='/dashbord/adminDashbord'>
       <FaEdit />  Admin Dashboard</NavLink>                    
       </li>                     
         <li>                     
       <NavLink to='/dashbord/manageUsers'>
       <FaStreetView />Manage Users</NavLink>                    
       </li>                     
         <li>                     
       <NavLink to='/dashbord/premium'>
       <FaAddressCard /> Approved Premium</NavLink>                    
       </li>                     
         <li>                     
       <NavLink to='/dashbord/approvedContact'>
       <MdFavoriteBorder /> Approved Contact Request</NavLink>                    
       </li>                     
         <li>                     
       <NavLink to='/dashbord/AdminLogOut'>
        <FaLock></FaLock> Admin Logout</NavLink>                    
       </li>
      </>
      :<>
           <li >                     
       <NavLink to='/dashbord/editBiodata'>
       <FaEdit /> Edit Biodata</NavLink>                    
       </li>                     
         <li>                     
       <NavLink to='/dashbord/viewBioData'>
       <FaStreetView /> View Biodata</NavLink>                    
       </li>                     
         <li>                     
       <NavLink to='/dashbord/request'>
       <FaAddressCard />   My Contact Request</NavLink>                    
       </li>                     
         <li>                     
       <NavLink to='/dashbord/favourite'>
       <MdFavoriteBorder />  My Favourite Page</NavLink>                    
       </li>                     
         <li>                     
       <NavLink to='/dashbord/logOut'>
        <FaLock></FaLock> Logout</NavLink>                    
       </li>
      </>
    }

       {/* admin + users */}
       <div className="divider"></div>                     
         <li>                     
       <NavLink to='/'>
  <FaHome></FaHome> Home</NavLink>                    
       </li>
       <li>                     
       <NavLink to='/dashbord/successStory'>
       <FaHandPeace />Success Story</NavLink>                    
       </li>                      
      </ul>                       
     </div>  

     <div className="flex-1">

     <Outlet></Outlet>

     </div>                                                                                    
</div>
);
};

export default Dashbord;