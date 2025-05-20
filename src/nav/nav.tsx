import { useState, useEffect } from 'react';
import { ChevronDownIcon, ChevronRightIcon, MenuIcon, XIcon } from 'lucide-react';

// Button component
interface ButtonProps {
  className: string;
  children: React.ReactNode;
}

const Button = ({ className, children }: ButtonProps) => {
  return (
    <button className={`flex items-center justify-center ${className}`}>
      {children}
    </button>
  );
};

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Menu items data
  const menuItems = [
    { label: "Services", hasDropdown: true },
    { label: "Industries", hasDropdown: true },
    { label: "Case Studies", hasDropdown: false },
    { label: "Insights", hasDropdown: true },
    { label: "About", hasDropdown: true }
  ];

  // Handle window resize to determine mobile view
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    
    // Set initial value
    handleResize();
    
    // Add event listener
    window.addEventListener('resize', handleResize);
    
    // Clean up
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full h-auto md:h-[72px] bg-[#1e1e1e] fixed top-0 left-0 z-50">
      <div className="relative w-full max-w-[1440px] h-full mx-auto px-4 md:px-6 lg:px-12">
        <div className="flex items-center justify-between h-[72px]">
          {/* Logo */}
          <div className="flex items-center">
            <div className="w-[100px] md:w-[120px]">
              <img
                className="w-full h-6"
                alt="Logo"
                src="/component-1-29.svg"
              />
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center">
            <nav className="flex items-center mr-6">
              {menuItems.map((item, index) => (
                <div
                  key={index}
                  className="relative h-[72px] px-2.5 flex items-center cursor-pointer"
                >
                  <div className="font-normal text-white text-sm leading-[16.8px] font-['Inter',Helvetica] tracking-[0] whitespace-nowrap">
                    {item.label}
                  </div>

                  {item.hasDropdown && (
                    <ChevronDownIcon className="w-[13px] h-[7px] ml-2 text-white" />
                  )}
                </div>
              ))}
            </nav>
            
            {/* Careers Link */}
            <div className="h-[72px] flex items-center px-2.5 mr-4">
              <div className="font-normal text-white text-sm leading-[16.8px] font-['Inter',Helvetica] tracking-[0] whitespace-nowrap cursor-pointer">
                Careers
              </div>
            </div>

            {/* Let's Talk Button */}
            <Button className="w-[150px] h-[42px] rounded-[20px] bg-[#00b2a9] border border-solid text-white hover:bg-[#00a29a] flex items-center justify-center">
              <span className="font-normal text-sm leading-6 font-['Inter',Helvetica]">
                LET&#39;S TALK
              </span>
              <ChevronRightIcon className="w-[13px] h-3 ml-2" />
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button 
              onClick={toggleMenu}
              className="text-white p-2"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <XIcon className="w-6 h-6" />
              ) : (
                <MenuIcon className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        {isMenuOpen && (
          <div className="lg:hidden bg-[#1e1e1e] py-4 border-t border-gray-700">
            <nav className="flex flex-col">
              {menuItems.map((item, index) => (
                <div
                  key={index}
                  className="py-3 px-4 flex items-center justify-between cursor-pointer hover:bg-[#2a2a2a]"
                >
                  <div className="font-normal text-white text-sm leading-[16.8px] font-['Inter',Helvetica]">
                    {item.label}
                  </div>
                  
                  {item.hasDropdown && (
                    <ChevronDownIcon className="w-[13px] h-[7px] text-white" />
                  )}
                </div>
              ))}
              
              {/* Careers Link in Mobile Menu */}
              <div className="py-3 px-4 cursor-pointer hover:bg-[#2a2a2a]">
                <div className="font-normal text-white text-sm leading-[16.8px] font-['Inter',Helvetica]">
                  Careers
                </div>
              </div>
              
              {/* Let's Talk Button in Mobile Menu */}
              <div className="mx-4 mt-4">
                <Button className="w-full h-[42px] rounded-[20px] bg-[#00b2a9] border border-solid text-white hover:bg-[#00a29a] flex items-center justify-center">
                  <span className="font-normal text-sm leading-6 font-['Inter',Helvetica]">
                    LET&#39;S TALK
                  </span>
                  <ChevronRightIcon className="w-[13px] h-3 ml-2" />
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}