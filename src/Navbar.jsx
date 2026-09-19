import React, { useState } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (e, id) => {
    e.preventDefault();
    setIsOpen(false);

    // If clicking About or Hero, scroll smoothly to the top of the page
    if (id === 'hero' || id === 'about') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const whatsappUrl = "https://wa.me/97471959375?text=Hello%20Mohan%20SK%20Sports%20Academy,%20I%20would%20like%20to%20inquire%20about%20skating%20classes.";

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Brand / Logo */}
        <a href="#hero" onClick={(e) => scrollToSection(e, 'hero')} className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center font-black text-slate-950 text-xl shadow-lg shadow-cyan-500/20">
            SK
          </div>
          <div>
            <span className="text-white font-bold tracking-wide text-lg block leading-tight">MOHAN SK</span>
            <span className="text-cyan-400 text-xs font-semibold tracking-widest uppercase block">SPORTS ACADEMY</span>
          </div>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
          <a href="#hero" onClick={(e) => scrollToSection(e, 'hero')} className="hover:text-cyan-400 transition-colors">About</a>
          <a href="#programs" onClick={(e) => scrollToSection(e, 'programs')} className="hover:text-cyan-400 transition-colors">Programs</a>
          <a href="#gallery" onClick={(e) => scrollToSection(e, 'gallery')} className="hover:text-cyan-400 transition-colors">Gallery</a>
          <a href="#locations" onClick={(e) => scrollToSection(e, 'locations')} className="hover:text-cyan-400 transition-colors">Locations</a>
          <a href="#contact" onClick={(e) => scrollToSection(e, 'contact')} className="hover:text-cyan-400 transition-colors">Contact</a>
        </div>

        {/* WhatsApp CTA Button */}
        <div className="hidden md:flex items-center">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 px-5 py-2.5 rounded-full font-semibold text-sm border border-emerald-500/30 transition-all duration-300"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Join Now</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-slate-300 hover:text-white p-2"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden bg-slate-950 border-b border-slate-800 px-6 py-6 flex flex-col gap-4">
          <a href="#hero" onClick={(e) => scrollToSection(e, 'hero')} className="text-slate-300 hover:text-cyan-400 font-medium py-1">About</a>
          <a href="#programs" onClick={(e) => scrollToSection(e, 'programs')} className="text-slate-300 hover:text-cyan-400 font-medium py-1">Programs</a>
          <a href="#gallery" onClick={(e) => scrollToSection(e, 'gallery')} className="text-slate-300 hover:text-cyan-400 font-medium py-1">Gallery</a>
          <a href="#locations" onClick={(e) => scrollToSection(e, 'locations')} className="text-slate-300 hover:text-cyan-400 font-medium py-1">Locations</a>
          <a href="#contact" onClick={(e) => scrollToSection(e, 'contact')} className="text-slate-300 hover:text-cyan-400 font-medium py-1">Contact</a>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-emerald-500 text-slate-950 py-3 rounded-xl font-bold text-sm mt-2"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>
      )}
    </nav>
  );
}