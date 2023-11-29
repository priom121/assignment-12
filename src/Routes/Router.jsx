import {
 createBrowserRouter,
 } from "react-router-dom";
import MainLayOut from "../Layout/MainLayOut";
import Error from "../Pages/Error/Error";
import Home from "../Pages/Home/Home";
import BioData from "../Pages/Home/Bio/BioData";
import ContactUs from "../Pages/Home/Contact/ContactUs";
import Login from "../SignUpPage/Login";
import SignUp from "../SignUpPage/SignUp";
import AboutUs from "../Pages/Home/About/AboutUs";
import PrivateRoute from "./PrivateRoute";
import ProfileDetails from "../Pages/ProfileCard/ProfileDetails";
import BioOneCard from "../Pages/Home/Bio/BioOneCard";
import Dashbord from "../Layout/Dashbord";
import EditBioData from "../Pages/Dashbord/EditBioData";
import ViewBioData from "../Pages/Dashbord/ViewBioData";
import Favorite from "../Pages/Dashbord/Favorite";
import ContactRequest from "../Pages/Dashbord/ContactRequest";
import CheckOut from "../Pages/Home/Bio/CheckOut";
import SuccessStory from "../Pages/Dashbord/SuccessStory";
import AdminDashbord from "../Pages/Dashbord/Admin/AdminDashbord";
import ManageUsers from "../Pages/Dashbord/Admin/ManageUsers";
import LogOutUser from "../Pages/Dashbord/LogOutUser";
import AdminLogOut from "../Pages/Dashbord/Admin/AdminLogOut";
import AdminRoute from "./AdminRoute";
import ApprovePremium from "../Pages/Dashbord/Admin/ApprovePremium";
import ApprovedContact from "../Pages/Dashbord/Admin/ApprovedContact";



export const router = createBrowserRouter([
 {
  path: "/",
  element: <MainLayOut></MainLayOut>,
  errorElement:<Error></Error>,
  children:[
     {
        path:'/',
        element:<Home></Home>                      
     },
     {
       path:'/biodata',
       element:<BioData></BioData>
    
     },
     {
       path:'/bioOneCard/:id',
       element:<PrivateRoute><BioOneCard></BioOneCard></PrivateRoute>,
       loader:({params})=>fetch(`http://localhost:5000/biodata/${params.id}`)
     },
     {
       path:'/ContactUs',
       element:<PrivateRoute><ContactUs></ContactUs></PrivateRoute>
     },
     {
       path:'/aboutUs',
       element:<AboutUs></AboutUs>
     },
     {
       path:'/checkOut',
       element:<CheckOut></CheckOut>
      
     },
     {
       path:'/login',
       element:<Login></Login>
     },
     {
       path:'/signUp',
       element:<SignUp></SignUp>
     },
     {
       path:'/profileDetails/:id',
       element:<PrivateRoute><ProfileDetails></ProfileDetails></PrivateRoute>,
       loader:({params})=>fetch(`http://localhost:5000/blog/${params.id}`)
       
     },
  ] 
},
{
  path:'/dashbord',
  element:<PrivateRoute><Dashbord></Dashbord></PrivateRoute>,
  children:[
    {
      path:'/dashbord/editBiodata',
      element:<PrivateRoute><EditBioData></EditBioData></PrivateRoute>
    },
    {
      path:'/dashbord/viewBioData',
      element:<PrivateRoute><ViewBioData></ViewBioData></PrivateRoute>
    },
    {
      path:'/dashbord/request',
      element:<ContactRequest></ContactRequest>
    },
    {
      path:'/dashbord/favourite',
      element:<PrivateRoute><Favorite></Favorite></PrivateRoute>
    },
    {
      path:'/dashbord/successStory',
      element:<PrivateRoute><SuccessStory></SuccessStory></PrivateRoute>
    },
    {
       path:'/dashbord/logout',
       element:<LogOutUser></LogOutUser>
    },
    // admin-----
  {
    path:'/dashbord/adminDashbord',
    element:<AdminRoute><AdminDashbord></AdminDashbord></AdminRoute>
    // element:<AdminDashbord></AdminDashbord>
  },
  {
    path:'/dashbord/manageUsers',
    element:<AdminRoute><ManageUsers></ManageUsers></AdminRoute>
    // element:<ManageUsers></ManageUsers>
  },
  {
   path:'/dashbord/premium',
   element:<AdminRoute><ApprovePremium></ApprovePremium></AdminRoute>
  },
  {
   path:'/dashbord/approvedContact',
   element:<AdminRoute><ApprovedContact></ApprovedContact></AdminRoute>
  },
  {
    path:'/dashbord/adminLogOut',
    element:<AdminLogOut></AdminLogOut>
  }
  ]
}
]);
export default router

