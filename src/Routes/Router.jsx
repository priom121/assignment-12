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
       path:'/bioData',
       element:<BioData></BioData>
     },
     {
       path:'/ContactUs',
       element:<ContactUs></ContactUs>
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
  ]
},
]);
export default router

