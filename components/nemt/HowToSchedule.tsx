import React from 'react';
import { Phone, FileText, Building } from 'lucide-react';

const HowToSchedule: React.FC = () => {
  return (
    <section id="schedule" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-brand-600 font-semibold tracking-wide uppercase text-sm">How to Schedule</h2>
          <h3 className="mt-2 text-3xl md:text-4xl font-bold text-slate-900">Book Your Ride</h3>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100">
            <div className="inline-flex p-3 bg-brand-600 rounded-xl text-white mb-6">
              <Building className="h-6 w-6" />
            </div>
            <h4 className="text-xl font-bold text-slate-900 mb-4">Texas Medicaid Members</h4>
            <ol className="space-y-3 text-slate-600 text-sm leading-relaxed list-decimal list-inside">
              <li>Contact your Managed Care Organization (MCO) to request NEMT.</li>
              <li>Your MCO verifies eligibility and authorizes the trip with the Medical Transportation Organization (MTO).</li>
              <li>Once authorized, IWC Network schedules your pickup with the correct mobility vehicle.</li>
              <li>For long-distance trips beyond your service area, your MCO may use HHSC Form 4214.</li>
            </ol>
          </div>

          <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100">
            <div className="inline-flex p-3 bg-brand-600 rounded-xl text-white mb-6">
              <Phone className="h-6 w-6" />
            </div>
            <h4 className="text-xl font-bold text-slate-900 mb-4">Private Pay & Facilities</h4>
            <p className="text-slate-600 text-sm leading-relaxed mb-4">
              Hospitals, clinics, and private-pay members can schedule directly through our dispatch team or the
              intake form below. Provide pickup location, destination, appointment time, and mobility level.
            </p>
            <a href="#contact" className="inline-flex items-center text-brand-600 font-semibold text-sm hover:underline">
              <FileText className="h-4 w-4 mr-2" />
              Submit NEMT intake form →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowToSchedule;
