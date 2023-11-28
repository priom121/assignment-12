import { FaDeleteLeft } from "react-icons/fa6";
const FavoriteDetails = ({favorites,handleDelete}) => {
  const {_id, Name ,Permanent_Division_Name,Occupation,id} =favorites;

 return (
<div className=" bg-lime-300 ">
  <table className="table">

    <tbody>
      <tr>
        <th className="text-base">
       {Name}
        </th>
        <td>
          <div className=" space-x-3">
              <div className="font-bold text-base">{id}</div>
          </div>
          
        </td>
        
        <td>
        <td className="text-base">{Permanent_Division_Name}</td>
        </td>
        <td className="text-base">{Occupation}</td>
        <th className='text-2xl font-bold'>
         <button onClick={()=>handleDelete(_id)}><FaDeleteLeft /></button>
        </th>
      </tr>
    
    </tbody>
  </table>
</div>
 );
};

export default FavoriteDetails;