import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Clock } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative w-full h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1516574187841-693083f69802?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`,
        }}
      >
        <div className="absolute inset-0 bg-slate-900/70 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left pt-20">
        <div className="sm:max-w-2xl">
          <div className="inline-flex items-center space-x-2 bg-brand-500/20 border border-brand-400/30 rounded-full px-4 py-1.5 mb-6 backdrop-blur-md">
            <span className="flex h-2 w-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-brand-100 text-sm font-medium tracking-wide">HIPAA Compliant • 24/7 Available</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white tracking-tight leading-[1.1] mb-6">
            Critical Medical <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-300 to-white">
              Logistics Delivered.
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-300 mb-4 max-w-xl leading-relaxed">
            The IWC Network ensures the safe, secure, and timely delivery of sensitive medical specimens,
            pharmaceuticals, and equipment. Precision you can trust.
          </p>
          <p className="text-sm text-slate-400 mb-8 max-w-xl">
            Need member transportation?{' '}
            <Link to="/nemt" className="text-brand-300 hover:text-brand-200 font-medium underline">
              Visit our NEMT division →
            </Link>
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-slate-900 bg-brand-400 rounded-lg hover:bg-brand-300 transition-all shadow-[0_0_20px_rgba(56,189,248,0.3)] hover:shadow-[0_0_30px_rgba(56,189,248,0.5)]"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white border border-slate-600 bg-slate-800/50 rounded-lg hover:bg-slate-800 transition-all backdrop-blur-sm"
            >
              View Services
            </a>
          </div>

          <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 gap-6 text-slate-300 border-t border-slate-700/50 pt-8">
            <div className="flex items-center space-x-3">
              <ShieldCheck className="h-8 w-8 text-brand-400" />
              <div className="text-sm">
                <p className="font-semibold text-white">Secure Chain</p>
                <p>Of Custody</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Clock className="h-8 w-8 text-brand-400" />
              <div className="text-sm">
                <p className="font-semibold text-white">STAT Service</p>
                <p>99.9% On-time</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
