import OnboardingInput from "../components/Onboarding";
import Container from "../components/Container";
import OnboardingSplash from "../components/OnboardingSplash";
import { ArrowRight } from "lucide-react";
import { CardGradient } from "../components/CardGradient";
import { useEffect, useState } from "react";

const Onboarding = () => {
  const [loading,setLoading] = useState(true);
  const handleClick = () => {

  };
  useEffect(()=>{
   const timer = setTimeout(()=>{
    setLoading(false);
   },2000)
   return () => clearTimeout(timer);
  },[]) 

  useEffect(()=>{
     document.body.style.overflowX="hidden"
    return()=> (
      document.body.style.overflowX="auto")
  },[])
  return (
    <div className="absolute w-screen h-screen top-0 left-0 ">
       {loading?(<OnboardingSplash/>):(
       
      <div className="absolute w-screen h-screen top-0 left-0 ">
        <p className="pt-8 pb-8 text-2xl md:text-4xl">
          Set up your profile & make your mark!
        </p>
        <div className="bg-black"> 
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <div> 
            <OnboardingInput
              type="bio"
              title="Enter Your Bio"
              placeholder="Tell us about yourself..."
            />
             <button className="bg-white text-black py-4 px-4 pt-2 pb-2 cursor-pointer rounded-2xl">Add</button>
            </div>
            <div>
            <OnboardingInput type="avatar" title="Add Your Profile Image" /> <button className="bg-white text-black py-4 px-4 pt-2 pb-2 cursor-pointer rounded-2xl">Add</button> </div>
          </div>
        </Container>
        </div>
        <div > 
        <button
          onClick={handleClick}
          className="group relative bg-white text-black font-medium rounded-2xl px-6 py-4 
           hover:cursor-pointer hover:shadow-2xl hover:shadow-white/10 hover:scale-105
           active:scale-95 overflow-hidden transition-all duration-300 ease-out"
        >
          <div
            className="absolute inset-0 w-1/4 h-full bg-white/40 blur-md
                -skew-x-12 -translate-x-full group-hover:translate-x-[500%]
                transition-transform duration-1000 ease-out"
          />

          <div className="relative flex items-center space-x-2">
            <span className="transform group-hover:translate-x-1 transition-transform duration-200">
              Skip for Now
            </span>
            <ArrowRight
              className="w-4 h-4 transform group-hover:translate-x-1 
                        transition-transform duration-200 opacity-0 
                        group-hover:opacity-100"
            />
          </div>

          <div
            className="absolute inset-0 rounded-2xl border border-white/20 
                group-hover:border-white/40 transition-colors duration-200"
          />
        </button>
        </div>
      </div>
     )}
    </div>
  );
};

export default Onboarding;
