
import React from 'react';
import { Wand2, Shield, User2, Map, Mail, Phone, ExternalLink } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="border-t border-wizware-gold/10 py-12 sacred-geometry bg-wizware-black">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start mb-4">
              <img 
                src="src/assets/orb.png" 
                alt="WizWare Logo" 
                className="w-12 h-12 mr-2"
              />
              <div>
                <h3 className="wizware-title text-xl mb-1">WIZWARE</h3>
                <p className="text-wizware-teal text-xs font-cinzel">Where Code Becomes Magic</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm max-w-md font-quicksand">
              Crafting magical gaming experiences that transport players to extraordinary worlds
              and teach valuable programming skills through immersive gameplay.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row justify-start items-center">
            
            <div className="mr-8">
              <h4 className="text-wizware-gold font-cinzel text-lg mb-4">Legal</h4>
              <ul className="space-y-2 font-quicksand">
                <li><a href="/privacy-policy" className="text-gray-300 hover:text-wizware-gold transition-colors">Privacy Policy</a></li>
                <li><a href="/terms" className="text-gray-300 hover:text-wizware-gold transition-colors">Terms of Service</a></li>
                <li><a href="/cookie-policy" className="text-gray-300 hover:text-wizware-gold transition-colors">Cookie Policy</a></li>
                <li><a href="/eula" className="text-gray-300 hover:text-wizware-gold transition-colors">EULA</a></li>
                <li><a href="/imprint" className="text-gray-300 hover:text-wizware-gold transition-colors">Imprint</a></li>
                <li><a href="/data-processing" className="text-gray-300 hover:text-wizware-gold transition-colors">Data Processing</a></li>
              </ul>
            </div>
            
            <div className="col-span-2 sm:col-span-1">
              <h4 className="text-wizware-gold font-cinzel text-lg mb-4">Contact</h4>
              <ul className="space-y-2 font-quicksand">
                <li className="flex items-center justify-center md:justify-start text-gray-300">
                  <Mail size={14} className="mr-2" /> contact@wizware-games.com
                </li>
                <li className="flex items-center justify-center md:justify-start text-gray-300">
                  <Phone size={14} className="mr-2" /> +44 123 456 7890
                </li>
                <li className="flex items-center justify-center md:justify-start text-gray-300">
                  <Map size={14} className="mr-2" /> 123 Magic Lane, Digital City
                </li>
                <li className="flex items-center justify-center md:justify-start text-gray-300">
                  <User2 size={14} className="mr-2" /> Ako, CEO
                </li>
                <li><a href="#" className="text-gray-300 hover:text-wizware-gold transition-colors flex items-center justify-center md:justify-start">
                  <Shield size={14} className="mr-2" /> Data Protection
                </a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="cosmic-divider my-10"></div>
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-6 md:mb-0 font-quicksand order-2 md:order-1">
            <p className="mb-2">
              &copy; {currentYear} WizWare Studios Ltd. All rights reserved. Company Reg: 123456789.
            </p>
            <p>
              WizWare Studios Ltd is registered in Estonia. VAT Number: EE123456789.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 mb-4 md:mb-0 order-1 md:order-2">
            <a href="/privacy" className="text-gray-400 hover:text-wizware-gold transition-colors font-quicksand">Privacy</a>
            <a href="/terms" className="text-gray-400 hover:text-wizware-gold transition-colors font-quicksand">Terms</a>
            <a href="/cookies" className="text-gray-400 hover:text-wizware-gold transition-colors font-quicksand">Cookies</a>
            <a href="/accessibility" className="text-gray-400 hover:text-wizware-gold transition-colors font-quicksand">Accessibility</a>
            <a href="#" className="text-gray-400 hover:text-wizware-gold transition-colors flex items-center font-quicksand">
              <Wand2 size={12} className="mr-1" /> Made with magic
            </a>
          </div>
        </div>
        
        {/* EU Legal Requirements */}
        <div className="mt-6 pt-6 border-t border-wizware-gold/10 text-xs text-gray-500 font-quicksand">
          <p className="mb-2">
            This website uses cookies to ensure you get the best experience. By continuing to use this site, you consent to our use of cookies in accordance with our Cookie Policy.
          </p>
          <p className="mb-2">
            In compliance with the GDPR, we process personal data as described in our Privacy Policy. You have the right to access, rectify, port, and erase your data.
          </p>
          <p>
            For Alternative Dispute Resolution according to Art. 14 Para. 1 ODR-VO and § 36 VSBG: The European Commission provides a platform for online dispute resolution (OS), which you can find at <a href="https://ec.europa.eu/consumers/odr/" className="text-wizware-teal hover:underline" target="_blank" rel="noopener noreferrer">https://ec.europa.eu/consumers/odr/ <ExternalLink size={10} className="inline" /></a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
