import React from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { DetailsSection } from './components/DetailsSection';
import { PresenceSection } from './components/PresenceSection';
import { GiftsSection } from './components/GiftsSection';

export default function BirthdayInvite() {
  return (
    <main className="relative min-h-screen w-full font-sans text-white overflow-x-hidden bg-linear-to-br from-green-900 to-cyan-700 opacity-90">
      <Navbar />
      <HeroSection />
      <DetailsSection />
      <PresenceSection />
      <GiftsSection />
    </main>
  );
}
