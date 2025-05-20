import React, { useState } from 'react';

interface Feature {
  title: string;
  description: string;
  icon: string;
}

interface Industry {
  name: string;
  isActive: boolean;
  title: string;
  description: string;
  features: Feature[];
}

const ChevronRightIcon: React.FC<{ className: string }> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
);

const Card: React.FC<{ children: React.ReactNode; className: string }> = ({ children, className }) => (
  <div className={`border ${className}`}>{children}</div>
);

const CardContent: React.FC<{ children: React.ReactNode; className: string }> = ({ children, className }) => (
  <div className={className}>{children}</div>
);

const Industries: React.FC = () => {
  const industriesData: Industry[] = [
    {
      name: "Education",
      isActive: true,
      title: "Education",
      description: "Transforming learning with tailored LMS solutions.",
      features: [
        { title: "Online Classrooms", description: "Streamlined course delivery and student tracking.", icon: "component-1-47.svg" },
        { title: "Personalized Learning", description: "AI-driven recommendations for students.", icon: "component-1-57.svg" },
        { title: "Scalable Systems", description: "Support for thousands of learners.", icon: "component-1-52.svg" },
      ],
    },
    {
      name: "Corporate Training",
      isActive: false,
      title: "Corporate Training",
      description: "Empowering teams with efficient training programs.",
      features: [
        { title: "Upskilling Programs", description: "Custom LMS for employee development.", icon: "component-1-47.svg" },
        { title: "Onboarding", description: "Streamlined training for new hires.", icon: "component-1-57.svg" },
        { title: "Performance Tracking", description: "Monitor progress with real-time analytics.", icon: "component-1-52.svg" },
      ],
    },
    {
      name: "Healthcare",
      isActive: false,
      title: "Healthcare",
      description: "Enhancing compliance and medical education.",
      features: [
        { title: "Compliance Training", description: "Ensure adherence to regulations.", icon: "component-1-47.svg" },
        { title: "Certifications", description: "Track and issue medical certifications.", icon: "component-1-57.svg" },
        { title: "Continued Education", description: "Support ongoing learning for professionals.", icon: "component-1-52.svg" },
      ],
    },
    {
      name: "Retail & Sales",
      isActive: false,
      title: "Retail & Sales",
      description: "Boosting sales with training and networking tools.",
      features: [
        { title: "Product Training", description: "Equip teams with product knowledge via LMS.", icon: "component-1-47.svg" },
        { title: "Digital Networking", description: "Contactless Digital Visiting Cards for sales teams.", icon: "component-1-57.svg" },
        { title: "Lead Generation", description: "Track engagement with analytics.", icon: "component-1-52.svg" },
      ],
    },
    {
      name: "Nonprofits & Government",
      isActive: false,
      title: "Nonprofits & Government",
      description: "Supporting community programs with accessible solutions.",
      features: [
        { title: "Skill Development", description: "LMS for training initiatives.", icon: "component-1-47.svg" },
        { title: "Awareness Programs", description: "Engage communities with eLearning.", icon: "component-1-57.svg" },
        { title: "Cost-Effective Tools", description: "Digital Visiting Cards for outreach.", icon: "component-1-52.svg" },
      ],
    },
  ];

  const [industries, setIndustries] = useState<Industry[]>(industriesData);
  const [showMobileNav, setShowMobileNav] = useState(false);

  const handleIndustryClick = (name: string) => {
    setIndustries(industries.map((industry) => ({ ...industry, isActive: industry.name === name })));
    setShowMobileNav(false); // Close mobile nav dropdown after selection
  };
  
  // Add custom CSS to hide scrollbar but allow scrolling
  React.useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      .hide-scrollbar::-webkit-scrollbar {
        display: none;
      }
      .hide-scrollbar {
        -ms-overflow-style: none;
        scrollbar-width: none;
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  const activeIndustry = industries.find((industry) => industry.isActive);

  if (!activeIndustry) return null;

  return (
    <section className="mt-8 sm:mt-20 rounded-[20px] bg-black bg-opacity-80" style={{
      background: 'radial-gradient(50% 50% at 100% 120%, rgba(0,178,169,0.6) 0%, rgba(0,0,0,0) 38%), radial-gradient(50% 50% at -20% 50%, rgba(56,162,191,0.6) 0%, rgba(0,0,0,0) 39%)'
    }}>
      <div className="p-4 sm:p-8">
        <h2 className="text-3xl sm:text-5xl text-white font-['Figtree',Helvetica] leading-tight sm:leading-[58px] mb-6 sm:mb-8">
          Industries we serve
        </h2>
        <p className="text-white text-sm sm:text-base font-['Inter',Helvetica] leading-5 sm:leading-[22px] mb-8 sm:mb-12 max-w-2xl">
          Expert solutions tailored to various industries, addressing unique learning and networking challenges.
        </p>
        
        {/* Mobile view - Dropdown style navigation */}
        <div className="sm:hidden relative mb-6">
          <div
            className="p-4 bg-[#ffffff0d] border border-[#5d5d5d] rounded-lg cursor-pointer flex justify-between items-center"
            onClick={() => setShowMobileNav(!showMobileNav)}
          >
            <span className="text-base font-['Inter',Helvetica] text-white">{activeIndustry.name}</span>
            <ChevronRightIcon className={`h-5 w-5 text-white transform ${showMobileNav ? 'rotate-90' : ''}`} />
          </div>
          
          {showMobileNav && (
            <div className="absolute z-10 w-full bg-black border-2 border-[#5d5d5d] rounded-lg mt-1">
              {industries.map((industry, index) => (
                <div
                  key={index}
                  className={`p-4 cursor-pointer ${industry.isActive ? 'text-[#00b2a9]' : 'text-neutral-200'} ${
                    index !== industries.length - 1 ? 'border-b border-[#5d5d5d]' : ''
                  }`}
                  onClick={() => handleIndustryClick(industry.name)}
                >
                  <span className="text-base font-['Inter',Helvetica]">{industry.name}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Desktop & Mobile layout */}
        <div className="flex flex-col sm:flex-row">
          {/* Desktop tabs - hidden on mobile */}
          <div className="hidden sm:flex sm:flex-col overflow-x-auto sm:overflow-visible min-w-[200px] pb-4 sm:pb-0">
            {industries.map((industry, index) => (
              <div
                key={index}
                className={`flex-shrink-0 py-4 sm:py-9 pl-5 pr-4 sm:pr-0 border-b-2 sm:border-b-0 sm:border-r-2 cursor-pointer ${industry.isActive ? 'border-[#00b2a9]' : 'border-[#5d5d5d]'} mr-4 sm:mr-0`}
                onClick={() => handleIndustryClick(industry.name)}
              >
                <span className={`text-base sm:text-xl leading-6 sm:leading-7 font-['Inter',Helvetica] ${industry.isActive ? 'text-white' : 'text-neutral-200'}`}>
                  {industry.name}
                </span>
              </div>
            ))}
          </div>
          
          {/* Scrollable mobile tabs - hidden on desktop */}
          <div className="flex sm:hidden overflow-x-auto pb-4 mb-4 hide-scrollbar">
            {industries.map((industry, index) => (
              <div
                key={index}
                className={`flex-shrink-0 py-3 px-6 mr-3 cursor-pointer rounded-full ${
                  industry.isActive ? 'bg-[#00b2a9] text-white' : 'bg-[#ffffff0d] text-neutral-200'
                }`}
                onClick={() => handleIndustryClick(industry.name)}
              >
                <span className="text-sm whitespace-nowrap font-['Inter',Helvetica]">
                  {industry.name}
                </span>
              </div>
            ))}
          </div>
          
          {/* Content Card */}
          <Card className="bg-[#ffffff0d] border-[#ffffff1a] rounded-3xl mt-0 sm:mt-0 sm:ml-4 flex-1">
            <CardContent className="p-4 sm:p-8">
              <div className="flex justify-between items-center mb-4 sm:mb-6">
                <h3 className="text-xl sm:text-[32px] text-white font-['Figtree',Helvetica] leading-7 sm:leading-[38.4px]">
                  {activeIndustry.title}
                </h3>
                <div className="w-8 h-8 sm:w-12 sm:h-12 bg-white rounded-full flex items-center justify-center">
                  <img className="w-2 h-2 sm:w-2.5 sm:h-2.5" alt="Component" src="/component-1-71.svg" />
                </div>
              </div>
              <p className="text-white text-base sm:text-xl font-['Inter',Helvetica] leading-6 mb-6 sm:mb-8">
                {activeIndustry.description}
              </p>
              <div className="space-y-6">
                {activeIndustry.features.map((feature, index) => (
                  <div key={index} className="mb-6">
                    <div className="flex items-start mb-2">
                      <img className="w-6 h-6 sm:w-8 sm:h-8 mr-3 sm:mr-4" alt="Component" src={feature.icon} />
                      <h4 className="text-white text-base sm:text-xl font-medium font-['Inter',Helvetica] leading-6 sm:leading-7">
                        {feature.title}
                      </h4>
                    </div>
                    <p className="text-white text-sm sm:text-base font-['Inter',Helvetica] leading-5 sm:leading-[22px] ml-9 sm:ml-12">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
              <div className="flex items-center mt-8 sm:mt-12 text-[#00b2a9] text-xs font-medium font-['Inter',Helvetica] tracking-[1px]">
                 {activeIndustry.name.toUpperCase()} 
                <ChevronRightIcon className="h-3 w-3 ml-2" />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Industries;