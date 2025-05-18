import React from 'react';
import { Mail, Phone, Instagram, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear: number = new Date().getFullYear();

  return (
    <footer className="bg-black text-gray-300 py-8 px-6 w-full shadow-lg mx- ">
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fadeIn {
            animation: fadeIn 0.8s ease-out forwards;
          }
        `}
      </style>
      <div className="max-w-6xl mx-auto animate-fadeIn">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-white text-xl font-bold mb-4">The Graphology Research Institute</h3>
            <p className="text-sm mb-4">Empowering lives through graphology since 2020.</p>
            <div className="flex items-center mt-4 space-x-4">
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <Instagram
                  size={20}
                  className="hover:text-white hover:scale-110 transition-all duration-300 cursor-pointer"
                />
              </a>
              <a
                href="https://www.facebook.com/TheGraphologyResearchInstitute"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <Facebook
                  size={20}
                  className="hover:text-white hover:scale-110 transition-all duration-300 cursor-pointer"
                />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-white transition-colors duration-300">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors duration-300">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors duration-300">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors duration-300">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white text-xl font-bold mb-4">Contact Us</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start">
                <Mail size={16} className="mr-2 mt-1 flex-shrink-0" />
                <span>tgri.india@gmail.com</span>
              </div>
              <div className="flex items-start">
                <Phone size={16} className="mr-2 mt-1 flex-shrink-0" />
                <span>+91 9004510103</span>
              </div>
              <div className="flex items-start">
                <span className="ml-6">
                  LJ Training Centre, 1st Floor, Ladiwale Joshi Compound, N C. Kelkar Marg, Mumbai, Maharashtra 400028
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-6 text-sm text-center">
          <p>© {currentYear} The Graphology Research Institute. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;