import { useEffect } from "react";
import {toast} from 'react-toastify'

const Contact = () => {
  function messageHandler(e:React.FormEvent){
      e.preventDefault();
      toast.dark("Message received , Someone from the team will get back to you soon!")
  }
  return (
    <div className=" text-white p-8 sm:p-12 absolute top-0 left-0 w-screen h-screen">
      <div className="max-w-6xl mx-auto">
         
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight">
            Get in Touch with <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-300 to-gray-500">Quill</span>
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-white">
            We&apos;re here to help! Reach out to us for inquiries, feedback, or support.
          </p>
        </div>

        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
           
          <div className="p-6  border bg-graident-to-r from-blue-500 via-purple-500 to-pink-500 animate-border-move rounded-2xl shadow-lg flex items-center justify-center">
            <form className="space-y-6 w-80">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-white">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Enter your name"
                  className="mt-1 block w-full px-4 py-2 bg-blur border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-black focus:border-gray-100"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-white">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  className="mt-1 block w-full px-4 py-2 bg-blur border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-black focus:border-gray-100"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  rows="5"
                  placeholder="Write your message here"
                  className="mt-1 block w-full px-4 py-2 bg-blur border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-black focus:border-gray-100"
                ></textarea>
              </div>
              <button
                onClick={messageHandler}
                type="submit"
                className="w-full px-6 py-3 text-black font-bold bg-white rounded-lg shadow-md hover:bg-gray-900 transition"
              >
                Send Message
              </button>
            </form>
          </div>

           
          <div className="flex flex-col justify-center">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-4">Contact Information</h2>
            <p className="text-gray-700 mb-4">
              Have questions? We&apos;re just an email or a call away. Feel free to reach out to us!
            </p>
            <ul className="space-y-4">
              <li>
                <span className="font-medium">Email:</span>{' '}
                <a href="mailto:support@forever.com" className="text-black hover:underline">
                  support@quill.com
                </a>
              </li>
              <li>
                <span className="font-medium">Phone:</span>{' '}
                <a href="tel:+123456789" className="text-black hover:underline">
                  +1 234 567 89
                </a>
              </li>
              <li>
                <span className="font-medium">Address:</span> 123 Forever Street, Fashion City, World
              </li>
            </ul>
            <div className="mt-6">
              <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
              <div className="flex items-center justify-center space-x-4">
                <a href="#" className="hover:text-gray-800">
                  <i className="fab fa-facebook-f"></i> Facebook
                </a>
                <a href="#" className="hover:text-gray-800">
                  <i className="fab fa-instagram"></i> Instagram
                </a>
                <a href="#" className="hover:text-gray-800">
                  <i className="fab fa-twitter"></i> Twitter
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
