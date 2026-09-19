import React from 'react';
import { ShieldCheck, Flame, ChevronRight, Award } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-36 pb-20 px-6 overflow-hidden min-h-[85vh] flex items-center justify-center">
      
      {/* Background Neon Glow Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        
        {/* Registration Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-800/80 border border-cyan-500/30 text-cyan-400 text-xs sm:text-sm font-semibold mb-8 backdrop-blur-md shadow-lg shadow-cyan-500/10">
          <Award className="w-4 h-4 text-cyan-400" />
          <span>Qatar CR Registered: 243674</span>
        </div>

        {/* Hero Title */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight mb-6 leading-none">
          MASTER THE ART OF <br />
          <span className="text-gradient">ROLLER SKATING</span>
        </h1>

        {/* Subtitle */}
        <p className="text-slate-300 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
          Join Qatar’s top roller skating academy for kids and adults. Expert safety guidance, full equipment provided, and indoor/outdoor venues across Doha!
        </p>

        {/* Call to Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a
            href="https://wa.me/97471959375?text=Hi!%20I%20want%20to%20register%20for%20roller%20skating%20classes."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 text-slate-950 font-bold px-8 py-4 rounded-full text-lg transition-all shadow-lg shadow-cyan-500/25 hover:scale-105"
          >
            <Flame className="w-5 h-5 fill-slate-950" />
            <span>Book Your Class</span>
          </a>

          <a
            href="#programs"
            className="w-full sm:w-auto flex items-center justify-center gap-2 glass-panel hover:bg-slate-800/80 text-white font-semibold px-8 py-4 rounded-full text-lg transition-all border border-slate-700"
          >
            <span>View Packages</span>
            <ChevronRight className="w-5 h-5 text-cyan-400" />
          </a>
        </div>

        {/* Key Features Banner */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
          <div className="glass-panel p-4 rounded-2xl flex items-center justify-center gap-3">
            <ShieldCheck className="w-5 h-5 text-cyan-400 shrink-0" />
            <span className="text-sm font-medium text-slate-200">Free Gear Included</span>
          </div>

          <div className="glass-panel p-4 rounded-2xl flex items-center justify-center gap-3">
            <ShieldCheck className="w-5 h-5 text-cyan-400 shrink-0" />
            <span className="text-sm font-medium text-slate-200">Certified Trainers</span>
          </div>

          <div className="glass-panel p-4 rounded-2xl flex items-center justify-center gap-3">
            <ShieldCheck className="w-5 h-5 text-cyan-400 shrink-0" />
            <span className="text-sm font-medium text-slate-200">4 Prime Locations</span>
          </div>
        </div>

      </div>
    </section>
  );
}