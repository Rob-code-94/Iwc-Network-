import React from 'react';
import { MapPin, Lock, UserCheck, Clock4 } from 'lucide-react';

const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Decorative Grid */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-brand-400 font-semibold tracking-wide uppercase text-sm mb-2">Why IWC Network</h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              More Than Just a <br/> Courier Service
            </h3>
            <p className="text-slate-400 text-lg mb-8 leading-relaxed">
              We are an extension of your healthcare facility. Our drivers are trained to handle bio-hazardous materials and understand the critical nature of medical deliveries.
            </p>
            
            <div className="space-y-6">
              {[
                {
                  icon: <Clock4 className="h-6 w-6 text-brand-400" />,
                  title: "Real-Time Tracking",
                  desc: "Watch your delivery from pickup to drop-off with our advanced GPS portal."
                },
                {
                  icon: <Lock className="h-6 w-6 text-brand-400" />,
                  title: "HIPAA Compliant",
                  desc: "Strict adherence to patient privacy laws and secure chain-of-custody protocols."
                },
                {
                  icon: <UserCheck className="h-6 w-6 text-brand-400" />,
                  title: "Certified Drivers",
                  desc: "OSHA & Bloodborne Pathogen trained couriers, uniformed and ID badged."
                }
              ].map((feature, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="p-2 bg-slate-800 rounded-lg border border-slate-700">
                      {feature.icon}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">{feature.title}</h4>
                    <p className="text-slate-400 text-sm mt-1">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-brand-500/20 blur-2xl rounded-full"></div>
            <img 
              src="https://images.unsplash.com/photo-1579684385180-1ea55f9f7484?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
              alt="Medical Professional with Tablet" 
              className="relative rounded-2xl shadow-2xl border border-slate-700/50 grayscale hover:grayscale-0 transition-all duration-500"
            />
            
            {/* Floating Stats Card */}
            <div className="absolute -bottom-8 -left-8 bg-white text-slate-900 p-6 rounded-xl shadow-xl max-w-xs hidden sm:block">
              <div className="flex items-center space-x-2 mb-2">
                <MapPin className="h-5 w-5 text-brand-600" />
                <span className="font-bold text-sm">Live Status</span>
              </div>
              <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden mb-2">
                <div className="h-full bg-green-500 w-3/4 animate-pulse"></div>
              </div>
              <p className="text-xs text-slate-500">Order #39201 is 5 mins away from destination.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;