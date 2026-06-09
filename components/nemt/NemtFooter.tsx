import React from 'react';
import { Link } from 'react-router-dom';
import { Accessibility } from 'lucide-react';
import { businessInfo } from '../../constants/businessInfo';

const NemtFooter: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 text-white mb-4">
              <Accessibility className="h-6 w-6" />
              <span className="text-xl font-bold">IWC NEMT</span>
            </div>
            <p className="text-sm text-slate-400">
              Non-emergency medical transportation for Dallas–Fort Worth and surrounding counties.
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#mobility" className="hover:text-brand-400 transition-colors">Mobility Levels</a></li>
              <li><a href="#schedule" className="hover:text-brand-400 transition-colors">How to Schedule</a></li>
              <li><a href="#compliance" className="hover:text-brand-400 transition-colors">Compliance</a></li>
              <li><a href="#regulatory" className="hover:text-brand-400 transition-colors">Regulatory</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Other Services</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/courier" className="hover:text-brand-400 transition-colors">Medical Courier</Link></li>
              <li><Link to="/" className="hover:text-brand-400 transition-colors">Home</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <p className="text-sm text-slate-400">
              {businessInfo.dispatch.phone}<br />
              {businessInfo.dispatch.email}
            </p>
          </div>
        </div>
        <div className="border-t border-slate-800 mt-12 pt-8 text-xs text-slate-500 text-center">
          <p>© {new Date().getFullYear()} {businessInfo.legalName}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default NemtFooter;
