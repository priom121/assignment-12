import axios from "axios";

const axiosSecure = axios.create({
  baseURL:'https://matrimonius-server.vercel.app'
})
const useAxiosSecure = () => {
 axiosSecure.interceptors.request.use(function(config){
  const token = localStorage.getItem('access-token')
  // console.log('reqeuest interceptors',token);
  config.headers.authorization = `Bearer ${token}`
  return config;
  
 },function(error){
  return Promise.reject(error)
 })

axiosSecure.interceptors.response.use(function(response){
  return response;
  },async(error)=>{
  const status = error.response.status
  console.log('status error',status);
  if(status === 401 || status === 403){
  // await logOut()
  //  navigate('/login')
  
  }
   return Promise.reject(error)
  })
 return axiosSecure ;
};

export default useAxiosSecure;