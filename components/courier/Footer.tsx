import React from 'react';
import { Link } from 'react-router-dom';
import { Truck } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
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
              <li><a href="#services" className="hover:text-brand-400 transition-colors">Specimen Transport</a></li>
              <li><Link to="/nemt" className="hover:text-brand-400 transition-colors">NEMT Member Rides</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-brand-400 transition-colors">Home</Link></li>
              <li><a href="#contact" className="hover:text-brand-400 transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#contact" className="hover:text-brand-400 transition-colors">Contact Support</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-800 mt-12 pt-8 text-xs text-slate-500 text-center">
          <p>© {new Date().getFullYear()} IWC Network. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
