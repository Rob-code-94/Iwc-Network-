import React, { useState } from 'react';
import { User, Accessibility, BedDouble } from 'lucide-react';

const levels = [
  {
    id: 'ambulatory',
    label: 'Ambulatory',
    icon: User,
    title: 'Ambulatory (Door-to-Door)',
    description:
      'For members who can walk independently or with minimal assistance. Driver provides door-to-door service and escort as needed.',
    details: ['Walker or cane OK', 'No wheelchair required', 'Most common for clinic visits'],
  },
  {
    id: 'wheelchair',
    label: 'Wheelchair (WAV)',
    icon: Accessibility,
    title: 'Wheelchair Accessible Vehicle',
    description:
      'ADA-compliant vehicles with ramps or lifts for members who remain in their wheelchair during transport.',
    details: ['Manual or power chairs', 'Secure tie-down systems', 'Bariatric options available'],
  },
  {
    id: 'stretcher',
    label: 'Stretcher',
    icon: BedDouble,
    title: 'Stretcher / Gurney Transport',
    description:
      'For members who must remain lying down during transport. Staff-assisted loading with proper securing protocols.',
    details: ['Discharge transfers', 'Dialysis stretcher rides', 'Attendant available on request'],
  },
];

const MobilityLevels: React.FC = () => {
  const [active, setActive] = useState('ambulatory');
  const current = levels.find((l) => l.id === active)!;

  return (
    <section id="mobility" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-brand-600 font-semibold tracking-wide uppercase text-sm">Mobility Classification</h2>
          <h3 className="mt-2 text-3xl md:text-4xl font-bold text-slate-900">Select Your Mobility Level</h3>
          <p className="mt-4 text-xl text-slate-600">
            Accurate mobility classification ensures the right vehicle and assistance for every trip.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {levels.map((level) => (
            <button
              key={level.id}
              onClick={() => setActive(level.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full text-sm font-semibold transition-all ${
                active === level.id
                  ? 'bg-brand-600 text-white shadow-lg'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              <level.icon className="h-4 w-4" />
              <span>{level.label}</span>
            </button>
          ))}
        </div>

        <div className="bg-slate-50 rounded-2xl p-8 md:p-12 border border-slate-100 max-w-4xl mx-auto">
          <h4 className="text-2xl font-bold text-slate-900 mb-4">{current.title}</h4>
          <p className="text-slate-600 leading-relaxed mb-6">{current.description}</p>
          <ul className="space-y-2">
            {current.details.map((d) => (
              <li key={d} className="flex items-center text-slate-700 text-sm">
                <span className="h-2 w-2 rounded-full bg-brand-500 mr-3" />
                {d}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default MobilityLevels;
