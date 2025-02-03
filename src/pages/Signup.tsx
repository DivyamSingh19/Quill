import { useEffect } from "react"
import { LockClosedIcon, EnvelopeIcon, UserIcon } from "@heroicons/react/24/solid";
import {FcGoogle } from 'react-icons/fc'
import {FaGithub} from 'react-icons/fa'
 

const Signup = () => {
     
    useEffect(() => {
         
        document.body.style.overflow = "hidden";
    
        return () => {
           
          document.body.style.overflow = "auto";
        };
      }, []);   

  return (
    <div className="absolute top-0 left-0 flex min-h-screen w-screen justify-center items-center bg-[radial-gradient(500px_circle_at_bottom,_var(--tw-gradient-stops))] from-gradient via-mid to-background">
      <div className=" backdrop-blur-md md:max-w-[1000px] sm:max-w-[7000px] text-center p-10 rounded-xl md:border border-white shadow-2xl">
        <h2 className="text-white text-3xl font-bold mb-2 ">
          Create an account
        </h2>
        <p className="mb-5  text-sm">
          Already have an account?{" "}
          <a href="#" className="text-blue-400 hover:text-blue-500 underline">
            Login
          </a>{" "}
        </p>

        <form method="#" action="#" className="flex flex-col">
          <div className="relative flex justify-between">
             
            <UserIcon className="w-6 h-6 absolute left-3 top-1/3 transform -translate-y-1/2 " />
            <input
              type="text"
              placeholder="First Name"
              className="p-3 pl-15 mb-4 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 border border-gray-400 "
              required
            />
           
            
            <input
              type="text"
              placeholder="Last Name"
              className="p-3 pl-15 mb-4 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 border border-gray-400 "
              required
            />
             
          </div>

          <div className="relative">
            <EnvelopeIcon className="w-6 h-6 absolute left-3 top-1/3 transform -translate-y-1/2  " />
            <input
              type="email"
              placeholder="Email"
              className="p-3 pl-15 mb-4 w-full rounded-md  focus:outline-none focus:ring-2 focus:ring-blue-400 border border-gray-400 "
              required
            />
          </div>
          <div className="relative">
            <EnvelopeIcon className="w-6 h-6 absolute left-3 top-1/3 transform -translate-y-1/2  " />
            <input
              type="text"
              placeholder="Username"
              className="p-3 pl-15 mb-4 w-full rounded-md  focus:outline-none focus:ring-2 focus:ring-blue-400 border border-gray-400"
            />
          </div>

          <div className="relative">
            <LockClosedIcon className="w-6 h-6 absolute left-3 top-1/3 transform -translate-y-1/2 " />
            <input
              type="password"
              placeholder="Password"
              className="p-3 pl-15  mb-4 w-full rounded-md  focus:outline-none focus:ring-2 focus:ring-blue-400 border border-gray-400 "
              required
            />
          </div>
          

          <div className="flex justify-center mt-2 mb-4 text-sm">
            <input
              type="checkbox"
              className="w-4 h-4 text-blue-500 bg-gray-700 border-gray-600 rounded focus:ring-2 focus:ring-blue-500 focus:ring-offset-gray-800"
            />
            <p className="ml-2">
              I agree to the
              <a
                href="#"
                className="text-blue-400 hover:text-blue-500 underline ml-2"
              >
                Terms&Conditions
              </a>
            </p>
          </div>
          <div className=" w-full relative">
            <FcGoogle className="w-6 h-6 absolute left-3 top-1/3 transform -translate-y-1/2 " />
            <button
              
              className="p-3 pl-15  mb-4 w-full rounded-md  focus:outline-none focus:ring-2 focus:ring-blue-400 border border-gray-400 "> Signup With Google
              
           </button>
          </div>
          <div className="relative">
            <FaGithub className="w-6 h-6 absolute left-3 top-1/3 transform -translate-y-1/2 " />
            <button className="p-3 pl-15  mb-4 w-full rounded-md  focus:outline-none focus:ring-2 focus:ring-blue-400 border border-gray-400 "> Signup With Github</button>
          </div>
          <div className="flex items-center justify-center"> 
          <button className="  mt-4 p-3 w-1/3 cursor-pointer font-semibold bg-gradient-to-r from-blue-500 to-blue-700 hover:scale-105 hover:brightness-110 rounded-lg shadow-lg transition duration-300 ">
            Sign up
          </button>
          </div>
        </form>
      </div>
       
    </div>
  );
}

export default Signup