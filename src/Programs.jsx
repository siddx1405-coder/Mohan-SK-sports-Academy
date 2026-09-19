import React from 'react';
import { CheckCircle2, Sparkles, UserCheck, Shield, Award } from 'lucide-react';

export default function Programs() {
  return (
    <section id="programs" className="py-24 px-6 relative z-10">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-cyan-400 font-semibold text-sm uppercase tracking-wider bg-cyan-500/10 px-4 py-1.5 rounded-full border border-cyan-500/20">
            Training Packages
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white mt-4 mb-4">
            CHOOSE YOUR PROGRAM
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Structured 8-session packages designed for complete beginners to intermediate skaters. Free professional skate shoes and protective gear provided for all classes.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          
          {/* Kids Card */}
          <div className="glass-card rounded-3xl p-8 sm:p-10 flex flex-col justify-between relative overflow-hidden group hover:border-cyan-400/50 transition-all duration-300">
            <div>
              <div className="flex justify-between items-center mb-6">
                <span className="text-xs font-bold uppercase tracking-widest text-cyan-400 bg-cyan-400/10 px-3 py-1 rounded-full border border-cyan-400/20">
                  For Ages 4 - 15
                </span>
                <Sparkles className="w-5 h-5 text-cyan-400" />
              </div>
              
              <h3 className="text-3xl font-extrabold text-white mb-2">Kids Skate Program</h3>
              <p className="text-slate-400 text-sm mb-6">Fun, safe, and engaging sessions designed to build confidence, balance, and core skating techniques.</p>
              
              <div className="flex items-baseline gap-2 mb-8 bg-slate-900/60 p-4 rounded-2xl border border-slate-800">
                <span className="text-5xl font-black text-white">200</span>
                <span className="text-cyan-400 font-bold text-xl">QAR</span>
                <span className="text-slate-400 text-sm ml-auto font-medium">/ 8 Sessions Total</span>
              </div>

              <ul className="space-y-4 text-slate-300 text-sm mb-8">
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0" />
                  <span>2 Classes Per Week (1 Hour / Session)</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0" />
                  <span>Skate Shoes Provided Until Finished</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0" />
                  <span>Full Safety Gear (Helmet, Kneepads, Wristguards)</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0" />
                  <span>Access to Indoor & Outdoor Venues</span>
                </li>
              </ul>
            </div>

            <a
              href="https://wa.me/97471959375?text=Hi!%20I%20would%20like%20to%20enroll%20my%20child%20in%20the%20Kids%20Skate%20Program%20(200%20QAR)."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold py-4 rounded-2xl text-center block transition-all shadow-lg shadow-cyan-400/20 hover:scale-[1.02]"
            >
              Enroll Kids Now
            </a>
          </div>

          {/* Adults Card */}
          <div className="glass-card rounded-3xl p-8 sm:p-10 flex flex-col justify-between relative overflow-hidden border-emerald-500/30 group hover:border-emerald-400/60 transition-all duration-300">
            <div className="absolute top-0 right-0 bg-emerald-500 text-slate-950 font-extrabold text-[10px] uppercase tracking-wider px-4 py-1.5 rounded-bl-2xl">
              Most Popular
            </div>

            <div>
              <div className="flex justify-between items-center mb-6">
                <span className="text-xs font-bold uppercase tracking-widest text-emerald-400 bg-emerald-400/10 px-3 py-1 rounded-full border border-emerald-400/20">
                  For Adults & Seniors
                </span>
                <UserCheck className="w-5 h-5 text-emerald-400" />
              </div>
              
              <h3 className="text-3xl font-extrabold text-white mb-2">Adult Skate Program</h3>
              <p className="text-slate-400 text-sm mb-6">Tailored for adult fitness, urban mobility, stance control, and stress-free beginner coaching.</p>
              
              <div className="flex items-baseline gap-2 mb-8 bg-slate-900/60 p-4 rounded-2xl border border-slate-800">
                <span className="text-5xl font-black text-white">250</span>
                <span className="text-emerald-400 font-bold text-xl">QAR</span>
                <span className="text-slate-400 text-sm ml-auto font-medium">/ 8 Sessions Total</span>
              </div>

              <ul className="space-y-4 text-slate-300 text-sm mb-8">
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span>2 Classes Per Week (1 Hour / Session)</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span>Skate Shoes Provided Until Finished</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span>Full Safety Gear Provided</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span>Adult-Specific Stance & Speed Drills</span>
                </li>
              </ul>
            </div>

            <a
              href="https://wa.me/97471959375?text=Hi!%20I%20would%20like%20to%20enroll%20in%20the%20Adult%20Skate%20Program%20(250%20QAR)."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold py-4 rounded-2xl text-center block transition-all shadow-lg shadow-emerald-500/20 hover:scale-[1.02]"
            >
              Enroll Adult Now
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}