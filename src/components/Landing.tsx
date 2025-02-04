import React, { useEffect, useRef } from "react";

const Landing = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const blobRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Particle animation
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: {
      x: number;
      y: number;
      alpha: number;
      size: number;
      speedX: number;
      speedY: number;
    }[] = [];

    const createParticle = (x: number, y: number) => {
      for (let i = 0; i < 3; i++) {
        particles.push({
          x,
          y,
          alpha: 0.5,
          size: Math.random() * 6 + 2,
          speedX: Math.random() * 1 - 0.5,
          speedY: Math.random() * 1 - 0.5,
        });
      }
    };

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((particle, i) => {
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        particle.alpha -= 0.005;

        if (particle.alpha <= 0) {
          particles.splice(i, 1);
        } else {
          ctx.globalAlpha = particle.alpha;
          ctx.fillStyle = "rgba(255, 255, 255, 0.5)";
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
          ctx.fill();
        }
      });
      requestAnimationFrame(render);
    };

    const handleMouseMove = (e: MouseEvent) => {
      createParticle(e.clientX, e.clientY);
    };

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", handleResize);
    render();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  useEffect(()=>{
    document.body.style.overflowX ="hidden";
    return()=>(
    document.body.style.overflowX="auto")
  },[])

  return (
    <div className="relative">
      <canvas
        ref={canvasRef}
        className="fixed top-0 left-0 pointer-events-none"
        style={{ zIndex: 500 }}
      ></canvas>
      
      {/* Main content container */}
      <div className="container mx-auto px-4 pt-20 lg:pt-24">
        {/* Flex container for side-by-side layout on larger screens */}
        <div className="flex flex-col lg:flex-row min-h-[calc(100vh-80px)] items-center gap-8 lg:gap-12">
          
          {/* Text content section */}
          <div className="w-full lg:w-1/2 relative">
            {/* Animated blob gradient */}
            <div
              ref={blobRef}
              className="absolute inset-0 -z-10 opacity-70"
              style={{
                background: 'radial-gradient(circle at center, rgba(34,197,94,0.2) 0%, rgba(17,24,39,0) 70%)',
                animation: 'blob 7s infinite',
              }}
            />
            <style>
              {`
                @keyframes blob {
                  0%, 100% { transform: translate(0, 0) scale(1); }
                  25% { transform: translate(20px, -30px) scale(1.1); }
                  50% { transform: translate(-20px, 20px) scale(0.9); }
                  75% { transform: translate(30px, 30px) scale(1.1); }
                }
              `}
            </style>
            
            <div className="relative z-10 text-center lg:text-left p-8 lg:p-0">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
                Transform your thoughts into{" "}
                <span className="text-green-500">captivating stories</span>
              </h1>
              <p className="text-lg text-gray-300 mb-8">
                Join a community of passionate writers sharing their unique
                perspectives. Create, publish, and connect with readers worldwide.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button className="bg-white text-black font-semibold px-6 py-3 rounded-lg hover:bg-gray-200 transition">
                  Read Trending
                </button>
                <button className="bg-green-500 text-white font-semibold px-6 py-3 rounded-lg hover:bg-green-600 transition">
                  Start Writing
                </button>
              </div>
            </div>
          </div>

          {/* Grid section */}
          <div className="w-full lg:w-1/2">
            <p className="text-white text-right mb-4 text-sm sm:text-base">
              Explore top genres →
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
              <div className="col-span-2 row-span-2 w-full h-48 sm:h-64 bg-gray-700 rounded-lg"></div>
              <div className="w-full h-24 sm:h-32 bg-gray-700 rounded-lg"></div>
              <div className="w-full h-24 sm:h-32 bg-gray-700 rounded-lg"></div>
              <div className="col-span-2 w-full h-24 sm:h-32 bg-gray-700 rounded-lg"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;