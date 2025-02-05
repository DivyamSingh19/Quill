import React from 'react';
import { ChevronRight } from 'lucide-react';

const GridSection = ({
  title ,
  children,
  className = ""
}) => {
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
    <div className={`bg-neutral-800 rounded-xl ${className}`}>
      {/* Card content goes here */}
    </div>
  );
};

const GridLayout = () => {
  return (
    <div className=" absolute top-150 md:top-230  left-0 pt-10 w-screen h-screen  text-white">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {/* Left Grid - Genres */}
        <GridSection title="Explore top genres">
          <div className="grid grid-cols-2 gap-4 h-[400px]">
            <div className="grid gap-4">
              <Card className="w-full h-[180px]" />
              <Card className="w-full flex-1" />
            </div>
            <div className="grid gap-4">
              <Card className="w-full flex-1" />
              <Card className="w-full h-[180px]" />
            </div>
          </div>
        </GridSection>

        {/* Right Grid - Writers */}
        <GridSection title="Top writers">
          <div className="grid grid-cols-2 gap-4 h-[400px]">
            <div className="grid gap-4">
              <Card className="w-full h-[180px]" />
              <Card className="w-full flex-1" />
            </div>
            <div className="grid gap-4">
              <Card className="w-full h-[180px]" />
              <Card className="w-full flex-1" />
            </div>
          </div>
        </GridSection>
      </div>
    </div>
  );
};

export default GridLayout;