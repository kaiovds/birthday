import React from 'react';

export function HeroSection() {
  return (
    <section 
      id="inicio" 
      className="h-screen w-full flex flex-col items-center justify-center pt-16 px-4"
    >
      <div className="max-w-3xl w-full bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl rounded-3xl p-4 md:p-14 text-center transform transition-all hover:scale-[1.01] duration-300 relative overflow-hidden">
        <h1 className="text-4xl md:text-7xl font-extrabold mb-6 tracking-tight drop-shadow-md">
          30 anos impactando vidas
        </h1>
        
        <p className="text-lg md:text-xl leading-relaxed mb-8 font-medium drop-shadow">... eu considero um case de sucesso
        </p>
        <p className='text-justify'>Vamos comemorar meu aniversário em grande estilo, cercado pelas pessoas que mais amo e moram no meu coração sem pagar aluguel (toma essa frase de Orkut!).</p>
        <p className='my-6 text-justify'>Seja uma amizade de longa data ou se o convívio na Alltech nos aproximou, conto com a sua presença.</p>
        <p className='my-6 text-justify'>No dia vamos fazer um churrasco, nadar na piscina se o El Niño permitir e soltar a voz com um karaokê com mais de 1,5.10^4 músicas! Éeeee... é o evento do ano mesmo.</p>
      </div>
    </section>
  );
}