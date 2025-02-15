import React, { useState } from "react";
import Logo from "../assets/Image/mainlogo.jpeg";
import Login from "../Login_Logout/Login";
import Update_menu from "../Update/Update_menu";

function Navbar() {
  const [showLogin, setShowLogin] = useState(false);
  const [showUpdates, setShowUpdates] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const phoneNumber = "916200375776";
  const message = "Hello! I would like to inquire about your services.";
  const isActive = (path) => window.location.pathname === path;

  return (
    <div>
      <div className="bg-white items-center z-20 top-0 mx-auto flex w-full border-b border-gray-200 p-4 overflow-hidden">
        <a href="/">
          <div className="flex items-center">
            <img
              src={Logo}
              alt="logo"
              className="logo h-8 w-8 sm:h-10 sm:w-10 rounded-full"
              loading="lazy"
            />
            <h1 className="text-center mt-auto mb-auto ml-2 sm:ml-4 sm:text-2xl text-xl">
              College91
            </h1>
          </div>
        </a>
        <div className="flex ml-auto mt-auto mb-auto text-center items-center text-xl space-x-5 ">
          <div className="hidden lg:flex mr-6 ml-auto mt-auto mb-auto text-center items-center text-xl space-x-6">
            <a
              href={`/`}
              className={`${isActive(`/`) ? "underline font-semibold" : ""}`}
            >
              Home
            </a>
            {["College", "Hostel", "Course", "About"].map((item) => (
              <a
                key={item}
                href={`/${item.toLowerCase()}`}
                className={`${
                  isActive(`/${item.toLowerCase()}`)
                    ? "underline font-semibold"
                    : ""
                }`}
              >
                {item}
              </a>
            ))}
          </div>

          <div className="flex space-x-2 mr-2 items-center">
            {/* whatsapp */}
            <a
              href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(
                message
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white font-bold rounded-lg"
            >
              <svg
                fill="#54eb6b"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 308 308"
                className="h-5 sm:h-7 sm:w-7 transition-transform duration-200 hover:scale-100"
              >
                <path d="M227.904 176.981c-.6-.288-23.054-11.345-27.044-12.781-1.629-.585-3.374-1.156-5.23-1.156-3.032 0-5.579 1.511-7.563 4.479-2.243 3.334-9.033 11.271-11.131 13.642-.274.313-.648.687-.872.687-.201 0-3.676-1.431-4.728-1.888-24.087-10.463-42.37-35.624-44.877-39.867-.358-.61-.373-.887-.376-.887.088-.323.898-1.135 1.316-1.554 1.223-1.21 2.548-2.805 3.83-4.348.607-.731 1.215-1.463 1.812-2.153 1.86-2.164 2.688-3.844 3.648-5.79l.503-1.011c2.344-4.657.342-8.587-.305-9.856-.531-1.062-10.012-23.944-11.02-26.348-2.424-5.801-5.627-8.502-10.078-8.502-.413 0 0 0-1.732.073-2.109.089-13.594 1.601-18.672 4.802-5.385 3.395-14.495 14.217-14.495 33.249 0 17.129 10.87 33.302 15.537 39.453.116.155.329.47.638.922 17.873 26.102 40.154 45.446 62.741 54.469 21.745 8.686 32.042 9.69 37.896 9.69h.001c2.46 0 4.429-.193 6.166-.364l1.102-.105c7.512-.666 24.02-9.22 27.775-19.655 2.958-8.219 3.738-17.199 1.77-20.458-1.837-3.056-4.16-4.171-7.101-5.583zM156.734 0C73.318 0 5.454 67.354 5.454 150.143c0 26.777 7.166 52.988 20.741 75.928L.212 302.716c-.484 1.429-.124 3.009.933 4.085C1.908 307.58 2.943 308 4 308c.405 0 .813-.061 1.211-.188l79.92-25.396c21.87 11.685 46.588 17.853 71.604 17.853 83.406 0 151.263-67.347 151.263-150.127C308 67.354 240.143 0 156.734 0zm0 268.994c-23.539 0-46.338-6.797-65.936-19.657-.659-.433-1.424-.655-2.194-.655-.407 0-.815.062-1.212.188l-40.035 12.726 12.924-38.129c.418-1.234.209-2.595-.561-3.647-14.924-20.392-22.813-44.485-22.813-69.677 0-65.543 53.754-118.867 119.826-118.867 66.064 0 119.812 53.324 119.812 118.867 0 65.534-53.747 118.85-119.812 118.85z" />
              </svg>
            </a>
            {/* Notification bell */}
            <svg
              fill="#f5a716"
              viewBox="0 0 611.999 611.999"
              xmlns="http://www.w3.org/2000/svg"
              className="cursor-pointer shrink-0 h-5 sm:h-7 sm:w-7"
              onClick={() => {
                setShowUpdates(true);
              }}
            >
              <path d="M570.107 500.254c-65.037-29.371-67.511-155.441-67.559-158.622v-84.578c0-81.402-49.742-151.399-120.427-181.203C381.969 34 347.883 0 306.001 0c-41.883 0-75.968 34.002-76.121 75.849-70.682 29.804-120.425 99.801-120.425 181.203v84.578c-.046 3.181-2.522 129.251-67.561 158.622-7.409 3.347-11.481 11.412-9.768 19.36 1.711 7.949 8.74 13.626 16.871 13.626h164.88c3.38 18.594 12.172 35.892 25.619 49.903 17.86 18.608 41.479 28.856 66.502 28.856 25.025 0 48.644-10.248 66.502-28.856 13.449-14.012 22.241-31.311 25.619-49.903h164.88c8.131 0 15.159-5.676 16.872-13.626 1.711-7.948-2.359-16.013-9.768-19.36zM484.434 439.859c6.837 20.728 16.518 41.544 30.246 58.866H97.32c13.726-17.32 23.407-38.135 30.244-58.866h356.87zM306.001 34.515c18.945 0 34.963 12.73 39.975 30.082-12.912-2.678-26.282-4.09-39.975-4.09s-27.063 1.411-39.975 4.09C271.039 47.246 287.057 34.515 306.001 34.515zM143.97 341.736v-84.685c0-89.343 72.686-162.029 162.031-162.029s162.031 72.686 162.031 162.029v84.826c.023 2.596.427 29.879 7.303 63.465H136.663c6.88-33.876 7.286-61.207 7.307-63.865zM306.001 577.485c-26.341 0-49.33-18.992-56.709-44.246h113.416c-7.379 25.254-30.364 44.246-56.707 44.246z" />
              <path d="M306.001 119.235c-74.25 0-134.657 60.405-134.657 134.654 0 9.531 7.727 17.258 17.258 17.258 9.531 0 17.258-7.727 17.258-17.258 0-55.217 44.923-100.139 100.142-100.139 9.531 0 17.258-7.727 17.258-17.258 0-9.531-7.727-17.256-17.258-17.256z" />
            </svg>
            {showUpdates && (
              <Update_menu onClosed={() => setShowUpdates(false)} />
            )}
          </div>
          <button
            className="bg-gradient-to-r from-blue-500 to-blue-600 transition-colors pt-1 pb-1 pl-3 pr-3 text-white rounded-3xl text-sm lg:text-2xl"
            onClick={() => {
              setShowLogin(true);
            }}
          >
            Get Start
          </button>
          {/* Mobile Menu Button */}
          <button
            className="text-2xl lg:hidden right-1 top-2 z-50 w-6 h-6 items-center -ml-3"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="black"
                className="h-6 w-6 right-2  "
              >
                <path
                  d="M18 6L6 18M6 6l12 12"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="black"
                className="h-6 w-6"
              >
                <path
                  d="M3 12h18M3 6h18M3 18h18"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}
          </button>
          {showLogin && <Login onClose={() => setShowLogin(false)} />}
        </div>
      </div>
      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div
          className={`top-14 right-0 w-full bg-white shadow-lg rounded-md lg:hidden flex flex-col p-4 space-y-3 text-lg z-40 transition-all ${
            isMenuOpen ? "block" : "hidden"
          }`}
        >
          <a
            href={`/`}
            className={`${isActive(`/`) ? "underline font-semibold" : ""}`}
          >
            Home
          </a>
          {["College", "Hostel", "Course", "About"].map((item) => (
            <a
              key={item}
              href={`/${item.toLowerCase()}`}
              className={`${
                isActive(`/${item.toLowerCase()}`)
                  ? "underline font-semibold"
                  : ""
              }`}
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

export default Navbar;
