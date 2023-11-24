import Lottie from "lottie-react";
import { Link, useNavigate } from "react-router-dom";
import animation from './signUp.json'
import { useForm } from "react-hook-form"
import useAuth from "../Hooks/useAuth";
import Swal from "sweetalert2";

const SignUp = () => {
  const navigate = useNavigate()
  const { register, handleSubmit,reset, formState: { errors }} = useForm();
  const {createUser ,updateUserProfile} = useAuth()
  const onSubmit = (data) => {
    console.log(data)
    createUser(data.email,data.password)
    .then(result=>{
      const loggedUser =result.user 
      console.log(loggedUser);
      updateUserProfile(data.name , data.photoURL)
      .then(()=>{
        console.log('user profile info updated');
        reset()
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "user register successfully",
          showConfirmButton: false,
          timer: 1500
        })
        navigate('/')
      })
      .catch(error=>console.log(error))
    })
  }


return (
<div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
    <div className=" w-1/2 mr-6">
   
    <Lottie animationData={animation}></Lottie>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm 
    bg-gradient-to-r from-[#383838] to-[#63626232] text-white">
      <form onSubmit={handleSubmit(onSubmit)} className="card-body">
      <h1 className="text-2xl font-bold">Sign Up</h1>
      <div className="form-control">
          <label className="label">
            <span className="label-text text-white">Name</span>
          </label>
          <input type="text"
          {...register("name", { required: true })} placeholder="Name"  className="input text-black input-bordered" required />
       {errors.name && <span className="text-red-500">name is required</span>}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-white">Email</span>
          </label>
          <input type="email" placeholder="email" {...register("email", { required: true })} name='email' className="input text-black input-bordered" required />
          {errors.email && <span className="text-red-500">email is required</span>}
        </div>
          <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
            </label>
       <input type="password"  {...register("password", {
              required: true,
              minLength: 6,
           maxLength: 20,
      pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
      })} placeholder="password" className="input input-bordered text-black" />
  {errors.password?.type === 'required' && <p className="text-red-600">Password is required</p>}
    {errors.password?.type === 'minLength' && <p className="text-red-600">Password must be 6 characters</p>}
   {errors.password?.type === 'maxLength' && <p className="text-red-600">Password must be less than 20 characters</p>}  {errors.password?.type === 'pattern' && <p className="text-red-600">Password must have one Uppercase one lower case, one number and one special character.</p>}
 <label className="label">
      <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label> 
          </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-white">Photo</span>
          </label>
          <input type="photo" placeholder="photo url" {...register("photo", { required: true })} name='photo' className="input text-black input-bordered" required />
        
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