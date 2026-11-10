import React from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { DetailsSection } from './components/DetailsSection';
import { PresenceSection } from './components/PresenceSection';

export default function BirthdayInvite() {
  return (
    <main className="relative w-full min-h-screen font-sans text-white overflow-hidden">
      {/* Background Fixo Vibrante (Índigo > Roxo > Ciano) */}
      <div className="fixed inset-0 z-[-2] bg-gradient-to-br from-indigo-600 via-purple-500 to-cyan-400 opacity-90" />

      <Navbar />
      <HeroSection />
      <DetailsSection />
      <PresenceSection />
    </main>
  );
}