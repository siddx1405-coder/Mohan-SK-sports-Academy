import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import Programs from './Programs';
import Gallery from './Gallery';
import Locations from './Locations';
import Footer from './Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#060913] text-slate-100 font-sans antialiased selection:bg-cyan-500 selection:text-slate-950">
      <Navbar />
      <main>
        <Hero />
        <Programs />
        <Gallery />
        <Locations />
      </main>
      <Footer />
    </div>
  );
}