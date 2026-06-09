import React from 'react';
import { Truck } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center space-x-2 text-white mb-4">
              <Truck className="h-6 w-6" />
              <span className="text-xl font-bold">IWC Network</span>
            </div>
            <p className="text-sm text-slate-400">
              The trusted partner for critical medical logistics. Connecting care through reliable delivery.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-brand-400 transition-colors">Specimen Transport</a></li>
              <li><a href="#" className="hover:text-brand-400 transition-colors">Pharmacy Delivery</a></li>
              <li><a href="#" className="hover:text-brand-400 transition-colors">Hospital Logistics</a></li>
              <li><a href="#" className="hover:text-brand-400 transition-colors">Home Health</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-brand-400 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-brand-400 transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-brand-400 transition-colors">Compliance</a></li>
              <li><a href="#" className="hover:text-brand-400 transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#contact" className="hover:text-brand-400 transition-colors">Contact Support</a></li>
              <li><a href="#" className="hover:text-brand-400 transition-colors">Driver Portal</a></li>
              <li><a href="#" className="hover:text-brand-400 transition-colors">Client Login</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
          <p>© {new Date().getFullYear()} IWC Network. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;