import {
 createBrowserRouter,
 } from "react-router-dom";
import MainLayOut from "../Layout/MainLayOut";
import Error from "../Pages/Error/Error";
import Home from "../Pages/Home/Home";


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
       
     }
  ]
},
]);
export default router

