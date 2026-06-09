import React from 'react';
import { Network, MapPin, Smartphone, BadgeCheck } from 'lucide-react';
import { businessInfo } from '../../constants/businessInfo';

const partners = [
  { icon: Network, title: 'Broker Network Ready', desc: 'Credentialing aligned with Modivcare and MTM partner onboarding standards for Texas Medicaid transportation.' },
  { icon: MapPin, title: 'GPS & Route Verification', desc: 'Real-time vehicle tracking with pickup/drop-off verification for authorized trip documentation.' },
  { icon: Smartphone, title: 'Electronic Visit Verification', desc: 'EVV-capable systems to meet Texas Medicaid electronic verification requirements.' },
  { icon: BadgeCheck, title: 'Driver Credentialing', desc: 'Documented background checks, training records, and monthly LEIE/OIG re-screening.' },
];

const PartnerNetwork: React.FC = () => {
  return (
    <section id="partners" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-brand-600 font-semibold tracking-wide uppercase text-sm">Partner Network</h2>
          <h3 className="mt-2 text-3xl md:text-4xl font-bold text-slate-900">Built for Medicaid Brokers & Facilities</h3>
          <p className="mt-4 text-xl text-slate-600">{businessInfo.nemt.brokerStatus}.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {partners.map((p, i) => (
            <div key={i} className="flex gap-4 p-6 bg-slate-50 rounded-2xl border border-slate-100">
              <div className="p-3 bg-brand-600 rounded-xl text-white h-fit">
                <p.icon className="h-6 w-6" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-slate-900 mb-2">{p.title}</h4>
                <p className="text-slate-600 text-sm leading-relaxed">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnerNetwork;
