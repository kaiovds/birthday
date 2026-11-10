import React from 'react';

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full h-16 bg-white/10 backdrop-blur-md border-b border-white/20 shadow-sm z-50 flex items-center justify-center gap-6 md:gap-12 px-4">
      <a href="#inicio" className="font-semibold tracking-wide hover:text-cyan-200 transition-colors">Início</a>
      <a href="#detalhes" className="font-semibold tracking-wide hover:text-cyan-200 transition-colors">Onde e Quando</a>
      <a href="#presenca" className="font-semibold tracking-wide hover:text-cyan-200 transition-colors">Presença</a>
    </nav>
  );
}