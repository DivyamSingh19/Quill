import { useEffect } from "react";
import { LockClosedIcon, EnvelopeIcon, UserIcon } from "@heroicons/react/24/solid";
import { assets } from "../assets/assets";

const ResetPassword = () => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div className="w-screen h-screen absolute left-0 top-0  ">
      <div className="flex w-screen h-screen absolute left-0 top-0">
        {/* Left side with logo */}
        <div className="hidden md:flex md:w-1/2  items-center justify-center ">
          <img src={assets.banner} alt="" />
        </div>

        {/* Right side with login form */}
        <div className="w-full md:w-1/2 p-8 flex items-center justify-center">
          <div className="max-w-sm mx-auto">
            <h2 className="text-white text-2xl font-medium mb-6">Welcome Back!</h2>
            
            <form className="space-y-4">
            <div>
                <label className="text-sm text-gray-400">Name</label>
                <div className="relative mt-1">
                  <input
                    type="text"
                    className="w-full bg-transparent border border-gray-800 rounded p-3 text-white focus:outline-none focus:border-emerald-500"
                    placeholder="Enter your Name"
                  />
                  <EnvelopeIcon className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500" />
                </div>
              </div>
              <div>
                <label className="text-sm text-gray-400">Email Address</label>
                <div className="relative mt-1">
                  <input
                    type="email"
                    className="w-full bg-transparent border border-gray-800 rounded p-3 text-white focus:outline-none focus:border-emerald-500"
                    placeholder="Enter your email"
                  />
                  <EnvelopeIcon className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500" />
                </div>
              </div>

              <div>
                <label className="text-sm text-gray-400">Password</label>
                <div className="relative mt-1">
                  <input
                    type="password"
                    className="w-full bg-transparent border border-gray-800 rounded p-3 text-white focus:outline-none focus:border-emerald-500"
                    placeholder="Enter your password"
                  />
                  <LockClosedIcon className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500" />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <label className="flex items-center justify-between">
                  <input type="checkbox" className="rounded border-gray-800 text-emerald-500 focus:ring-emerald-500" />
                  <span className="ml-2 text-sm text-gray-400">Remember me{" "}</span>
                </label>
                <a href="#" className="text-sm text-emerald-500 hover:text-emerald-400">Forgot Password?</a>
              </div>

             
              

              
           
            </form>

            
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;