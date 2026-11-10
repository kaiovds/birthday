import React from 'react';

export function PresenceSection() {
  return (
    <section 
      id="presenca" 
      className="h-screen w-full flex flex-col items-center justify-center pt-16 px-4"
    >
      <div className="max-w-2xl w-full bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl rounded-3xl p-8 text-center relative overflow-hidden">
        <h2 className="text-4xl font-bold mb-4 drop-shadow-md">Confirme sua presença</h2>
        <p className="text-lg opacity-90">O formulário de confirmação entrará aqui.</p>
      </div>
    </section>
  );
}