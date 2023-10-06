import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext.jsx";
import {Link, useNavigate} from 'react-router-dom'
import { useEffect } from "react";
 
 function LoginPage() {

  const {
    register, 
    handleSubmit, 
    formState: { errors },
  } = useForm();
  const {signin, errors: signinErrors, isAuthenticated} = useAuth();
  const navigate = useNavigate()

   const onSubmit = handleSubmit((data) => {
    signin(data);
});

useEffect(() => {
   if (isAuthenticated) navigate("/tasks");
}, [isAuthenticated]);

return (
  <div className="flex  h-screen items-center justify-center">
    <div className="bg-zinc-800 max-w-md w-full p-10 rounded-md">
    { signinErrors.map((error, i) => (
         <div className="bg-red-500 p-2 text-white text-center my-2" key={i}>
          {error}
         </div> ))
      }

      <h1 className="text-3xl font-bold my-2"> Login </h1>
      <form onSubmit={onSubmit}>
        <input className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
         type="email" { ...register("email", { required: true })} 
        placeholder="email"
        />
        {errors.email && (
        <p className="text-red-500"> Email is required</p>
         )}

  <input className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
      type="password" { ...register("password", { required: true })} 
     placeholder="Password"
     />
     {errors.password && (
      <p className="text-red-500"> Password is required</p>
   )}

  <button type="submit"
      className="bg-sky-500 text-white px-4 py-2 rounded-md my-2">
    Login
  </button>
 </form>
 <p className="flex gap-x-2 justify-between">
  Don't have an accont? <Link to="/register"
  className="text-sky-500">Sign up</Link>
 </p>
  </div>
</div>
  )
}

export default LoginPage;