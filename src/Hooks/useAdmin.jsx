import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const useAdmin = () => {
 const {user} =useContext(AuthContext)
 const axiosSecure = useAxiosSecure()
 const {data : admin ,isPending:adminLoading} = useQuery({
      queryKey:[ 'admin', user?.email  ],
      queryFn:async()=>{
         console.log('user email', user?.email);
         const res = await axiosSecure.get(`/users/admin/${user?.email}`) //error
         console.log(res.data);
         return res.data?.admin
      },   
 })
 return [admin,adminLoading]
};

export default useAdmin;