import React from 'react';
import { UserCheck, Car, Shield, ClipboardCheck } from 'lucide-react';

const standards = [
  {
    icon: UserCheck,
    title: 'Driver Qualifications',
    items: [
      'Minimum age 21 with valid Texas driver license',
      'Criminal background check and OIG/LEIE exclusion screening',
      'Drug and alcohol testing program per federal and HHSC standards',
      'PASS training or equivalent passenger assistance certification',
      'City of Dallas Ch. 47A driver permit (transportation-for-hire)',
    ],
  },
  {
    icon: Car,
    title: 'Vehicle Standards',
    items: [
      'Dallas transportation-for-hire vehicle permit where applicable',
      'ADA-compliant wheelchair lifts and securement equipment',
      'GPS tracking and electronic visit verification (EVV) capable',
      'Regular safety inspections and documented maintenance',
    ],
  },
  {
    icon: Shield,
    title: 'Member Safety & Privacy',
    items: [
      'HIPAA-compliant handling of member information',
      'Chain-of-custody for medical appointment verification',
      'Drivers trained in passenger assistance and sensitivity',
      'Zero-tolerance policy for substance impairment',
    ],
  },
  {
    icon: ClipboardCheck,
    title: 'Operational Compliance',
    items: [
      'TMHP Medicaid enrollment in progress (NPI on file upon approval)',
      'Monthly driver credential re-verification',
      'Documented grievance process with defined response timelines',
      'ADA and non-discrimination policy adherence',
    ],
  },
];

const ComplianceStandards: React.FC = () => {
  return (
    <section id="compliance" className="py-24 bg-slate-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-brand-400 font-semibold tracking-wide uppercase text-sm">Compliance</h2>
          <h3 className="mt-2 text-3xl md:text-4xl font-bold">Texas & Dallas Standards</h3>
          <p className="mt-4 text-slate-400 text-lg">
            Our drivers and vehicles meet Texas HHSC NEMT requirements and City of Dallas transportation-for-hire regulations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {standards.map((s, i) => (
            <div key={i} className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700">
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-2 bg-slate-800 rounded-lg border border-slate-700">
                  <s.icon className="h-6 w-6 text-brand-400" />
                </div>
                <h4 className="text-lg font-semibold">{s.title}</h4>
              </div>
              <ul className="space-y-2">
                {s.items.map((item) => (
                  <li key={item} className="text-slate-400 text-sm flex items-start">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand-400 mt-2 mr-3 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ComplianceStandards;
