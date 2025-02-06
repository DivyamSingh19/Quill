import React from "react";
interface input{
  text :string
}
const Button = ({text,onClick}) => {
  return (
    <button
      type="button"
      className="relative  text-white font-bold rounded-full px-6 py-3 transition-all bg-black border-2 border-blue-300 hover:border-purple-500 cursor-pointer"
      
    >
      {text}
    </button>
  );
};

export default Button;
