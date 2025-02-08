import React, { ChangeEvent, useState } from 'react';
import { Upload, Edit2 } from 'lucide-react';

interface OnboardingInputProps {
  type: 'bio' | 'avatar';
  title: string;
  maxLength?: number;
  placeholder?: string;
  onChange?: (value: string | File) => void;
  accept?: string;
}

const OnboardingInput: React.FC<OnboardingInputProps> = ({
  type,
  title,
  maxLength = 500,
  placeholder = "Tell us about yourself...",
  onChange,
  accept = "image/*"
}) => {
  const [value, setValue] = useState<string>('');
  const [previewUrl, setPreviewUrl] = useState<string>('');

  const handleTextChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = e.target.value;
    setValue(newValue);
    onChange?.(newValue);
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setPreviewUrl(reader.result as string);
      };
      reader.readAsDataURL(file);
      onChange?.(file);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-8">
      <div className="relative rounded-2xl bg-black p-[2px] overflow-hidden">
         
        <div className="absolute inset-0 bg-gradient-to-br from-red-500/30 via-purple-500/30 to-blue-500/30 animate-gradient" />
        
        <div className="relative bg-black rounded-2xl p-6">
          <label 
            htmlFor={type}
            className="block text-white text-xl mb-4"
          >
            {title}
          </label>
          
          {type === 'bio' ? (
            <>
              <textarea
                id={type}
                value={value}
                onChange={handleTextChange}
                maxLength={maxLength}
                placeholder={placeholder}
                className="w-full h-80 p-4 bg-white text-black rounded-lg resize-none 
                         placeholder-gray-700 focus:outline-none focus:ring-2 
                         focus:ring-purple-500 transition-all"
              />
              <div className="mt-2 text-right text-gray-400 text-sm">
                {value.length}/{maxLength}
              </div>
            </>
          ) : (
            <div className="relative w-full aspect-square max-w-sm mx-auto">
              <input
                type="file"
                id={type}
                accept={accept}
                onChange={handleFileChange}
                className="hidden"
              />
              <label
                htmlFor={type}
                className="block w-full h-80 rounded-lg border-2 border-dashed 
                         border-gray-600 hover:border-purple-500 transition-colors 
                         cursor-pointer bg-white"
              >
                {previewUrl ? (
                  <div className="relative w-full h-full group">
                    <img 
                      src={previewUrl}
                      alt="Preview"
                      className="w-full h-full object-cover rounded-lg"
                    />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 
                                  transition-opacity flex items-center justify-center rounded-lg">
                      <Edit2 className="w-8 h-8 text-white" />
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center h-full p-4">
                    <Upload className="w-8 h-8 text-gray-400 mb-2" />
                    <p className="text-gray-400 text-center">
                      Click or drag to upload your photo
                    </p>
                  </div>
                )}
              </label>
            </div>
          )}
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
    animation: gradient 10s linear infinite;
  }
`;
document.head.appendChild(style);

export default OnboardingInput;