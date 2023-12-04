

const Progress = () => {
 return (
  <div className="py-5 ">
   <h3 className="text-center text-3xl mt-3">Our Success Counter</h3>
  <div className="grid grid-cols-1 md:grid-cols-4">
  <div className="card w-96 bg-base-100 shadow-xl">
  <div className="card-body shadow shadow-blue-500">
    <h2 className="card-title">Total Biodata</h2>
    <h2 className="card-title">30%</h2>
    <progress className="progress progress-secondary w-56" value="40" max="100"></progress>
  </div>
</div>                                                                                   
   <div className="card w-96 bg-base-100 shadow-xl">
  <div className="card-body shadow shadow-blue-500">
    <h2 className="card-title">Total Boys</h2>
    <h2 className="card-title">40%</h2>
    <progress className="progress progress-accent w-56" value="40" max="100"></progress>
  </div>
</div>                                                                                   
   <div className="card w-96 bg-base-100 shadow-xl">
  <div className="card-body shadow shadow-blue-500">
    <h2 className="card-title">Total girls</h2>
    <h2 className="card-title">55%</h2>
    <progress className="progress progress-accent w-56" value="70" max="100"></progress>
  </div>
</div>                                                                                   
   <div className="card w-96 bg-base-100 shadow-xl">
  <div className="card-body shadow shadow-blue-500">
    <h2 className="card-title">marrige copleted</h2>
    <h2 className="card-title">50%</h2>
    <progress className="progress progress-info w-56" value="70" max="100"></progress>
  </div>
</div> 
   </div>                                                                                  
  </div>
   );
};

export default Progress;