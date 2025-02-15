import React, { useState } from "react";
import background from "../assets/Image/login_singup_bg.png";
import Signup from "./Signup";
function Login({ onClose }) {
  const [showSignup, setShowSignup] = useState(false);
  return (
    <div>
      <div className="fixed inset-0 z-50 backdrop-blur-sm flex justify-center items-center mx-4">
        <div className="text-white bg-black  brightness-125 relative overflow-hidden rounded-xl">
          <img src={background} className="w-auto sm:w-[600px] h-[500px]" />
          <div className="absolute inset-0">
            <svg
              height="30px"
              width="25px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              onClick={onClose}
              className="ml-auto mt-3 mr-3 cursor-pointer "
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M5.29289 5.29289C5.68342 4.90237 6.31658 4.90237 6.70711 5.29289L12 10.5858L17.2929 5.29289C17.6834 4.90237 18.3166 4.90237 18.7071 5.29289C19.0976 5.68342 19.0976 6.31658 18.7071 6.70711L13.4142 12L18.7071 17.2929C19.0976 17.6834 19.0976 18.3166 18.7071 18.7071C18.3166 19.0976 17.6834 19.0976 17.2929 18.7071L12 13.4142L6.70711 18.7071C6.31658 19.0976 5.68342 19.0976 5.29289 18.7071C4.90237 18.3166 4.90237 17.6834 5.29289 17.2929L10.5858 12L5.29289 6.70711C4.90237 6.31658 4.90237 5.68342 5.29289 5.29289Z"
                fill="#0F1729"
              />
            </svg>
            <div className="ml-10 text-left ">
              <h1 className="sm:text-2xl">Login</h1>
              <p className="text-sm text-slate-200 opacity-90">
                Find your next opportunity
              </p>
              <div className="flex flex-col sm:flex-row justify-between mt-3 w-80 gap-3">
                <button className="w-[80%] sm:w-[48%] rounded-xl bg-slate-200 text-gray-500">
                  Google
                </button>
                <button className="w-[80%] sm:w-[48%] rounded-xl bg-blue-600 text-white">
                  Facebook
                </button>
              </div>
              <div className="text-lg sm:text-xl flex items-center my-1 sm:my-4 sm:w-80 w-64">
                <div className="flex-grow border-t"></div>
                <span className="mx-4">Or Log In with Email</span>
                <div className="flex-grow border-t"></div>
              </div>

              <div className="flex flex-col sm:mx-2 my-4 sm:w-80 w-64">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="loginemail"
                  className="border rounded-lg px-5 py-1 my-1 placeholder:text-white"
                  placeholder="Enter email"
                />
              </div>
              <div className="flex flex-col sm:mx-2 my-4 sm:w-80 w-64">
                <label htmlFor="password" className="mb-1">
                  Password
                </label>
                <div className="relative">
                  <input
                    // type={showPassword ? "text" : "password"}
                    id="password"
                    className="border rounded-lg px-5 py-1 w-full placeholder:text-white"
                    placeholder="Enter password"
                  />
                  <button
                    type="button"
                    // onClick={togglePasswordVisibility}
                    className="absolute right-2 top-2 text-gray-500"
                    aria-label="Toggle password visibility"
                  >
                    {/* {showPassword ? <EyeIcon /> : <EyeOffIcon />} */}
                  </button>
                </div>
              </div>
              <button className="w-[200px] mx-6 sm:mx-12 rounded-lg bg-blue-600 text-white py-2">
                Login
              </button>
            </div>
            <div className="text-center sm:-ml-52 mt-4 backdrop-blur-3xl sm:backdrop-blur-none py-2">
              <p>
                Don't have an account?{" "}
                <button
                  className="underline cursor-pointer "
                  onClick={() => {
                    setShowSignup(true);
                  }}
                >
                  Sign in
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
      {showSignup && <Signup onClosed={() => setShowSignup(false)} />}
    </div>
  );
}

export default Login;
