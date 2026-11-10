import React from 'react';

export function DetailsSection() {
  return (
    <section 
      id="detalhes" 
      className="h-screen w-full flex flex-col items-center justify-center pt-16 px-4"
    >
      <div className="max-w-4xl w-full bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl rounded-3xl p-6 md:p-10 relative overflow-hidden">
        <div className="grid md:grid-cols-2 gap-6 md:gap-10 items-center h-full">
          
          <div className="text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 drop-shadow-md">Onde e Quando</h2>
            
            <div className="space-y-6">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-3 md:gap-4">
                <span className="text-3xl md:text-4xl drop-shadow-md">🗓️</span>
                <div>
                  <h3 className="font-bold text-xl drop-shadow">Data</h3>
                  <p className="text-lg font-medium opacity-90 drop-shadow">19 e 20 de Dezembro</p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row items-center md:items-start gap-3 md:gap-4">
                <span className="text-3xl md:text-4xl drop-shadow-md">📍</span>
                <div>
                  <h3 className="font-bold text-xl drop-shadow">Local</h3>
                  <p className="text-lg font-medium opacity-90 drop-shadow">Gasperin Eventos</p>
                  <p className="text-sm opacity-80">Maringá - PR</p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full h-56 md:h-80 rounded-2xl overflow-hidden border border-white/30 shadow-inner relative bg-white/5">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3186.5812988838343!2d-51.950621437595416!3d-23.372643230569135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ecd6ce02453ee3%3A0x88640066031076c1!2sGasperin%20Eventos!5e1!3m2!1spt-BR!2sbr!4v1794277015336!5m2!1spt-BR!2sbr" 
              className="absolute top-0 left-0 w-full h-full"
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="strict-origin-when-cross-origin"
            />
          </div>

        </div>
      </div>
    </section>
  );
}