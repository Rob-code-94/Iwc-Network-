import React from 'react';
import { Link } from 'react-router-dom';
import { Microscope, Pill, Activity, FileText, BriefcaseMedical, Thermometer, Accessibility } from 'lucide-react';
import { ServiceItem } from '../../types';

const services: ServiceItem[] = [
  {
    title: 'Lab Specimens',
    description: 'Temperature-controlled transport for diagnostic specimens, blood work, and pathology samples.',
    icon: <Microscope className="h-6 w-6 text-white" />,
  },
  {
    title: 'Pharmaceuticals',
    description: 'Secure delivery of prescription medications, controlled substances, and clinical trial drugs.',
    icon: <Pill className="h-6 w-6 text-white" />,
  },
  {
    title: 'Medical Equipment',
    description: 'Logistics for durable medical equipment (DME), surgical instruments, and hospital supplies.',
    icon: <Activity className="h-6 w-6 text-white" />,
  },
  {
    title: 'Confidential Records',
    description: 'HIPAA-compliant transport of patient charts, x-rays, and sensitive legal medical documents.',
    icon: <FileText className="h-6 w-6 text-white" />,
  },
  {
    title: 'Home Health',
    description: 'Direct-to-patient delivery for home infusion therapies and renal support supplies.',
    icon: <BriefcaseMedical className="h-6 w-6 text-white" />,
  },
  {
    title: 'Cold Chain',
    description: 'Specialized refrigerated and frozen transport with continuous temperature monitoring.',
    icon: <Thermometer className="h-6 w-6 text-white" />,
  },
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-brand-600 font-semibold tracking-wide uppercase text-sm">Our Expertise</h2>
          <h3 className="mt-2 text-3xl md:text-4xl font-bold text-slate-900">Comprehensive Medical Logistics</h3>
          <p className="mt-4 text-xl text-slate-600">
            We understand that behind every delivery is a patient waiting for care. Our services are designed for speed,
            safety, and compliance.
          </p>
          <p className="mt-4 text-sm text-brand-600 font-medium">
            Member transportation available via our{' '}
            <Link to="/nemt" className="underline hover:text-brand-700">NEMT division</Link>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-slate-50 rounded-2xl p-8 hover:bg-white border border-slate-100 hover:border-brand-100 hover:shadow-2xl transition-all duration-300"
            >
              <div className="absolute top-8 right-8 opacity-10 group-hover:opacity-20 transition-opacity">
                {React.cloneElement(service.icon as React.ReactElement, { className: 'h-24 w-24 text-brand-600' })}
              </div>
              <div className="inline-flex items-center justify-center p-3 bg-brand-600 rounded-xl shadow-lg shadow-brand-600/20 mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h4>
              <p className="text-slate-600 leading-relaxed">{service.description}</p>
            </div>
          ))}

          <Link
            to="/nemt"
            className="group relative bg-brand-50 rounded-2xl p-8 border border-brand-100 hover:shadow-2xl transition-all duration-300 flex flex-col justify-center"
          >
            <div className="inline-flex items-center justify-center p-3 bg-brand-600 rounded-xl shadow-lg shadow-brand-600/20 mb-6 group-hover:scale-110 transition-transform duration-300">
              <Accessibility className="h-6 w-6 text-white" />
            </div>
            <h4 className="text-xl font-bold text-slate-900 mb-3">NEMT Member Rides</h4>
            <p className="text-slate-600 leading-relaxed mb-4">
              Non-emergency medical transportation for Medicaid and private-pay members across Dallas–Fort Worth.
            </p>
            <span className="text-brand-600 font-semibold text-sm">Go to NEMT site →</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
