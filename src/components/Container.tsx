import React from 'react';

function Container({ children }) {
  return (
    <div className="bg-black w-full max-w-7xl sm:max-w-full mx-auto px-6 sm:px-4 py-6 sm:py-4 rounded-lg shadow-lg">
      {children}
    </div>
  );
}

export default Container;
