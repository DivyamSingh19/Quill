import React from "react";
import { ChevronRight } from "lucide-react";
import { CardGradient } from "./CardGradient";

const GridSection = ({ title, children, className = "" }) => {
  return (
    <div className={className}>
      <div className="flex items-center gap-2 mb-4 text-sm">
        {title}
        <ChevronRight size={16} />
      </div>
      {children}
    </div>
  );
};

const Card = ({ className = "" }) => {
  return (
    <CardGradient>
      <div className={`bg-neutral-800 rounded-3xl ${className}`}></div>
    </CardGradient>
  );
};

 
  const GridLayout = () => {
    return (
      <div className="absolute top-170 md:top-230 left-0 sm:pt-15 pt-10 w-screen h-screen text-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 max-w-6xl mx-auto px-4">
          {/* Left Grid - Genres */}
          <GridSection title="Explore top genres">
            <div className="grid grid-cols-2 sm:grid-cols-2 gap-4 h-auto md:h-[400px]">
              <div className="grid gap-4">
                <Card className="w-full h-[300px]" />
                <Card className="w-full h-[150px]" />
              </div>
              <div className="grid gap-4">
                <Card className="w-full flex-1 h-[150px]" />
                <Card className="w-full h-[300px]" />
              </div>
            </div>
          </GridSection>
  
          {/* Right Grid - Writers */}
          <GridSection title="Top writers on Quill ">
            <div className="grid grid-cols-2 sm:grid-cols-2 gap-4 h-auto md:h-[400px]">
              <div className="grid gap-4">
                <Card className="w-full h-[200px]" />
                <Card className="w-full h-[200px]" />
              </div>
              <div className="grid gap-4">
                <Card className="w-full flex-1 h-[200px]" />
                <Card className="w-full h-[200px]" />
              </div>
            </div>
          </GridSection>
        </div>
      </div>
    );
  };
  

export default GridLayout;
