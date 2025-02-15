import React from "react";
import background from "../assets/Image/login_singup_bg.png";
function Signup({ onClosed }) {
  return (
    <div>
      <div className="fixed inset-0 z-50 backdrop-blur-sm flex justify-center items-center px-2">
        <div className="text-white bg-black brightness-125 relative overflow-hidden rounded-xl">
          <img
            src={background}
            className="sm:w-[750px] sm:h-[750px] h-[750px] object-cover object-right"
          />
          <div className="absolute inset-0">
            <svg
              height="30px"
              width="25px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              onClick={onClosed}
              className="ml-auto mt-3 mr-3 cursor-pointer "
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M5.29289 5.29289C5.68342 4.90237 6.31658 4.90237 6.70711 5.29289L12 10.5858L17.2929 5.29289C17.6834 4.90237 18.3166 4.90237 18.7071 5.29289C19.0976 5.68342 19.0976 6.31658 18.7071 6.70711L13.4142 12L18.7071 17.2929C19.0976 17.6834 19.0976 18.3166 18.7071 18.7071C18.3166 19.0976 17.6834 19.0976 17.2929 18.7071L12 13.4142L6.70711 18.7071C6.31658 19.0976 5.68342 19.0976 5.29289 18.7071C4.90237 18.3166 4.90237 17.6834 5.29289 17.2929L10.5858 12L5.29289 6.70711C4.90237 6.31658 4.90237 5.68342 5.29289 5.29289Z"
                fill="#0F1729"
              />
            </svg>
            <div className="ml-10 text-left">
              <h1 className="text-2xl">Signup</h1>
              <p className="text-sm text-slate-200 opacity-90">
                Find your next opportunity
              </p>
              <div className="flex justify-between mt-3 w-80">
                <button className="w-[48%] rounded-xl bg-slate-200 text-gray-500">
                  Google
                </button>
                <button className="w-[48%] rounded-xl bg-blue-600 text-white">
                  Facebook
                </button>
              </div>
              <div className="flex items-center my-4 w-80">
                <div className="flex-grow border-t"></div>
                <span className="mx-4">Or Signup</span>
                <div className="flex-grow border-t"></div>
              </div>
              <div className="flex flex-col mx-2 my-4 w-80">
                <label htmlFor="email">Fullname</label>
                <input
                  type="name"
                  id="signupemail"
                  className="border rounded-lg px-5 py-1 my-1 placeholder:text-white"
                  placeholder="Enter Fullname"
                />
              </div>
              <div className="flex flex-col mx-2 my-4 w-80">
                <label htmlFor="email">Mobile Number</label>
                <input
                  type="phonenumber"
                  id="PhoneNumber"
                  className="border rounded-lg px-5 py-1 my-1 placeholder:text-white"
                  placeholder="Enter Mobile Number"
                />
              </div>
              <div className="flex flex-col mx-2 my-4 w-80">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="loginemail"
                  className="border rounded-lg px-5 py-1 my-1 placeholder:text-white"
                  placeholder="Enter email"
                />
              </div>
              <div className="flex flex-col mx-2 my-4 w-80">
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
              <div className="flex flex-col mx-2 my-4 w-80">
                <label htmlFor="confirmpassword" className="mb-1">
                  Confirm Password
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
            </div>
            <div className="flex justify-center my-4 w-80">
              <button className="w-[200px] rounded-lg bg-blue-600 text-white py-2">
                Signup
              </button>
            </div>
            <div className="text-center sm:-ml-52 mt-4 backdrop-blur-3xl sm:backdrop-blur-none py-2">
              <p>
                Already have an account?{" "}
                <button
                  className="underline cursor-pointer "
                  onClick={onClosed}
                >
                  Login
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
