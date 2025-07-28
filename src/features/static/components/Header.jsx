import React from "react";
import { Link } from "react-router-dom";
import reactUseCookie from "react-use-cookie";

const Header = () => {
  const [user] = reactUseCookie("user");
  const [token] = reactUseCookie("my_token");
  return (
    <header className=" sticky top-0 z-50">
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link to="/" className="flex items-center">
            <span className="self-center text-lg md:text-xl font-semibold whitespace-nowrap dark:text-white">
              Voucher App
            </span>
          </Link>
          <div className="flex items-center lg:order-2">
           {!token ? (
             <>
             <Link
               to="/login"
               className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-xs md:text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
             >
               Log in
             </Link>
             <Link 
               to="/register"
               className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-xs md:text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
             >
               Register
             </Link>
             </>
           ):(
         
          
            <Link 
              to="/dashboard"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-xs md:text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              {`${JSON.parse(user).name}'s dashboard`}
            </Link>
          
           )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
