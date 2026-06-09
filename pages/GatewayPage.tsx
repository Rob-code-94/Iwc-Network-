import React from 'react';
import { Link } from 'react-router-dom';
import { Truck, Accessibility, ArrowRight } from 'lucide-react';
import { businessInfo } from '../constants/businessInfo';

const GatewayPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <header className="py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-center space-x-2">
          <div className="p-2 rounded-lg bg-brand-600 text-white">
            <Truck className="h-6 w-6" />
          </div>
          <span className="text-xl font-bold tracking-tight text-slate-900">IWC Network</span>
        </div>
      </header>

      <main className="flex-1 flex flex-col justify-center px-4 sm:px-6 lg:px-8 pb-12">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <p className="text-brand-600 font-semibold tracking-wide uppercase text-sm mb-3">
            Welcome
          </p>
          <h1 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">
            How can we help you today?
          </h1>
          <p className="text-lg text-slate-600">{businessInfo.tagline}</p>
        </div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 w-full">
          <Link
            to="/courier"
            className="group bg-white rounded-2xl p-10 border border-slate-100 hover:border-brand-100 hover:shadow-2xl transition-all duration-300"
          >
            <div className="inline-flex p-4 bg-brand-600 rounded-xl text-white mb-6 group-hover:scale-110 transition-transform duration-300">
              <Truck className="h-8 w-8" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900 mb-3">Medical Courier & Logistics</h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              STAT specimen transport, pharmaceuticals, medical equipment, and HIPAA-compliant
              chain-of-custody delivery for healthcare facilities.
            </p>
            <span className="inline-flex items-center text-brand-600 font-semibold">
              Enter Courier Site <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>

          <Link
            to="/nemt"
            className="group bg-white rounded-2xl p-10 border border-slate-100 hover:border-brand-100 hover:shadow-2xl transition-all duration-300"
          >
            <div className="inline-flex p-4 bg-brand-600 rounded-xl text-white mb-6 group-hover:scale-110 transition-transform duration-300">
              <Accessibility className="h-8 w-8" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900 mb-3">Non-Emergency Medical Transportation</h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              Medicaid and private-pay member rides across Dallas–Fort Worth. Ambulatory, wheelchair,
              and stretcher transport with Texas-compliant drivers and vehicles.
            </p>
            <span className="inline-flex items-center text-brand-600 font-semibold">
              Enter NEMT Site <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>
        </div>
      </main>

      <footer className="py-6 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} {businessInfo.dba}. All rights reserved.
      </footer>
    </div>
  );
};

export default GatewayPage;
