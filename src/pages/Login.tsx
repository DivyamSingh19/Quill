import { useEffect, useState } from "react";
import { LockClosedIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import authService from "../appwrite/auth";
import { login as storeLogin } from "../store/authSlice";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import toast from "react-toastify";
const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const [error, setError] = useState("");
  const login = async (data) => {
    setError("");
    try {
      const session = await authService.login(data);
      if (session) {
        const userData = await authService.getCurrentUser();
        if (userData) dispatch(storeLogin(userData));
        navigate("/")
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div className="w-screen h-screen absolute left-0 top-0  ">
      <div className="flex w-screen h-screen absolute left-0 top-0">
         
        <div className="hidden md:flex md:w-1/2  items-center justify-center ">
          <img src={assets.banner} alt="" />
        </div>

        {/* Right side with login form */}
        <div className="w-full md:w-1/2 p-8 flex items-center justify-center">
          <div className="max-w-sm mx-auto">
            <h2 className="text-white text-2xl font-medium mb-6">
              Welcome Back!
            </h2>

            <form onSubmit={handleSubmit(login)} className="space-y-4">
              <div>
                <label className="text-sm text-gray-400">Email Address</label>
                <div className="relative mt-1">
                  <input
                    type="email"
                    className="w-full bg-transparent border border-gray-800 rounded p-3 text-white focus:outline-none focus:border-emerald-500"
                    placeholder="Enter your email"
                    {...register("email", {
                      required: true,
                      validate: {
                        matchPatern: (value) =>
                          /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(
                            value
                          ) || "Email address must be a valid address",
                      },
                    })}
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
                    {...register("password", {
                      required: true,
                    })}
                  />
                  <LockClosedIcon className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500" />
                </div>
              </div>

              <div className="flex items-center justify-between gap-5">
                <label className="flex items-center justify-between">
                  <input
                    type="checkbox"
                    className="rounded border-gray-800 text-emerald-500 focus:ring-emerald-500"
                  />
                  <span className="ml-2 text-sm text-gray-400">
                    Remember me{" "}
                  </span>
                </label>
                <a
                  href="#"
                  className="text-sm text-emerald-500 hover:text-emerald-400"
                >
                  Forgot Password?
                </a>
              </div>

              <button
                type="submit"
                className="w-full bg-green-700 text-white rounded p-3 hover:bg-emerald-600 cursor-pointer transition-colors"
              >
                LOGIN
              </button>

              <div className="flex items-center my-4">
                <div className="flex-grow border-t border-gray-800"></div>
                <span className="px-4 text-sm text-gray-500">OR</span>
                <div className="flex-grow border-t border-gray-800"></div>
              </div>

              <button
                type="button"
                className="w-full border border-gray-800 text-white rounded p-3 hover:bg-gray-900 transition-colors flex items-center justify-center gap-6"
              >
                <FcGoogle size={20} />
                Signup with Google
              </button>
              
            </form>

            <p className="mt-6 text-center text-sm text-gray-400">
              Not on Quill yet?{" "}
              <a
                href="/signup"
                className="text-emerald-500 hover:text-emerald-400"
              >
                Sign up
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
