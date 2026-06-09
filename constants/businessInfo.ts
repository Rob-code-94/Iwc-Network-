/** Central source for IWC Network business details — update with verified license/NPI numbers. */
export const businessInfo = {
  legalName: 'The IWC Network LLC',
  dba: 'IWC Network',
  tagline: 'Independent Wellness Courier Network — Two services, one trusted partner',

  address: {
    street: 'Dallas, TX',
    city: 'Dallas',
    state: 'TX',
    zip: '',
    full: 'Dallas, Texas',
  },

  dispatch: {
    phone: '(214) 555-0199',
    email: 'dispatch@iwcnetwork.com',
    hours: '24/7 Dispatch',
  },

  nemt: {
    grievanceOfficer: 'NEMT Compliance Officer',
    grievanceEmail: 'compliance@iwcnetwork.com',
    grievancePhone: '(214) 555-0199',
    grievanceResponseDays: 5,
    npi: 'Pending TMHP enrollment',
    dallasTfhAuthority: 'Pending City of Dallas Ch. 47A operating authority',
    serviceArea: [
      'Dallas County',
      'Tarrant County',
      'Collin County',
      'Denton County',
      'Ellis County',
      'Rockwall County',
    ],
    brokerStatus: 'Credentialing in progress with regional Medicaid transportation brokers',
  },

  regulatoryLinks: {
    tmhpMedTransport: 'https://www.tmhp.com/sites/default/files/file-library/resources/provider-manuals/tmppm/pdf-chapters/2025/2025-07-july/2_14_med_transport_program.pdf',
    tmhpPems: 'https://www.tmhp.com/topics/provider-enrollment/pems/start-application',
    hhscForm4214: 'https://www.hhs.texas.gov/regulations/forms/4000-4999/form-4214-request-non-emergency-medical-transportation-nemt-services',
    hhscNemtHandbook: 'https://www.hhs.texas.gov/sites/default/files/documents/laws-regulations/handbooks/mepd/archive/16-4/16-4.pdf',
    dallasChapter47A: 'https://dallascityhall.com/departments/codecompliance/DCH%20documents/CHAPTER%2047A%20TRANSPORTATION%20FOR%20HIRE.html',
  },
} as const;

export type BusinessLine = 'courier' | 'nemt';
