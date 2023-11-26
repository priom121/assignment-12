import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";


const useBioData = () => {

 const axiosPublic = useAxiosPublic()
 const {data :items=[],isPending:loading,refetch} =useQuery({
     queryKey:['biodata'],
     queryFn: async()=>{
       const res = await axiosPublic.get('/biodata')
       return res.data
     }                        
 })
 return [items,loading,refetch];
};

export default useBioData;