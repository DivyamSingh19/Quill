import React from "react";

const Footer = () => {
  return (

    <footer className="relative bg-black rounded-lg shadow w-full flex items-center justify-between">
      <hr className="bg-white"/>
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a
            href="#"
            className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
            
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
              Quill
            </span>
          </a>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-200 sm:mb-0">
            <li>
              <a href="/about" className="hover:text-white me-4 md:me-6">
                About Us
              </a>
            </li>
            <li>
              <a href="/privacy-policy" className="hover:text-white me-4 md:me-6">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-white">
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div className="mt-4 mb-4">
          <a
            href="https://www.github.com/divyamsingh19"
            className="text-white hover:text-gray-400 mx-2"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/"
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
        </div>
        <span className="block text-sm text-gray-500 sm:text-center">
          © {new Date().getFullYear()}{" "}
          <a href="#" className="hover:text-white">
            Quill
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
