 
import { assets } from '../assets/assets';
import { useEffect } from 'react';
import useMediaQuery from 'react-responsive'

const About = () => {
  const handleBackClick = () => {
    window.history.back();
  };

  const handleDevInfoClick = () => {
    window.open("https://divyamsingh19.netlify.app", "_blank", "noopener,noreferrer");
  };
  const isSmallScreen = useMediaQuery({ maxWidth: 700 });
  useEffect(() => {
    if (!isSmallScreen) {
      document.body.style.overflow = "hiddden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isSmallScreen]);

  return (
    <div className='absolute top-0 left-0 w-screen h-screen '>
    <div className="  text-white p-4 sm:p-8 relative">
      {/* Navigation Buttons */}
      <div className="flex justify-between mb-6">
        <button
          onClick={handleBackClick}
          className="bg-gray-200 text-black px-3 py-1.5 rounded-lg text-sm font-medium 
                   hover:bg-gray-300 transition-colors duration-200 flex items-center gap-2"
        >
          ← Back
        </button>
        
        <button
          onClick={handleDevInfoClick}
          className="bg-white text-black pt-2 px-3 py-1.5 rounded-lg text-sm font-medium
                   hover:bg-gray-400 transition-colors duration-200"
        >
          Developer Info
        </button>
      </div>

      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-3">
            Welcome to{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-500">
              Quill
            </span>
          </h1>
          <p className="text-base sm:text-lg text-gray-100">
            Discover, write, and share stories that matter.
          </p>
        </div>

        {/* Main Content */}
        <div className="backdrop-blur-md rounded-lg shadow-lg p-6 mb-8">
          <div className="flex flex-col sm:flex-row gap-6">
            <div className="w-full sm:w-1/2">
              <div className="aspect-video rounded-lg overflow-hidden bg-gray-100">
                <img
                  src={assets.banner}
                  alt="About Blogging Hub"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
            </div>

            <div className="w-full sm:w-1/2">
              <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
              <div className="space-y-4 text-gray-300">
                <p className="text-sm sm:text-base">
                  <strong>Quill</strong> was created to provide a space for writers, 
                  thinkers, and storytellers. Whether you're here to share your expertise, 
                  express creativity, or learn something new, our platform is designed to 
                  amplify your voice.
                </p>
                <p className="text-sm sm:text-base">
                  We believe in the power of words to inspire, inform, and connect people. 
                  With an easy-to-use interface, community-driven engagement, and a passion 
                  for storytelling, our mission is to build a thriving hub for bloggers of 
                  all backgrounds.
                </p>
              </div>
            </div>
          </div>
        </div>

         
        <div className="bg-blur rounded-lg shadow-lg p-6 text-center">
          <h3 className="text-xl sm:text-2xl font-semibold mb-4">Our Mission</h3>
          <p className="text-sm sm:text-base text-gray-200">
            To empower writers by providing a platform where ideas can flourish, 
            voices can be heard, and creativity knows no bounds.
          </p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default About;