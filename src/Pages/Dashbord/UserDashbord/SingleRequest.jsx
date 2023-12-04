
const SingleRequest = ({requests}) => {
 const { email,name ,id} =requests;
  return (
  <div className="flex justify-between">
         <tr className="text-base">
        <td >{name}</td>
        <th>{id}</th>
        <td>{email}</td>
      
      </tr>                                                                                    
  </div>
 );
};

export default SingleRequest;