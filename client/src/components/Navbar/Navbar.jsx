import React from 'react';
import Logo from "./../../assets/Img/aaps2.png";
import { BrowserRouter as Router, Link}  from "react-router-dom";


const Navbar = () => {
    return (
        <nav className="bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <a href="/"> <img
                  className="hidden lg:block h-8 w-auto"
                  src={Logo}
                  alt="Aniplay"
                /> </a>
              </div>
              <div className="hidden sm:block sm:ml-6">
                <div className="flex space-x-4">
                
                  <a href="/team"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Team
                  </a>
                  <a href ="/events" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Events
                  </a>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
};

export default Navbar;