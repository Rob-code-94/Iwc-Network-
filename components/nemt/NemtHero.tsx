import React from 'react';
import { ArrowRight, MapPin, ShieldCheck } from 'lucide-react';
import { businessInfo } from '../../constants/businessInfo';

const NemtHero: React.FC = () => {
  return (
    <div className="relative w-full min-h-[600px] h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1581595220892-b0739db3a8f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`,
        }}
      >
        <div className="absolute inset-0 bg-slate-900/75 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left pt-20">
        <div className="sm:max-w-2xl">
          <div className="inline-flex items-center space-x-2 bg-brand-500/20 border border-brand-400/30 rounded-full px-4 py-1.5 mb-6 backdrop-blur-md">
            <MapPin className="h-4 w-4 text-brand-300" />
            <span className="text-brand-100 text-sm font-medium tracking-wide">
              Serving Dallas–Fort Worth & North Texas
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.1] mb-6">
            Non-Emergency <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-300 to-white">
              Medical Transportation
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-300 mb-8 max-w-xl leading-relaxed">
            Safe, reliable rides to medical appointments for Medicaid and private-pay members. Ambulatory, wheelchair,
            and stretcher transport with Texas-compliant drivers.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-slate-900 bg-brand-400 rounded-lg hover:bg-brand-300 transition-all shadow-[0_0_20px_rgba(56,189,248,0.3)]"
            >
              Schedule a Ride
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a
              href="#mobility"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white border border-slate-600 bg-slate-800/50 rounded-lg hover:bg-slate-800 transition-all backdrop-blur-sm"
            >
              Mobility Levels
            </a>
          </div>

          <div className="mt-10 flex items-center space-x-3 text-slate-300 border-t border-slate-700/50 pt-8">
            <ShieldCheck className="h-8 w-8 text-brand-400" />
            <div className="text-sm">
              <p className="font-semibold text-white">Texas Medicaid Ready</p>
              <p>{businessInfo.nemt.brokerStatus}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NemtHero;
