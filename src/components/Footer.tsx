import { assets } from "../assets/assets";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-blur relative bottom-0 left-0 text-gray-200 py-10 mt-40">
      <div className="mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        
        <div>
          <img src="" className="mb-5 w-32" alt="Company Logo" />
          <p className="text-sm">
            Your go-to platform for everything related to blogging. Share your
            thoughts, explore insights, and grow your audience.
          </p>
        </div>

         
        <div>
          <h2 className="text-lg font-semibold mb-4">Company</h2>
          <ul className="space-y-2">
            <li><a href="/about" className="hover:text-white">About Us</a></li>
            <li><a href="#" className="hover:text-white">Careers</a></li>
            <li><a href="/cnotact" className="hover:text-white">Contact</a></li>
            <li><a href="/all-posts" className="hover:text-white">Blog</a></li>
          </ul>
        </div>

       
        <div>
          <h2 className="text-lg font-semibold mb-4">Support</h2>
          <ul className="space-y-2">
            <li><a href="/contact" className="hover:text-white">Help Center</a></li>
            <li><a href="/about" className="hover:text-white">Privacy Policy</a></li>
            <li><a href="/about" className="hover:text-white">Terms of Service</a></li>
            <li><a href="/about" className="hover:text-white">FAQs</a></li>
          </ul>
        </div>

        
        <div>
          <h2 className="text-lg font-semibold mb-4">Follow Us</h2>
          <div className="flex gap-4">
            <a href="/" className="text-gray-400 hover:text-white text-xl">
              <FaFacebook />
            </a>
            <a href="/" className="text-gray-400 hover:text-white text-xl">
              <FaTwitter />
            </a>
            <a href="/" className="text-gray-400 hover:text-white text-xl">
              <FaLinkedin />
            </a>
            <a href="/" className="text-gray-400 hover:text-white text-xl">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

    
      <div className="mt-10 text-center border-t border-gray-700 pt-5 text-sm">
        &copy; {new Date().getFullYear()} Quill. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
