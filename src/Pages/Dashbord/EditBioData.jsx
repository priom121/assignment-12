import { useForm } from "react-hook-form";


const EditBioData = () => {
 const { register, handleSubmit, formState: { errors }} = useForm();
 const onSubmit =(data)=>{
      console.log(data);
 }
 return (
 <div className="bg-orange-400 w-full py-12 ml-10  rounded-xl  
 mt-5 mb-5 max-w-screen-xl mx-auto h-full">
  <form onSubmit={handleSubmit(onSubmit)} >
 <label className="ml-10 text-center ">
  <span className=" text-2xl mt-4 font-medium">Edit BioData</span>
     </label>
     <div className="">
     <div className="mx-auto w-1/2">
     <span className="label-text text-base">Biodata Type</span>
     <label className="input-group" {...register("biodata type", { required: true })} >
    <select placeholder="Biodata Type" name="biodata type"
       className="w-full select select-bordered ">
          <option selected>Male</option>
          <option>Female</option>
 </select>
     </label>
             </div>
     <div className="w-1/2 mx-auto mt-5 ">
     <span className="label-text text-base">Name</span>
     <label className="input-group">
    <input type="text"  {...register("name", { required: true })} placeholder="Name" name="name" className="input input-bordered w-full" />
    {/* {errors.name && <span className="text-red-500">name is required</span>} */}
     </label>
     </div>
     <div className="w-1/2 mx-auto mt-5 ">
     <span className="label-text text-base">Image</span>
     <label className="input-group">
    <input type="text"  {...register("photo", { required: true })} placeholder="photo" name="photo" className="input input-bordered w-full" />
     </label>
     </div>
     <div className="w-1/2 mx-auto mt-5 ">
     <span className="label-text text-base">Division</span>
     <label className="input-group">
    <select placeholder="Pickup Location"  {...register("Location",{ required: true })} name="Location"
       className="w-full select select-bordered  ">
          <option selected>Dhaka</option>
          <option>Chattagram</option>
          <option>Rangpur</option>
          <option>Barisal</option>
          <option>Khulna</option>
          <option>Maymansign</option>
          <option>Sylhet</option>
 </select>
     </label>
     </div>
     <div className="w-1/2 mx-auto mt-5 ">
     <span className="label-text text-base">Date of birth</span>
     <label className="input-group">
    <input type="Date"{...register("Date", { required: true })}  placeholder=" Expired Date" name="Date" className="input input-bordered w-full" />
     </label>
     </div>
     <div className="mx-auto w-1/2">
     <span className="label-text text-base">user height</span>
     <label className="input-group">
    <select placeholder="height" name="Height" {...register("Height", { required: true })}
       className="w-full select select-bordered ">
          <option >5.5</option>
          <option>5.6</option>
          <option>5.7</option>
          <option>5.8</option>
          <option>5.9</option>
          <option>5.10</option>
          <option>6</option>
 </select>
     </label>
             </div>
     <div className="mx-auto w-1/2">
     <span className="label-text text-base">user weight</span>
     <label className="input-group">
    <select placeholder="weight" name="Weight"  {...register("Weight", { required: true })}
       className="w-full select select-bordered ">
          <option >55</option>
          <option>56</option>
          <option>57</option>
          <option>58</option>
          <option>59</option>
          <option>60</option>
          <option>62</option>
          <option>65</option>
 </select>
     </label>
             </div>
             <div className="w-1/2 mx-auto mt-5 ">
     <span className="label-text text-base">Father Name</span>
     <label className="input-group">
    <input type="text" {...register("father name", { required: true })} placeholder="Father Name" name="father name" className="input input-bordered w-full" />
     </label>
     </div>
             <div className="w-1/2 mx-auto mt-5 ">
     <span className="label-text text-base">Mother Name</span>
     <label className="input-group">
    <input type="text" {...register("mother name", { required: true })} placeholder="Mother Name" name="mother name" className="input input-bordered w-full" />
     </label>
     </div>
     {/* partner age height weight number */}
     <div className="w-1/2 mx-auto mt-5 ">
     <span className="label-text text-base">Partner Age</span>
     <label className="input-group">
    <input type="text"{...register("age", { required: true })} placeholder="Partner Age" name="age" className="input input-bordered w-full" />
     </label>
     </div>
     <div className="flex">
     <div className="w-[25%]  mx-auto">
     <span className="label-text text-base">Partner Height</span>
     <label className="input-group">
    <select placeholder="partner height" name="Partner Height" {...register("Partner Height",{ required: true })}
       className="w-full select select-bordered ">
          <option >5.1</option>
          <option>5.2</option>
          <option>5.3</option>
          <option>5.4</option>
          <option>5.5</option>
          <option>5.6</option>
          <option>5.7</option>
          <option>5.8</option>
 </select>
     </label>
             </div>
             <div className="w-[25%] mx-auto">
     <span className="label-text text-base">partner Weight</span>
     <label className="input-group">
    <select placeholder="partner weight" name="partner Weight" {...register("partner Weight", { required: true })}
       className="w-full select select-bordered ">
          <option >50</option>
          <option>52</option>
          <option>53</option>
          <option>55</option>
          <option>58</option>
          <option>59</option>
          <option>63</option>
          <option>65</option>
 </select>
     </label>
             </div>                      
     </div>
     <div className="w-1/2 mx-auto mt-5 ">
     <span className="label-text text-base">user email</span>
     <label className="input-group">
    <input type="email" {...register("email", { required: true })} placeholder="user email" name="email" className="input input-bordered w-full" />
     </label>
     </div>
     <div className="w-1/2 mx-auto mt-5 ">
     <span className="label-text text-base">user number</span>
     <label className="input-group">
    <input type="text" {...register("number", { required: true })}  placeholder="user number" name="number" className="input input-bordered w-full" />
     </label>
     </div>

   <div className="text-center mt-5">
  <button className="btn btn-info ">Publish Now</button>
  </div>
     </div>
 </form>   
</div>
);
};

export default EditBioData;