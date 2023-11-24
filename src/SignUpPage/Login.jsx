import { Link } from "react-router-dom";


const Login = () => {
 const handleLogin =(e)=>{
 e.preventDefault()
 }
return (
<div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
    <div className=" w-1/2 mr-6">
   {/* <Lottie animationData={login}></Lottie> */}
    </div>
    <div className="card flex-shrink-0 w-full max-w-md shadow-2xl 
    bg-gradient-to-r from-[#383838] to-[#636262] text-white">
          <div className=" w-1/2 mr-6">
   {/* <Lottie animationData={login}></Lottie> */}
    </div>
      <form onSubmit={handleLogin} className="card-body">
      <h1 className="text-2xl font-bold">Login!</h1>
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
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
        <p className='text-center'>New to our website ?  
        <Link className='text-cyan-400 font-medium' to='/signUp'>
        Sign Up
        </Link></p>
      </form>
      <div className="py-4 text-center">
       <p className="text-center text-lg text-cyan-400">or connect with</p>
       <button className="btn-sm rounded-lg  btn-warning">Google login</button>
      </div>
    </div>
  </div>
</div>
);
};

export default Login;