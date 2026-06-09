import React, { useState } from 'react';
import { ContactFormState } from '../../types';
import { Send, CheckCircle } from 'lucide-react';
import { businessInfo } from '../../constants/businessInfo';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormState>({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTimeout(() => {
      setSubmitted(true);
      setFormData({ name: '', email: '', company: '', message: '' });
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contact" className="py-24 bg-brand-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
          <div className="grid md:grid-cols-5 h-full">
            <div className="md:col-span-2 bg-brand-600 p-10 text-white flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold mb-4">Contact IWC</h3>
                <p className="text-brand-100 mb-6">
                  Ready to schedule a pickup or need a quote? Our team is standing by 24/7.
                </p>
                <div className="space-y-4 text-sm">
                  <p><strong>Headquarters:</strong><br />{businessInfo.address.full}</p>
                  <p><strong>Dispatch:</strong><br />{businessInfo.dispatch.phone}</p>
                  <p><strong>Email:</strong><br />{businessInfo.dispatch.email}</p>
                </div>
              </div>
              <div className="mt-8 text-xs text-brand-200 opacity-60">{businessInfo.dba} © {new Date().getFullYear()}</div>
            </div>

            <div className="md:col-span-3 p-10">
              {submitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center">
                  <CheckCircle className="h-16 w-16 text-green-500 mb-4" />
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">Request Sent!</h3>
                  <p className="text-slate-600">Our dispatch team will contact you shortly.</p>
                  <button onClick={() => setSubmitted(false)} className="mt-6 text-brand-600 font-semibold hover:underline">
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {(['name', 'email', 'company'] as const).map((field) => (
                    <div key={field}>
                      <label htmlFor={field} className="block text-sm font-medium text-slate-700 mb-1">
                        {field === 'name' ? 'Full Name' : field === 'email' ? 'Email Address' : 'Organization'}
                      </label>
                      <input
                        type={field === 'email' ? 'email' : 'text'}
                        name={field}
                        id={field}
                        required={field !== 'company'}
                        value={formData[field]}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all"
                      />
                    </div>
                  ))}
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
                    />
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
