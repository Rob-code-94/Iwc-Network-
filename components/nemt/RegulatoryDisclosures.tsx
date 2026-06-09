import React from 'react';
import { ExternalLink } from 'lucide-react';
import { businessInfo } from '../../constants/businessInfo';

const RegulatoryDisclosures: React.FC = () => {
  const links = [
    { label: 'TMHP Medical Transportation Program (Ch. 2.14)', href: businessInfo.regulatoryLinks.tmhpMedTransport },
    { label: 'TMHP Provider Enrollment (PEMS)', href: businessInfo.regulatoryLinks.tmhpPems },
    { label: 'HHSC Form 4214 — Long-Distance NEMT', href: businessInfo.regulatoryLinks.hhscForm4214 },
    { label: 'HHSC NEMT Handbook', href: businessInfo.regulatoryLinks.hhscNemtHandbook },
    { label: 'City of Dallas Ch. 47A — Transportation for Hire', href: businessInfo.regulatoryLinks.dallasChapter47A },
  ];

  return (
    <section id="regulatory" className="py-24 bg-brand-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-brand-600 font-semibold tracking-wide uppercase text-sm">Regulatory</h2>
          <h3 className="mt-2 text-3xl md:text-4xl font-bold text-slate-900">Disclosures & References</h3>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
            <h4 className="text-lg font-bold text-slate-900 mb-4">Provider Information</h4>
            <dl className="space-y-3 text-sm text-slate-600">
              <div><dt className="font-semibold text-slate-900">Legal Entity</dt><dd>{businessInfo.legalName}</dd></div>
              <div><dt className="font-semibold text-slate-900">Service Area</dt><dd>{businessInfo.nemt.serviceArea.join(', ')}</dd></div>
              <div><dt className="font-semibold text-slate-900">Dispatch</dt><dd>{businessInfo.dispatch.phone}</dd></div>
            </dl>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
            <h4 className="text-lg font-bold text-slate-900 mb-4">Required Notices</h4>
            <ul className="space-y-3 text-sm text-slate-600 leading-relaxed">
              <li><strong className="text-slate-900">HIPAA:</strong> Member health information is protected per federal privacy regulations.</li>
              <li><strong className="text-slate-900">ADA:</strong> We provide reasonable accommodations and accessible vehicles upon request.</li>
              <li><strong className="text-slate-900">Non-Discrimination:</strong> No person is excluded from participation or denied benefits on grounds of race, color, national origin, sex, age, or disability.</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 bg-white rounded-2xl p-8 border border-slate-100">
          <h4 className="text-lg font-bold text-slate-900 mb-4">Official Reference Links</h4>
          <ul className="grid sm:grid-cols-2 gap-3">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-sm text-brand-600 hover:text-brand-700 font-medium"
                >
                  <ExternalLink className="h-4 w-4 mr-2 shrink-0" />
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-xs text-slate-500">
            Information on this site is for general reference only and does not constitute legal advice. Verify enrollment
            and billing status with TMHP before relying on Medicaid coverage.
          </p>
        </div>
      </div>
    </section>
  );
};

export default RegulatoryDisclosures;
