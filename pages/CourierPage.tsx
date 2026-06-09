import React from 'react';
import Header from '../components/courier/Header';
import Hero from '../components/courier/Hero';
import Services from '../components/courier/Services';
import Features from '../components/courier/Features';
import ContactForm from '../components/courier/ContactForm';
import Footer from '../components/courier/Footer';
import AIChat from '../components/shared/AIChat';

const CourierPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 scroll-smooth">
      <Header />
      <main>
        <Hero />
        <Services />
        <Features />
        <ContactForm />
      </main>
      <Footer />
      <AIChat businessLine="courier" />
    </div>
  );
};

export default CourierPage;
