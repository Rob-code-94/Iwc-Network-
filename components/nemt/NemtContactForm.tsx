import React, { useState } from 'react';
import { NemtIntakeFormState, MobilityLevel } from '../../types';
import { Send, CheckCircle } from 'lucide-react';
import { businessInfo } from '../../constants/businessInfo';

const inputClass =
  'w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all';

const NemtContactForm: React.FC = () => {
  const [formData, setFormData] = useState<NemtIntakeFormState>({
    name: '',
    phone: '',
    email: '',
    medicaidId: '',
    mcoName: '',
    mobilityLevel: 'ambulatory',
    pickupAddress: '',
    destination: '',
    appointmentDate: '',
    appointmentTime: '',
    specialNeeds: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTimeout(() => {
      setSubmitted(true);
      setFormData({
        name: '', phone: '', email: '', medicaidId: '', mcoName: '',
        mobilityLevel: 'ambulatory', pickupAddress: '', destination: '',
        appointmentDate: '', appointmentTime: '', specialNeeds: '',
      });
    }, 1000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100">
          <div className="grid md:grid-cols-5 h-full">
            <div className="md:col-span-2 bg-brand-600 p-10 text-white flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold mb-4">NEMT Intake</h3>
                <p className="text-brand-100 mb-6">
                  Submit a ride request. Medicaid members may also schedule through their MCO.
                </p>
                <div className="space-y-4 text-sm">
                  <p><strong>Dispatch:</strong><br />{businessInfo.dispatch.phone}</p>
                  <p><strong>Email:</strong><br />{businessInfo.dispatch.email}</p>
                  <p><strong>Hours:</strong><br />{businessInfo.dispatch.hours}</p>
                </div>
              </div>
            </div>

            <div className="md:col-span-3 p-10">
              {submitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center">
                  <CheckCircle className="h-16 w-16 text-green-500 mb-4" />
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">Request Received!</h3>
                  <p className="text-slate-600">Our NEMT dispatch team will contact you to confirm your ride.</p>
                  <button onClick={() => setSubmitted(false)} className="mt-6 text-brand-600 font-semibold hover:underline">
                    Submit another request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">Full Name</label>
                      <input type="text" name="name" id="name" required value={formData.name} onChange={handleChange} className={inputClass} />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1">Phone</label>
                      <input type="tel" name="phone" id="phone" required value={formData.phone} onChange={handleChange} className={inputClass} />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Email</label>
                    <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} className={inputClass} />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="medicaidId" className="block text-sm font-medium text-slate-700 mb-1">Medicaid ID (optional)</label>
                      <input type="text" name="medicaidId" id="medicaidId" value={formData.medicaidId} onChange={handleChange} className={inputClass} />
                    </div>
                    <div>
                      <label htmlFor="mcoName" className="block text-sm font-medium text-slate-700 mb-1">MCO Name (optional)</label>
                      <input type="text" name="mcoName" id="mcoName" value={formData.mcoName} onChange={handleChange} className={inputClass} placeholder="e.g. Superior, Molina" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="mobilityLevel" className="block text-sm font-medium text-slate-700 mb-1">Mobility Level</label>
                    <select name="mobilityLevel" id="mobilityLevel" required value={formData.mobilityLevel} onChange={handleChange} className={inputClass}>
                      <option value="ambulatory">Ambulatory</option>
                      <option value="wheelchair">Wheelchair (WAV)</option>
                      <option value="stretcher">Stretcher</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="pickupAddress" className="block text-sm font-medium text-slate-700 mb-1">Pickup Address</label>
                    <input type="text" name="pickupAddress" id="pickupAddress" required value={formData.pickupAddress} onChange={handleChange} className={inputClass} />
                  </div>
                  <div>
                    <label htmlFor="destination" className="block text-sm font-medium text-slate-700 mb-1">Destination</label>
                    <input type="text" name="destination" id="destination" required value={formData.destination} onChange={handleChange} className={inputClass} />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="appointmentDate" className="block text-sm font-medium text-slate-700 mb-1">Appointment Date</label>
                      <input type="date" name="appointmentDate" id="appointmentDate" required value={formData.appointmentDate} onChange={handleChange} className={inputClass} />
                    </div>
                    <div>
                      <label htmlFor="appointmentTime" className="block text-sm font-medium text-slate-700 mb-1">Appointment Time</label>
                      <input type="time" name="appointmentTime" id="appointmentTime" required value={formData.appointmentTime} onChange={handleChange} className={inputClass} />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="specialNeeds" className="block text-sm font-medium text-slate-700 mb-1">Special Needs</label>
                    <textarea name="specialNeeds" id="specialNeeds" rows={3} value={formData.specialNeeds} onChange={handleChange} className={inputClass} placeholder="Oxygen, attendant, bariatric, etc." />
                  </div>
                  <button type="submit" className="w-full flex items-center justify-center py-3 px-6 rounded-lg bg-slate-900 text-white font-bold hover:bg-slate-800 transition-all shadow-lg hover:shadow-xl">
                    Submit Ride Request
                    <Send className="ml-2 h-4 w-4" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NemtContactForm;
