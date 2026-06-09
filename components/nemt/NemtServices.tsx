import React from 'react';
import { Calendar, Building2, Droplets, Home, Repeat } from 'lucide-react';

const services = [
  { icon: Calendar, title: 'Medical Appointments', desc: 'Doctor visits, specialist referrals, therapy, and outpatient procedures.' },
  { icon: Droplets, title: 'Dialysis Transport', desc: 'Recurring dialysis trips with on-time pickup and return coordination.' },
  { icon: Home, title: 'Discharge & Home Health', desc: 'Hospital discharge transfers and rides to home health or rehab facilities.' },
  { icon: Building2, title: 'Facility Contracts', desc: 'Dedicated routes for clinics, nursing facilities, and healthcare systems.' },
  { icon: Repeat, title: 'Recurring Rides', desc: 'Standing orders for ongoing treatment schedules and wellness visits.' },
];

const NemtServices: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-brand-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-brand-600 font-semibold tracking-wide uppercase text-sm">NEMT Services</h2>
          <h3 className="mt-2 text-3xl md:text-4xl font-bold text-slate-900">Rides That Keep Care on Schedule</h3>
          <p className="mt-4 text-xl text-slate-600">
            Medicaid and private-pay transportation across the Dallas–Fort Worth metroplex.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <div
              key={i}
              className="group bg-white rounded-2xl p-8 border border-slate-100 hover:border-brand-100 hover:shadow-2xl transition-all duration-300"
            >
              <div className="inline-flex p-3 bg-brand-600 rounded-xl text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                <s.icon className="h-6 w-6" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">{s.title}</h4>
              <p className="text-slate-600 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NemtServices;
