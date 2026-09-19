import React from 'react';
import { MapPin, Calendar, Clock, ExternalLink } from 'lucide-react';

export default function Locations() {
  const venues = [
    {
      name: "Pearling School Academy",
      type: "Indoor Air-Conditioned Court",
      days: "Monday & Wednesday",
      timing: "5:00 PM – 6:00 PM",
      note: "Arrive 20 minutes before 5:00 PM for equipment fitting.",
      mapUrl: "https://maps.google.com/?q=Pearling+Season+International+School+Doha+Mansoura"
    },
    {
      name: "Al Wukair Ezdan Oasis",
      type: "Loyola International School Parking Area",
      days: "Thursday & Sunday",
      timing: "4:00 PM – 6:00 PM",
      note: "Officially located back-side at Loyola School parking area space.",
      mapUrl: "https://maps.google.com/?q=Loyola+International+School+Ezdan+Oasis+Al+Wukair"
    },
    {
      name: "Al Bidda Park",
      type: "Outdoor Skating Plaza",
      days: "Flexible Schedule",
      timing: "Evening Batches",
      note: "Ideal for open space gliding & slalom drills.",
      mapUrl: "https://maps.google.com/?q=Al+Bidda+Park+Doha+Qatar"
    },
    {
      name: "Ain Khalid",
      type: "Dedicated Training Zone",
      days: "Flexible Schedule",
      timing: "Evening Batches",
      note: "Structured beginner & intermediate coaching.",
      mapUrl: "https://maps.google.com/?q=Ain+Khalid+Doha+Qatar"
    }
  ];

  return (
    <section id="locations" className="py-24 px-6 relative z-10 bg-slate-950">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-cyan-400 font-semibold text-sm uppercase tracking-wider bg-cyan-500/10 px-4 py-1.5 rounded-full border border-cyan-500/20">
            Training Venues
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white mt-4 mb-4">
            LOCATIONS & SCHEDULES
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Join our expert coaching sessions at premier indoor and outdoor training venues across Doha & Al Wukair.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {venues.map((venue, idx) => (
            <div 
              key={idx}
              className="glass-card rounded-2xl p-8 border border-slate-800 hover:border-cyan-500/40 transition-all duration-300 relative flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-1">{venue.name}</h3>
                    <p className="text-cyan-400 text-xs font-semibold uppercase tracking-wider">{venue.type}</p>
                  </div>
                  <a
                    href={venue.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-slate-800 hover:bg-cyan-500/20 text-slate-300 hover:text-cyan-400 rounded-lg transition-colors border border-slate-700"
                    title="Open in Google Maps"
                  >
                    <MapPin className="w-5 h-5" />
                  </a>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3 text-slate-300 text-sm">
                    <Calendar className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span><strong>Days:</strong> {venue.days}</span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-300 text-sm">
                    <Clock className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span><strong>Timing:</strong> {venue.timing}</span>
                  </div>
                </div>

                <div className="p-3.5 bg-slate-900/80 rounded-xl border border-slate-800 mb-6 text-xs text-amber-400/90 flex items-center gap-2">
                  <span>💡 {venue.note}</span>
                </div>
              </div>

              <a
                href={venue.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-slate-800 hover:bg-cyan-500 text-slate-200 hover:text-slate-950 font-bold py-3 rounded-xl transition-all duration-300 text-sm border border-slate-700 hover:border-cyan-400"
              >
                <span>View Location on Google Maps</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}