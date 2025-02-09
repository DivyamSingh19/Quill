import React from "react";
import { ChevronRight } from "lucide-react";
import { CardGradient } from "./CardGradient";
import { assets } from "../assets/assets";

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
      <div className={`bg-black rounded-3xl ${className}`}></div>
    </CardGradient>
  );
};

 
  const GridLayout = () => {
    return (
      <div className="absolute top-170 md:top-230 left-0 sm:pt-15 pt-10 w-screen h-screen text-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 max-w-6xl mx-auto px-4">
           
          <GridSection title="Explore top genres">
            <div className="grid grid-cols-2 sm:grid-cols-2 gap-4 h-auto md:h-[400px]">
              <div className="grid gap-4">
                <Card className="w-full h-[300px]" image={assets.theme1}/>
                <Card className="w-full h-[150px]" image={assets.theme1}/>
              </div>
              <div className="grid gap-4">
                <Card  className="w-full flex-1 h-[150px]" image={assets.theme1} />
                <Card className="w-full h-[300px]" image={assets.theme1}/>
              </div>
            </div>
          </GridSection>
  
           
          <GridSection title="Latest Posts ">
            <div className="grid grid-cols-2 sm:grid-cols-2 gap-4 h-auto md:h-[400px]">
              <div className="grid gap-4">
                <Card className="w-full h-[220px]" image={assets.theme1}/>
                <Card className="w-full h-[220px]" image={assets.theme1}/>
              </div>
              <div className="grid gap-4">
                <Card className="w-full flex-1 h-[220px]" image={assets.theme1} />
                <Card className="w-full h-[220px]" image={assets.theme1}/>
              </div>
            </div>
          </GridSection>
        </div>
      </div>
    );
  };
  

export default GridLayout;
