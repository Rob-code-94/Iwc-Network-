import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Accessibility, Phone } from 'lucide-react';
import BusinessLineSwitcher from '../shared/BusinessLineSwitcher';

const NemtHeader: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Mobility', href: '#mobility' },
    { name: 'Services', href: '#services' },
    { name: 'Schedule', href: '#schedule' },
    { name: 'Compliance', href: '#compliance' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center gap-4">
          <Link to="/" className="flex items-center space-x-2 shrink-0">
            <div className={`p-2 rounded-lg ${isScrolled ? 'bg-brand-600 text-white' : 'bg-white text-brand-600'}`}>
              <Accessibility className="h-6 w-6" />
            </div>
            <span className={`text-xl font-bold tracking-tight ${isScrolled ? 'text-slate-900' : 'text-white'}`}>
              IWC NEMT
            </span>
          </Link>

          <nav className="hidden xl:flex space-x-5 items-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-brand-500 ${
                  isScrolled ? 'text-slate-600' : 'text-slate-100'
                }`}
              >
                {link.name}
              </a>
            ))}
            <BusinessLineSwitcher />
            <a
              href="#contact"
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all shadow-lg hover:shadow-xl ${
                isScrolled ? 'bg-brand-600 text-white hover:bg-brand-700' : 'bg-white text-brand-700 hover:bg-brand-50'
              }`}
            >
              Request Ride
            </a>
          </nav>

          <div className="xl:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-md ${isScrolled ? 'text-slate-900' : 'text-white'}`}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="xl:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t border-slate-100">
          <div className="flex flex-col p-4 space-y-4">
            <BusinessLineSwitcher />
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="text-slate-600 font-medium hover:text-brand-600" onClick={() => setMobileMenuOpen(false)}>
                {link.name}
              </a>
            ))}
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="flex items-center justify-center space-x-2 w-full bg-brand-600 text-white py-3 rounded-lg font-semibold">
              <Phone className="h-4 w-4" />
              <span>Request Ride</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default NemtHeader;
