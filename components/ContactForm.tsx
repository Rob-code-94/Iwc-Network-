import React, { useState } from 'react';
import { ContactFormState } from '../types';
import { Send, CheckCircle } from 'lucide-react';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormState>({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      setSubmitted(true);
      setFormData({ name: '', email: '', company: '', message: '' });
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contact" className="py-24 bg-brand-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
          <div className="grid md:grid-cols-5 h-full">
            {/* Left Side Info */}
            <div className="md:col-span-2 bg-brand-600 p-10 text-white flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold mb-4">Contact IWC</h3>
                <p className="text-brand-100 mb-6">
                  Ready to schedule a pickup or need a quote? Our team is standing by 24/7.
                </p>
                <div className="space-y-4 text-sm">
                  <p><strong>Headquarters:</strong><br/>123 Medical Way<br/>Health City, ST 12345</p>
                  <p><strong>Dispatch:</strong><br/>(555) 123-4567</p>
                  <p><strong>Email:</strong><br/>dispatch@iwcnetwork.com</p>
                </div>
              </div>
              <div className="mt-8 text-xs text-brand-200 opacity-60">
                IWC Network © 2024
              </div>
            </div>

            {/* Right Side Form */}
            <div className="md:col-span-3 p-10">
              {submitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center">
                  <CheckCircle className="h-16 w-16 text-green-500 mb-4" />
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">Request Sent!</h3>
                  <p className="text-slate-600">Our dispatch team will contact you shortly.</p>
                  <button 
                    onClick={() => setSubmitted(false)}
                    className="mt-6 text-brand-600 font-semibold hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all"
                      placeholder="Dr. John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all"
                      placeholder="john@hospital.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-1">Organization</label>
                    <input
                      type="text"
                      name="company"
                      id="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all"
                      placeholder="Medical Center Name"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">Service Request</label>
                    <textarea
                      name="message"
                      id="message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all"
                      placeholder="Please describe your delivery needs..."
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center py-3 px-6 rounded-lg bg-slate-900 text-white font-bold hover:bg-slate-800 transition-all shadow-lg hover:shadow-xl"
                  >
                    Get Quote
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

export default ContactForm;