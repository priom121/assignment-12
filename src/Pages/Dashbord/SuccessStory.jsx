
const SuccessStory = () => {
 const handleAdd =()=>{

 }

 return (
  <div>
      <div className="bg-pink-200 ml-4 rounded-xl py-10 mt-5 mb-5 max-w-screen-xl mx-auto">
  <form onSubmit={handleAdd} >
  <label className="ml-10 ">
    <span className=" text-2xl mt-4 font-medium">Success Story</span>
       </label>
       <div className="">
       <div className="mx-auto w-1/2">
          <label className="label">
          <span className="label-text text-base">Couple Image</span>
          </label>
             <label className="input-group w-full">
               <input type="text" placeholder="Photo" name="photo" className="input input-bordered w-full " />
          </label>
               </div>
       <div className="w-1/2 mx-auto mt-5 ">
       <span className="label-text text-base">Marrige Date</span>
       <label className="input-group">
      <input type="date" placeholder="Marrige Date" name="date" className="input input-bordered w-full" />
       </label>
       </div>
       <div className="w-1/2 mx-auto mt-5 ">
       <span className="label-text text-base"> Review Star</span>
       <label className="input-group">
      <input type="text" placeholder=" Review Star" name="st" className="input input-bordered w-full" />
       </label>
       </div>
       <div className="w-1/2 mx-auto mt-5 ">
       <span className="label-text text-base">Success Story
</span>
       <label className="input-group">
      <input type="text" placeholder=" Success Story" name="additional" className="input input-bordered w-full" />
       </label>
       </div>
     <div className="text-center mt-5">
     <button className="btn btn-info ">Post</button>
     </div>
       </div>



  </form>   
</div>                                                                                      
  </div>
 );
};

export default SuccessStory;