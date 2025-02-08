import React, { useEffect, useState } from 'react';

interface SplashScreenProps {
  onComplete?: () => void;
  appName?: string;
}

const OnboardingSplash: React.FC<SplashScreenProps> = ({ 
  onComplete,
  appName = "Quill"
}) => {
  const [showContent, setShowContent] = useState(false);
  const [exitAnimation, setExitAnimation] = useState(false);

  useEffect(() => {
     
    const showTimeout = setTimeout(() => {
      setShowContent(true);
    }, 500);

    
    const exitTimeout = setTimeout(() => {
      setExitAnimation(true);
    }, 2500);

    
    const completeTimeout = setTimeout(() => {
      onComplete?.();
    }, 3000);

    return () => {
      clearTimeout(showTimeout);
      clearTimeout(exitTimeout);
      clearTimeout(completeTimeout);
    };
  }, [onComplete]);

  return (
    <div className={`fixed inset-0 bg-black z-50 flex items-center justify-center
                    transition-opacity duration-500 ease-in-out
                    ${exitAnimation ? 'opacity-0' : 'opacity-100'}`}>
      <div className="relative">
        {/* Animated circles */}
        <div className="absolute inset-0 -m-8">
          <div className={`w-64 h-64 rounded-full border-t-2 border-l-2 border-purple-500
                          transition-all duration-1000 ease-out
                          ${showContent ? 'scale-100 rotate-180 opacity-20' : 'scale-50 rotate-0 opacity-0'}`} />
        </div>
        <div className="absolute inset-0 -m-12">
          <div className={`w-72 h-72 rounded-full border-r-2 border-b-2 border-blue-500
                          transition-all duration-1000 delay-100 ease-out
                          ${showContent ? 'scale-100 -rotate-180 opacity-20' : 'scale-50 rotate-0 opacity-0'}`} />
        </div>

         
        <div className={`relative flex flex-col items-center transition-all duration-700 ease-out
                        ${showContent ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-4'}`}>
          {/* Animated logo/icon */}
          <div className="w-20 h-20 mb-6 relative">
            <div className={`absolute inset-0 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg
                            transition-transform duration-1000 ease-out
                            ${showContent ? 'transform rotate-180 scale-100' : 'transform rotate-0 scale-0'}`} />
            <div className={`absolute inset-0 bg-black m-1 rounded-lg flex items-center justify-center
                            text-white text-2xl font-bold`}>
              {appName.charAt(0)}
            </div>
          </div>

          
          <h1 className="text-3xl font-bold text-white mb-2">{appName}</h1>
          <p className="text-gray-400">Lets setup your profile</p>

           
          <div className="flex space-x-2 mt-4">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className={`w-2 h-2 rounded-full bg-purple-500
                           animate-bounce`}
                style={{ animationDelay: `${i * 0.15}s` }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnboardingSplash;