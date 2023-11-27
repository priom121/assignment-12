import { NavLink, Outlet } from "react-router-dom";
import { FaEdit ,FaStreetView ,FaAddressCard, FaLock, FaHome } from "react-icons/fa";
import { MdFavoriteBorder } from "react-icons/md";
const Dashbord = () => {
return (
 <div className="flex max-w-screen-xl mx-auto">
    <div className="w-64 min-h-screen bg-cyan-400">
       <ul className="menu p-4 text-lg">
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
       <div className="divider"></div>                     
         <li>                     
       <NavLink to='/'>
  <FaHome></FaHome> Home</NavLink>                    
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