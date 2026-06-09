import React from 'react';
import NemtHeader from '../components/nemt/NemtHeader';
import NemtHero from '../components/nemt/NemtHero';
import MobilityLevels from '../components/nemt/MobilityLevels';
import NemtServices from '../components/nemt/NemtServices';
import HowToSchedule from '../components/nemt/HowToSchedule';
import ComplianceStandards from '../components/nemt/ComplianceStandards';
import PartnerNetwork from '../components/nemt/PartnerNetwork';
import RegulatoryDisclosures from '../components/nemt/RegulatoryDisclosures';
import NemtContactForm from '../components/nemt/NemtContactForm';
import NemtFooter from '../components/nemt/NemtFooter';
import AIChat from '../components/shared/AIChat';

const NemtPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 scroll-smooth">
      <NemtHeader />
      <main>
        <NemtHero />
        <MobilityLevels />
        <NemtServices />
        <HowToSchedule />
        <ComplianceStandards />
        <PartnerNetwork />
        <RegulatoryDisclosures />
        <NemtContactForm />
      </main>
      <NemtFooter />
      <AIChat businessLine="nemt" />
    </div>
  );
};

export default NemtPage;
