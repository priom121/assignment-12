import { NavLink } from "react-router-dom";
import logo from '../../../public/logo3.jpg'
import useAuth from "../../Hooks/useAuth";
import useAdmin from "../../Hooks/useAdmin";


const Navbar = () => {
  const {user,logOut}= useAuth()
   const {admin} =useAdmin()
  const handleLogOut =(e)=>{
  e.preventDefault()
  logOut()
  }

  
 const navLinks = <>
<ul className="lg:flex items-center gap-5 text-[20px] font-medium">
  <li>
 <NavLink
to="/"
className={({ isActive, isPending }) =>
 isPending ? "pending" : isActive ? "text-red-600 underline" : ""
}
>
 Home
</NavLink>
 </li>                    
 <li>
 <NavLink
to="/biodata"
 className={({ isActive, isPending }) =>
  isPending ? "pending" : isActive ? "text-red-600 underline" : ""
}
>
BioData
</NavLink>
 </li>

 <li>
                                 
 <NavLink
to="/aboutUs"
className={({ isActive, isPending }) =>
 isPending ? "pending" : isActive ? "text-red-600 underline" : ""
}
>
About Us
</NavLink>
 </li>
 <li>
                                 
 <NavLink
to="/contactUs"
className={({ isActive, isPending }) =>
 isPending ? "pending" : isActive ? "text-red-600 underline" : ""
}
>
Contact Us
</NavLink>
 </li>
 {user && admin && (
                <NavLink to="/dashboard/adminDashbord" activeClassName="text-red-500 underline">
                    Dashboard
                </NavLink>
            )}

{user && !admin && <li>
                                 
 <NavLink
to="/dashbord"
className={({ isActive, isPending }) =>
 isPending ? "pending" : isActive ? "text-red-600 underline" : ""
}
>
Dashboard
</NavLink>
 </li>}
                           
 {/* <li>
 <NavLink
to="/login"
 className={({ isActive, isPending }) =>
  isPending ? "pending" : isActive ? "text-red-600 underline" : ""
 }
>
Login
 </NavLink>
 </li> */}
</ul>
 </> 
// fixed 
return (
<div>
<div className=" navbar  z-10  bg-gradient-to-r from-[#383838] to-[#636262] text-white">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content
       mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
      {navLinks}
      </ul>
    </div>
<div>
<a className="flex gap-3 items-center md:text-2xl ">
     <img className=" w-[60px] h-[50px] md:w-[70px] md:h-[60px] rounded-3xl" src={logo }></img>
<span className="text-blue-500 text-3xl font-semibold">Matrimonies Bonding</span></a>
</div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    {navLinks}
    </ul>
  </div>
  <div className="navbar-end">
   <ul>
  <li>
{
  user?.email ? <div className="dropdown dropdown-end md:mr-5 z-[10]">
  <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
      <div className="w-12 rounded-full">
          <img src={user?.photoURL} alt="User Photo" />
      </div>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 mr-4 z-[1]  shadow bg-base-100 rounded-box max-w-[300px] p-5">
                       <li className="font-black text-black ml-3">
               {user?.displayName}
                     </li>
           <li><a className="px-5 text-base text-black" >{user?.email}</a></li>
      <li><button onClick={handleLogOut} className="text-xl text-black font-bold">Logout</button></li>
                                    
                  </ul>
                                    
                    </div>

   :<NavLink
   to="/login"
    className={({ isActive, isPending }) =>
     isPending ? "pending" : isActive ? "text-red-600 underline " : ""
    }
   >
   <div className="text-xl font-semibold underline ">Login</div>
    </NavLink>
}
 </li>
 </ul>
  </div>
</div>                                                                                         
 </div>
 );
};

export default Navbar;