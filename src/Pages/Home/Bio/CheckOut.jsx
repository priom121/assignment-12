import { useForm } from "react-hook-form";

const CheckOut = () => {
  const {register,handleSubmit } =useForm()
const onSubmit =(data)=>{
     console.log(data);
}

return (
 <div>
        <h3 className="text-4xl font-bold text-center mt-5 text-cyan-500">Check Out</h3> 
        <div className="bg-blue-200 mt-7 rounded-xl py-10  mb-5 max-w-screen-xl mx-auto">
  <form onSubmit={handleSubmit(onSubmit)} >
  <label className="ml-10 ">
       </label>
       <div className="">
       <div className="mx-auto w-1/2">
          <label className="label">
          <span className="label-text text-base">Bio Data Id</span>
          </label>
             <label className="input-group w-full">
               <input type="id" {...register("id", { required: true })} placeholder="id" name="id" className="input input-bordered w-full " />
          </label>
               </div>
       <div className="w-1/2 mx-auto mt-5 ">
       <span className="label-text text-base">Self Data Id</span>
       <label className="input-group">
      <input type="text"  {...register("number", { required: true })}  placeholder="Self Data Id" name="number" className="input input-bordered w-full" />
       </label>
       </div>
       <div className="w-1/2 mx-auto mt-5 ">
       <span className="label-text text-base">Email</span>
       <label className="input-group">
      <input type="email" {...register("email", { required: true })}  placeholder="email" name="email" className="input input-bordered w-full" />
       </label>
       </div>
       <div className="w-1/2 mx-auto mt-5 ">
       <span className="label-text text-base">Stripe card Number
</span>
       <label className="input-group">
      <input type="text" {...register("number", { required: true })} 
       placeholder="Stripe card Number" name="number" className="input input-bordered w-full" />
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