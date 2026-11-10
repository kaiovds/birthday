import React from 'react';

export function HeroSection() {
  return (
    <section 
      id="inicio" 
      className="h-screen w-full flex flex-col items-center justify-center pt-16 px-4"
    >
      <div className="max-w-3xl w-full bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl rounded-3xl p-8 md:p-14 text-center transform transition-all hover:scale-[1.01] duration-300 relative overflow-hidden">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight drop-shadow-md">
          Trintei! 🎈
        </h1>
        
        <p className="text-lg md:text-xl leading-relaxed mb-8 font-medium drop-shadow">
          Estou muito feliz por chegar aos 30 anos e celebrar essa nova fase. 
          Não faria o menor sentido comemorar sem ter a presença dos meus amigos mais queridos 
          compartilhando dessa alegria comigo!
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 text-sm md:text-base font-bold">
          <span className="bg-white/20 px-4 py-2 rounded-full border border-white/30 shadow-sm">
            🏊‍♂️ Pool Party
          </span>
          <span className="bg-white/20 px-4 py-2 rounded-full border border-white/30 shadow-sm">
            🥩 Churrasco
          </span>
          <span className="bg-white/20 px-4 py-2 rounded-full border border-white/30 shadow-sm">
            🎤 Karaokê
          </span>
        </div>
      </div>
    </section>
  );
}