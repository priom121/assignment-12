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
       path:'/ContactUs',
       element:<PrivateRoute><ContactUs></ContactUs></PrivateRoute>
     },
     {
       path:'/aboutUs',
       element:<AboutUs></AboutUs>
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
]);
export default router

