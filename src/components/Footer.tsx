import React from "react";

const Footer = () => {
  return (
    <div className="bottom-0 left-0 right-0 w-full  p-4 z-50">
      <footer className="bg-black-900 rounded-lg shadow m-4 w-full">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <a
              href="#"
              className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
            >
              <img src="#" className="h-8" alt="Logo" />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                TechNova
              </span>
            </a>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-200 sm:mb-0 dark:text-gray-400">
              <li>
                <a href="#" className="hover:text-white me-4 md:me-6">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white  me-4 md:me-6">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white  me-4 md:me-6">
                  Licensing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Contact 
                </a>
              </li>
            </ul>
          </div>
         
          <div className="mt-4 mb-4">
            <a
              href="https://www.github.com/your-repo"
              className="text-white hover:text-gray-400 mx-2"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/your-profile"
              className="text-white hover:text-gray-400 mx-2"
            >
              LinkedIn
            </a>
            <a
              href="https://x.com/your-profile"
              className="text-white hover:text-gray-400 mx-2"
            >
              Twitter
            </a>
            <a
              href="https://instagram.com/your-profile"
              className="text-white hover:text-gray-400 mx-2"
            >
              Instagram
            </a>
          </div>
          <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © {new Date().getFullYear()} {""}
            <a href="#" className="hover:text-white">
              TechNova 
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

// <div className="fixed top-0 left-0 right-0 w-full p-4 z-50">
