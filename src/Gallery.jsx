import React, { useState } from 'react';
import { ShieldCheck, Video, Image as ImageIcon } from 'lucide-react';

export default function Gallery() {
  const [activeTab, setActiveTab] = useState('all');

  const mediaItems = [
    {
      type: 'video',
      url: '/videos/IMG_1402.mp4',
      thumbnail: '/images/img1.jpg',
      title: 'Indoor Group Coaching & Slalom Cone Drills',
      category: 'video',
      location: 'Pearling School Indoor Court'
    },
    {
      type: 'image',
      url: '/images/img1.jpg',
      title: 'Full Protective Safety Gear Showcase',
      category: 'gear',
      location: 'Equipment Setup'
    },
    {
      type: 'image',
      url: '/images/img2.jpg',
      title: 'One-on-One Stance & Balance Coaching',
      category: 'coaching',
      location: 'Indoor Court'
    },
    {
      type: 'image',
      url: '/images/img3.jpg',
      title: 'Group Warm-ups & Posture Training',
      category: 'coaching',
      location: 'Pearling School'
    },
    {
      type: 'image',
      url: '/images/img4.jpg',
      title: 'Inline Skating Technique & Glide Practice',
      category: 'indoor',
      location: 'Pearling School Indoor Court'
    },
    {
      type: 'image',
      url: '/images/img5.jpg',
      title: 'Helmet & Pad Fitting Session',
      category: 'gear',
      location: 'Safety Prep'
    },
    {
      type: 'image',
      url: '/images/img6.jpg',
      title: 'Slalom Cone Precision Steering',
      category: 'indoor',
      location: 'Indoor Court'
    },
    {
      type: 'image',
      url: '/images/img7.jpg',
      title: 'Kids Beginner Balance Exercises',
      category: 'coaching',
      location: 'Training Area'
    },
    {
      type: 'image',
      url: '/images/img8.jpg',
      title: 'Custom Academy Uniform & Skate Setup',
      category: 'gear',
      location: 'Equipment Setup'
    },
    {
      type: 'image',
      url: '/images/img9.jpg',
      title: 'Adult & Kids Group Practice Drills',
      category: 'coaching',
      location: 'Main Training Area'
    },
    {
      type: 'image',
      url: '/images/img10.jpg',
      title: 'Speed Control & Stopping Techniques',
      category: 'indoor',
      location: 'Pearling School'
    }
  ];

  const filteredItems = activeTab === 'all' 
    ? mediaItems 
    : mediaItems.filter(item => item.category === activeTab);

  return (
    <section id="gallery" className="py-24 px-6 relative z-10 bg-slate-950/60 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-cyan-400 font-semibold text-sm uppercase tracking-wider bg-cyan-500/10 px-4 py-1.5 rounded-full border border-cyan-500/20">
            Inside The Academy
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white mt-4 mb-4">
            LIVE SESSIONS & GALLERY
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Explore active coaching, safety gear, and indoor/outdoor practice sessions across Qatar!
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {[
            { id: 'all', label: 'All Media' },
            { id: 'video', label: 'Video Clip' },
            { id: 'coaching', label: 'Coaching' },
            { id: 'indoor', label: 'Indoor Sessions' },
            { id: 'gear', label: 'Safety Gear' }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                activeTab === tab.id
                  ? 'bg-cyan-400 text-slate-950 shadow-lg shadow-cyan-400/20'
                  : 'bg-slate-800/60 text-slate-400 hover:text-white border border-slate-700/60'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Media Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, idx) => (
            <div 
              key={idx}
              className="glass-card rounded-2xl overflow-hidden group border border-slate-800 hover:border-cyan-400/50 transition-all duration-300 relative flex flex-col"
            >
              {/* Media Container */}
              <div className="relative aspect-video bg-slate-900 overflow-hidden">
                {item.type === 'video' ? (
                  <video 
                    controls 
                    playsInline
                    muted
                    crossOrigin="anonymous"
                    preload="metadata"
                    poster={item.thumbnail}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  >
                    <source src={item.url} type="video/mp4" />
                    Your browser does not support video playback.
                  </video>
                ) : (
                  <img 
                    src={item.url} 
                    alt={item.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                )}

                <div className="absolute top-3 left-3 flex items-center gap-2">
                  <span className="bg-slate-950/80 backdrop-blur-md text-cyan-400 text-[10px] uppercase font-bold px-3 py-1 rounded-full border border-cyan-500/30">
                    {item.location}
                  </span>
                </div>

                <div className="absolute top-3 right-3">
                  {item.type === 'video' ? (
                    <span className="bg-red-500/80 text-white p-1.5 rounded-full flex items-center justify-center">
                      <Video className="w-3.5 h-3.5" />
                    </span>
                  ) : (
                    <span className="bg-slate-950/60 text-slate-300 p-1.5 rounded-full flex items-center justify-center">
                      <ImageIcon className="w-3.5 h-3.5" />
                    </span>
                  )}
                </div>
              </div>

              {/* Caption */}
              <div className="p-4 bg-slate-900/40 flex-1 flex flex-col justify-between">
                <h4 className="text-white font-semibold text-sm">{item.title}</h4>
                <div className="flex items-center gap-2 mt-3 text-xs text-slate-400">
                  <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Free Gear & Helmets Provided</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}