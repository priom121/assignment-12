

const ContactUs = () => {
 return (
  <div>
      <h3 className="text-4xl font-bold text-center text-lime-500">Contact Us</h3>
       <div className="gap-5 drop-shadow-xl shadow-stone-800  w-full h-full ">
        

<input type="text" placeholder="any Q moderator" className="mx-auto mt-10 input block input-bordered  w-full max-w-xs" />

<input type="text" placeholder="any Q Admin" className=" mx-auto input mt-4  block input-bordered  w-full max-w-xs" />


<input type="text" placeholder="any Q members" className=" mx-auto input mt-4 block input-bordered  w-full max-w-xs" />
     <div className="text-center mt-6 ">
     <button className="btn btn-info ">submit</button>
     </div>
        </div>                                                                         
</div>
 );
};

export default ContactUs;