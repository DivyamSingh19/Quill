 
import {  CardGradient } from "../components/CardGradient";


 

export function Card({text,image,description}) {
  
  return (
    <div>
      <CardGradient className="rounded-[22px]  p-4 sm:p-10 bg-white dark:bg-black">
        {image}
        <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
          {text}
        </p>

        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          {description}
        </p>
        
      </CardGradient>
    </div>
  );
}
