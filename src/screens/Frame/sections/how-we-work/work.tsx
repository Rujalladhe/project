import { useState, useEffect } from "react";

interface WorkProcessStepProps {
  number: number;
  title: string;
  description: string;
  isActive: boolean;
  onClick: () => void;
}

const WorkProcessStep = ({ number, title, description, isActive, onClick }: WorkProcessStepProps) => {
  return (
    <div 
      className={`border-b border-neutral-800 last:border-b-0 transition-all duration-500 hover:bg-neutral-900/30`}
      onClick={onClick}
    >
      <div className="py-6 sm:py-10 cursor-pointer flex items-start group">
        <span className="text-neutral-500 font-['Inter',Helvetica]font-mono mr-4 sm:mr-6 mt-1 text-sm sm:text-base transition-colors duration-300 group-hover:text-teal-400">0{number}</span>
        <div className="flex-1">
          <div className="flex justify-between items-center">
            <h3 className="text-white font-['Inter',Helvetica] text-xl sm:text-3xl font-medium pr-2 sm:pr-0 transition-all duration-300 group-hover:text-teal-300">{title}</h3>
            <button className={`w-8 h-8 flex-shrink-0 flex items-center justify-center rounded-full transition-colors duration-300 ${isActive ? 'bg-teal-900/20 text-teal-400' : 'text-neutral-500'}`}>
              {isActive ? 
                <svg className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-500 ease-out" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                </svg>
                : 
                <svg className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-500 ease-out" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              }
            </button>
          </div>
          
          <div 
            className={`overflow-hidden transition-all duration-500 ease-in-out ${isActive ? 'max-h-96 opacity-100 mt-4 sm:mt-6' : 'max-h-0 opacity-0'}`}
          >
            <div className="text-neutral-400 text-sm sm:text-base leading-relaxed pr-4 sm:pr-8 ml-0 border-l-2 border-teal-800/50 pl-4">
              {description}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default () => {
  const workProcessSteps = [
    {
      title: "Discovery & Planning",
      description: "We understand your goals, whether it’s enhancing learning or streamlining networking."
    },
    {
      title: "Design & Customization",
      description: "We create a solid technical foundation and user experience design that aligns with your business goals and user needs."
    },
    {
      title: "Development & Integration:",
      description:"Building secure, scalable solutions with seamless third-party integrations."
    },
    {
      title: "Testing & Quality Assurance:",
      description: "Ensuring flawless performance for learners and professionals alike."
    },
    {
      title: "Deployment & Support",
      description: "Ongoing support to keep your systems running smoothly."
    }
  ];

  const [activeStep, setActiveStep] = useState<number | null>(0);
  const [gradientPosition, setGradientPosition] = useState({ x: 50, y: 50 });

  // Subtle animation for the background gradient
  useEffect(() => {
    const interval = setInterval(() => {
      setGradientPosition({
        x: 50 + Math.sin(Date.now() / 5000) * 10,
        y: 50 + Math.cos(Date.now() / 5000) * 10
      });
    }, 50);
    
    return () => clearInterval(interval);
  }, []);

  const toggleStep = (index: number) => {
    if (activeStep === index) {
      setActiveStep(null);
    } else {
      setActiveStep(index);
    }
  };

  return (
    <section className="relative py-16 sm:py-32 w-full h-full bg-black overflow-hidden">
      {/* Animated gradient background effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute -inset-[10%] w-full h-full opacity-70"
          style={{
            background: `radial-gradient(40% 40% at ${gradientPosition.x}% ${gradientPosition.y}%, rgba(4,186,171,0.15) 0%, rgba(0,0,0,0) 65%)`
          }}
        ></div>
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-teal-900/5 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-teal-900/5 blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 max-w-4xl relative z-10">
        <div className="mb-12 sm:mb-20">
          <p className="text-teal-400 text-sm sm:text-base mb-2 sm:mb-3 text-center font-mono tracking-wider">OUR PROCESS</p>
          <h2 className="text-white font-['Inter',Helvetica] text-6xl sm:text-7xl font-medium text-center mb-6 sm:mb-10 tracking-tight">
            How we <span className="text-teal-300 inline-block relative">work
              <span className="absolute -bottom-1 left-0 w-full h-px bg-gradient-to-r from-transparent via-teal-400 to-transparent"></span>
            </span>
          </h2>
          <p className="text-neutral-400 text-center sm:text-lg max-w-2xl mx-auto leading-relaxed">
            At YSB, we blend Agile flexibility with engineering discipline and
            clear communication throughout the development process.
          </p>
        </div>

        <div className="border-t border-neutral-800/70 rounded-md bg-black/30 backdrop-blur-sm shadow-lg">
          {workProcessSteps.map((step, index) => (
            <WorkProcessStep
              key={index}
              number={index + 1}
              title={step.title}
              description={step.description}
              isActive={activeStep === index}
              onClick={() => toggleStep(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}