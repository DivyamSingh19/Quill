import React from 'react';

const GradientBorderButton = ({ 
  children, 
  variant = "blue", // "blue" | "rainbow"
  className = "",
  ...props 
}) => {
  const baseStyles = "relative px-6 py-2 font-medium text-white " +
    "transition-all duration-300 hover:scale-105 rounded-lg isolate overflow-hidden";
    
  const variants = {
    blue: [
      "before:absolute before:inset-0 before:p-[1px] before:rounded-lg before:content-[''] " +
      "before:bg-[linear-gradient(45deg,transparent_25%,#0474E1_50%,transparent_75%)] " +
      "before:bg-[length:250%_250%] before:animate-gradient-border before:-z-10 " +
      "after:absolute after:inset-0 after:rounded-lg after:bg-black after:content-[''] after:-z-10",
      "bg-black"
    ].join(" "),
          
    rainbow: [
      "before:absolute before:inset-0 before:p-[1px] before:rounded-lg before:content-[''] " +
      "before:bg-[linear-gradient(45deg,transparent_25%,#FF1B6B_50%,#45CAFF_75%,transparent_100%)] " +
      "before:bg-[length:250%_250%] before:animate-gradient-border before:-z-10 " +
      "after:absolute after:inset-0 after:rounded-lg after:bg-black after:content-[''] after:-z-10",
      "bg-black"
    ].join(" ")
  };

  return (
    <div className="relative group">
      {/* Glow effect */}
      <div className={`
        absolute inset-0 rounded-lg blur-lg transition-all group-hover:blur-xl
        ${variant === 'blue' 
          ? 'bg-[#0474E1] opacity-20' 
          : 'bg-gradient-to-r from-[#FF1B6B] to-[#45CAFF] opacity-20'
        }
      `} />
      
      <button 
        className={`${baseStyles} ${variants[variant]} ${className}`}
        {...props}
      >
        <span className="relative z-10 flex items-center justify-center gap-2">
          {children}
        </span>
      </button>
    </div>
  );
};

// Needed styles - add to your global CSS or Tailwind config
const StyleSheet = () => (
  <style>{`
    @keyframes gradient-border {
      0% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
    }
    
    .animate-gradient-border {
      animation: gradient-border 3s ease infinite;
    }
  `}</style>
);

// Example usage component
const Button = () => {
  return (
    <div className="flex flex-col gap-4 p-8 bg-black min-h-screen items-start">
      <StyleSheet />
      
       
      <GradientBorderButton variant="blue">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385c.6.105.825-.255.825-.57c0-.285-.015-1.23-.015-2.235c-3.015.555-3.795-.735-4.035-1.41c-.135-.345-.72-1.41-1.23-1.695c-.42-.225-1.02-.78-.015-.795c.945-.015 1.62.87 1.845 1.23c1.08 1.815 2.805 1.305 3.495.99c.105-.78.42-1.305.765-1.605c-2.67-.3-5.46-1.335-5.46-5.925c0-1.305.465-2.385 1.23-3.225c-.12-.3-.54-1.53.12-3.18c0 0 1.005-.315 3.3 1.23c.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23c.66 1.65.24 2.88.12 3.18c.765.84 1.23 1.905 1.23 3.225c0 4.605-2.805 5.625-5.475 5.925c.435.375.81 1.095.81 2.22c0 1.605-.015 2.895-.015 3.3c0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
        </svg>
        GitHub
      </GradientBorderButton>
      
       
      <GradientBorderButton variant="rainbow">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385c.6.105.825-.255.825-.57c0-.285-.015-1.23-.015-2.235c-3.015.555-3.795-.735-4.035-1.41c-.135-.345-.72-1.41-1.23-1.695c-.42-.225-1.02-.78-.015-.795c.945-.015 1.62.87 1.845 1.23c1.08 1.815 2.805 1.305 3.495.99c.105-.78.42-1.305.765-1.605c-2.67-.3-5.46-1.335-5.46-5.925c0-1.305.465-2.385 1.23-3.225c-.12-.3-.54-1.53.12-3.18c0 0 1.005-.315 3.3 1.23c.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23c.66 1.65.24 2.88.12 3.18c.765.84 1.23 1.905 1.23 3.225c0 4.605-2.805 5.625-5.475 5.925c.435.375.81 1.095.81 2.22c0 1.605-.015 2.895-.015 3.3c0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
        </svg>
        GitHub
      </GradientBorderButton>
    </div>
  );
};

export default Button;