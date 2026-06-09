import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Features from './components/Features';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import AIChat from './components/AIChat';

function App() {
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
      <AIChat />
    </div>
  );
}

export default App;