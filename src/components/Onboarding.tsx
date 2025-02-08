import React, { ChangeEvent, useState } from 'react';

interface BioInputProps {
  maxLength?: number;
  placeholder?: string;
  onChange?: (value: string) => void;
}

const BioInput: React.FC<BioInputProps> = ({
  maxLength = 500,
  placeholder = "Tell us about yourself...",
  onChange
}) => {
  const [bio, setBio] = useState<string>('');

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    setBio(value);
    onChange?.(value);
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-8">
      <div className="relative rounded-2xl bg-black p-[2px] overflow-hidden">
        {/* Gradient border overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-red-500/30 via-purple-500/30 to-blue-500/30 animate-gradient" />
        
        <div className="relative bg-black rounded-2xl p-6">
          <label 
            htmlFor="bio" 
            className="block text-white text-xl mb-4"
          >
            Enter Your Bio
          </label>
          
          <textarea
            id="bio"
            value={bio}
            onChange={handleChange}
            maxLength={maxLength}
            placeholder={placeholder}
            className="w-full h-40 p-4 bg-gray-800 text-white rounded-lg resize-none 
                     placeholder-gray-400 focus:outline-none focus:ring-2 
                     focus:ring-purple-500 transition-all"
          />
          
          <div className="mt-2 text-right text-gray-400 text-sm">
            {bio.length}/{maxLength}
          </div>
        </div>
      </div>
    </div>
  );
};

 
const style = document.createElement('style');
style.textContent = `
  @keyframes gradient {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
  .animate-gradient {
    animation: gradient 3s linear infinite;
  }
`;
document.head.appendChild(style);

export default BioInput;