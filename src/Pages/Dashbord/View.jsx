
const View = ({bios}) => {
 const { id,photo,biodata_type,Age,Occupation,
  name,Location, Date, Height,Weight,Race,father_name ,mother_name,
  Present_Division_Name, Partner_Height,partner_Weight, email, number} = bios
 const handleClose =()=>{
    // e.preventDefault()
 }
  const handleAdd =()=>{
     
     console.log("handle")
  }
 return (
                  <div className="max-w-screen-xl mx-auto">

<div className="max-w-md mt-5 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                           <div>
                               <img className="rounded-t-lg w-full h-72" src={photo} alt="" />
                           </div>
                           <div className="p-5">
                               <div className="flex justify-between">
                                   <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"> id : {id}</h5>
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Biodata Type :{biodata_type}
                                    </h5>
                               </div>
                               <p className="mb-3 font-normal text-white"> Name : {name}</p>
                           <p className="mb-3 font-normal text-white"> Date of Birth: {Date}</p>
                           <div className="flex justify-evenly">
                           <p className="mb-3 font-normal text-white"> Height : {Height}</p>
                           <p className="mb-3 font-normal text-white">Weight : {Weight}</p>
                           <p className="mb-3 font-normal text-white"> Race : {Race}</p>
                           </div>
                           <div className="flex justify-between">
                           <p className="mb-3 font-normal text-white"> Father Name : {father_name}</p>
                           <p className="mb-3 font-normal text-white">Mother Name : {mother_name}</p>
                           </div>
                               <p className="mb-3 font-normal text-white">Permanent Division Name :</p>
                               <p className="mb-3 font-normal text-white">Present Division Name : {Present_Division_Name}</p>
                             <div className="flex justify-evenly">
                             <p className="mb-3 font-normal text-white "> {Location}    </p>
                             <p className="mb-3 font-normal text-white ">Expected Partner Height : {Partner_Height}</p>
                             <p className="mb-3 font-normal text-white ">Expected Partner Weight : {partner_Weight}</p>
                             </div>
                             <div className="flex justify-between">
                             <p className="mb-3 font-normal text-white ">Age : {Age}</p>
                             <p className="mb-3 font-normal text-white ">Occupation : {Occupation}</p>
                             </div>
                             <p className="mb-3 font-normal text-white ">Contact Email : {email}</p>
                             <p className="mb-3 font-normal text-white "> Mobile Number : { number}</p>
                           </div>
                           <div className="text-center w-full p-2">
{/* Open the modal using document.getElementById('ID').showModal() method */}
<button className="btn" onClick={()=>document.getElementById('my_modal_5').showModal()}>Premium</button>
<dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
  <div className="modal-box">
    <h3 className="font-bold text-lg">Hello!</h3>
    <p className="py-4 text-base text-red-500"> Are you sure to make your
biodata premium</p>
    <div className="modal-action">
      <form  method="dialog gap-5">
        <button onClick={handleAdd} className="btn mr-5  btn-secondary">Yes</button>
        {/* if there is a button in form, it will close the modal */}
        <button onClick={handleClose} className="btn btn-warning">Close</button>
      </form>
    </div>
  </div>
</dialog>
                           </div>
                    
                           </div>  
 
                           
                            </div>
 );
};

export default View;