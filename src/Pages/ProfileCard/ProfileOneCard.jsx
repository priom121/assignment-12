import { Link } from "react-router-dom";

const ProfileOneCard = ({profiles}) => {
 const {_id,Image} =profiles                        
return (


<div className="w-full max-w-sm bg-white border shadow-black border-gray-200 rounded-lg shadow-lg
 dark:bg-gray-800 dark:border-gray-500">
    <a href="#">
        <img className="p-8 h-72 w-full bg-cover " src={Image} alt="product image" />
    </a>
    <div className="px-5 pb-5">
        <div className="flex items-center mt-2.5 mb-5">
        </div>
        <div className=" text-center ">
            {/* <a href="#" className="text-white
             bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none
           focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">View Profile</a> */}
         <Link to={`/profileDetails/${_id}`}>
         <button className="btn w-full btn-info">View Profile</button>
         </Link>
        </div>
    </div>
</div>

);
};

export default ProfileOneCard;