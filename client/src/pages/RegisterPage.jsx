import { useForm } from "react-hook-form"
import { useAuth } from "../context/AuthContext.jsx";
import { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

function RegisterPage() {
 const { 
  register, 
  handleSubmit, 
  formState:{ errors },
 } = useForm();
 const { signup, isAuthenticated, errors: registerErrors } = useAuth();
 const navigate = useNavigate();

 useEffect(() => {
if (isAuthenticated) navigate('/tasks');
}, [isAuthenticated]);

 const onSubmit = handleSubmit(async (values) => {
  signup(values);
      });

  return (
    <div className="flex  h-screen items-center justify-center">
    <div className="bg-zinc-800 max-w-md p-10 rounded-md">
      {registerErrors.map((error, i) => (
         <div className="bg-red-500 p-2 text-white" key={i}>
          {error}
         </div> 
         ))}

      <form onSubmit={onSubmit}>
      <h1 className="text-3xl font-bold my-2">Register</h1>
       <input className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
        type="text" { ...register("username", { required: true })}
        placeholder="Username"
        />
        {errors.username && (
        <p className="text-red-500"> Username is required</p>
        )}

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
       Register
    </button>
      </form>

      <p className="flex gap-x-2 justify-between">
         Already have an account?{" "} 
         <Link to='/login' className="text-sky-500">
          Login
          </Link>
      </p>
    </div>
    </div>
  );
}


export default RegisterPage;