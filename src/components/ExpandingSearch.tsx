import { useState, useRef, useEffect } from 'react';
import { Search, X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

const ExpandingSearch = () => {
  const [isOpen, setIsOpen] = useState(false);
  const searchRef = useRef(null);
  
   
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === '/' && !isOpen) {
        e.preventDefault();
        setIsOpen(true);
      } else if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };
    
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);
 
  useEffect(() => {
    if (isOpen && searchRef.current) {
      searchRef.current.focus();
    }
  }, [isOpen]);

  return (
    <>
      {/* Search Icon in Navbar */}
      <button
        onClick={() => setIsOpen(true)}
        className="p-2 hover:bg-gray-800 rounded-full transition-colors duration-200"
      >
        <Search className="w-5 h-5 text-white" />
      </button>

      {/* Full Screen Search Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/40 backdrop-blur-md z-50"
              onClick={() => setIsOpen(false)}
            />

            {/* Search Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.15 }}
              className="fixed inset-x-4 top-4 md:inset-x-auto md:left-1/2 md:-translate-x-1/2 md:w-full md:max-w-2xl z-50"
            >
              <div className="relative bg-blur border border-yellow-500 rounded-lg shadow-2xl">
                {/* Search Input */}
                <div className="flex items-center p-4">
                  <Search className="w-5 h-5 text-gray-400" />
                  <input
                    ref={searchRef}
                    type="text"
                    placeholder="Search..."
                    className="w-full px-4 py-2 bg-transparent text-white outline-none"
                  />
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-2 hover:bg-gray-800 rounded-full transition-colors duration-200"
                  >
                    <X className="w-5 h-5 text-gray-400" />
                  </button>
                </div>

                {/* Search Results Container */}
                <div className="border-t border-yellow-500 max-h-[70vh] overflow-y-auto">
                  <div className="p-4 text-sm text-gray-400">
                    Start typing to search...
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default ExpandingSearch;