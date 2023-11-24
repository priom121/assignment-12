import { Link } from "react-router-dom";


const SignUp = () => {
  const handleSignUp =(e)=>{
    e.preventDefault()
  }
return (
<div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
    <div className=" w-1/2 mr-6">
    {/* <img src={img} alt="" /> */}
    {/* <Lottie animationData={animation}></Lottie> */}
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm 
    bg-gradient-to-r from-[#383838] to-[#63626232] text-white">
      <form onSubmit={ handleSignUp } className="card-body">
      <h1 className="text-2xl font-bold">Sign Up</h1>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-white">Name</span>
          </label>
          <input type="Name" placeholder="Name" name='Name' className="input text-black input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-white">Email</span>
          </label>
          <input type="email" placeholder="email" name='email' className="input text-black input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-white">Password</span>
          </label>
          <input type="password" placeholder="password" name='password' className="input text-black input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover text-white">Forgot password?</a>
          </label>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-white">Photo</span>
          </label>
          <input type="photo" placeholder="photo url" name='photo' className="input text-black input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover text-white">Forgot password?</a>
          </label>
        </div>
      
              
        <div className="form-control mt-6">
          <button className="btn btn-primary">Sign up</button>
        </div>
        <p className='text-center'>Already Have An Account? <Link
         className='text-blue-500' to='/login'>
        Login
        </Link></p>
      </form>
    </div>
  </div>
</div>
   );
};

export default SignUp;