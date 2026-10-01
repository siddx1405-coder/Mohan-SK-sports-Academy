import React from 'react';
import { MapPin, Phone, Mail, Clock, ExternalLink, MessageCircle } from 'lucide-react';

export default function Footer() {
  const scrollToSection = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer id="contact" className="bg-slate-950 border-t border-slate-800/80 pt-20 pb-8 px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          
          {/* Col 1: Brand Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center font-black text-slate-950 text-xl shadow-lg shadow-cyan-500/20">
                SK
              </div>
              <div>
                <span className="text-white font-bold tracking-wide text-lg block leading-tight">MOHAN SK</span>
                <span className="text-cyan-400 text-xs font-semibold tracking-widest uppercase block">SPORTS ACADEMY</span>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Empowering skaters across Qatar with professional indoor & outdoor coaching, slalom precision training, and full safety gear support.
            </p>
            <a
              href="https://wa.me/97471959375?text=Hello%20Mohan%20SK%20Sports%20Academy,%20I%20would%20like%20to%20inquire%20about%20skating%20classes."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold px-5 py-2.5 rounded-xl text-xs transition-all duration-300"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="text-white font-bold text-base mb-4 border-l-2 border-cyan-400 pl-3">Navigation</h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li>
                <a href="#hero" onClick={(e) => scrollToSection(e, 'hero')} className="hover:text-cyan-400 transition-colors">
                  About Academy
                </a>
              </li>
              <li>
                <a href="#programs" onClick={(e) => scrollToSection(e, 'programs')} className="hover:text-cyan-400 transition-colors">
                  Coaching Programs
                </a>
              </li>
              <li>
                <a href="#gallery" onClick={(e) => scrollToSection(e, 'gallery')} className="hover:text-cyan-400 transition-colors">
                  Live Gallery & Videos
                </a>
              </li>
              <li>
                <a href="#locations" onClick={(e) => scrollToSection(e, 'locations')} className="hover:text-cyan-400 transition-colors">
                  Training Venues
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Direct Map Links */}
          <div>
            <h4 className="text-white font-bold text-base mb-4 border-l-2 border-cyan-400 pl-3">Key Locations</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li>
                <a 
                  href="https://maps.google.com/?q=Lulu+Hypermarket+Doha+Qatar" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group flex items-start gap-2 hover:text-cyan-400 transition-colors"
                >
                  <MapPin className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                  <span>
                    <strong>Lulu Mall Branch Area</strong>
                    <span className="block text-xs text-slate-500 group-hover:text-cyan-300 flex items-center gap-1 mt-0.5">
                      Open in Google Maps <ExternalLink className="w-3 h-3" />
                    </span>
                  </span>
                </a>
              </li>
              <li>
                <a 
                  href="https://maps.google.com/?q=Pearling+Season+International+School+Doha+Mansoura" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group flex items-start gap-2 hover:text-cyan-400 transition-colors"
                >
                  <MapPin className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                  <span>
                    <strong>Pearling School Court</strong>
                    <span className="block text-xs text-slate-500 group-hover:text-cyan-300 flex items-center gap-1 mt-0.5">
                      Open in Google Maps <ExternalLink className="w-3 h-3" />
                    </span>
                  </span>
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Working Hours & Contact Info */}
          <div>
            <h4 className="text-white font-bold text-base mb-4 border-l-2 border-cyan-400 pl-3">Contact Info</h4>
            <div className="space-y-3 text-sm text-slate-400">
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-cyan-400 shrink-0" />
                <a href="tel:+97471959375" className="hover:text-cyan-400 transition-colors">
                  +974 7195 9375
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                <a href="mailto:info@mohansksports.com" className="hover:text-cyan-400 transition-colors">
                  info@mohansksports.com
                </a>
              </div>

              <div className="flex items-start gap-2.5 pt-1">
                <Clock className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <div>
                  <p>Sun - Thu: 4:00 PM - 8:00 PM</p>
                  <p className="text-xs text-slate-500">Friday & Saturday: Closed</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar & Attribution */}
        <div className="border-t border-slate-800/80 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} Mohan SK Sports Academy. All rights reserved.</p>
          
          <div className="flex flex-wrap items-center justify-center gap-3 text-slate-400">
            <span>Made by <strong className="text-slate-200">@Xenosys Qatar</strong></span>
            <span>•</span>
            <a 
              href="https://xenosysweb.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-cyan-400 hover:text-cyan-300 font-semibold transition-colors underline decoration-cyan-400/40 hover:decoration-cyan-400"
            >
              Xenosysweb.com
            </a>
            <span>•</span>
            <a 
              href="https://wa.me/97470643918" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-emerald-400 hover:text-emerald-300 font-semibold transition-colors"
            >
              WhatsApp 7064 3918
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}