
const CheckOut = () => {
const handleSubmit =(e)=>{
   e.preventDefault() 
}

return (
 <div>
        <h3 className="text-4xl font-bold text-center mt-5 text-cyan-500">Check Out</h3> 
        <div className="bg-blue-200 mt-7 rounded-xl py-10  mb-5 max-w-screen-xl mx-auto">
  <form onSubmit={handleSubmit} >
  <label className="ml-10 ">
       </label>
       <div className="">
       <div className="mx-auto w-1/2">
          <label className="label">
          <span className="label-text text-base">Bio Data Id</span>
          </label>
             <label className="input-group w-full">
               <input type="text" placeholder="id" name="number" className="input input-bordered w-full " />
          </label>
               </div>
       <div className="w-1/2 mx-auto mt-5 ">
       <span className="label-text text-base">Self Data Id</span>
       <label className="input-group">
      <input type="text" placeholder="Self Data Id" name="number" className="input input-bordered w-full" />
       </label>
       </div>
       <div className="w-1/2 mx-auto mt-5 ">
       <span className="label-text text-base">Email</span>
       <label className="input-group">
      <input type="email" placeholder="email" name="email" className="input input-bordered w-full" />
       </label>
       </div>
       <div className="w-1/2 mx-auto mt-5 ">
       <span className="label-text text-base">Stripe card Number
</span>
       <label className="input-group">
      <input type="text" placeholder="Stripe card Number" name="number" className="input input-bordered w-full" />
       </label>
       </div>
     <div className="text-center mt-5">
     <button className="btn btn-info ">Submit</button>
     </div>
       </div>
  </form>   
</div>                                                                                  
   </div>
  );
};

export default CheckOut;