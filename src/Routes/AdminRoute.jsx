import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import useAdmin from "../Hooks/useAdmin";


const AdminRoute = ({children}) => {
const {user,loading} =useAuth()
const [admin,adminLoading] =useAdmin()
const location = useLocation()
console.log(location.pathname);
if(loading || adminLoading){
return <span className="loading loading-spinner text-secondary"></span>
}
if(user && admin){
   return children
}

return <Navigate to='/login' state={{form:location}} replace>Login</Navigate>

};

export default AdminRoute;