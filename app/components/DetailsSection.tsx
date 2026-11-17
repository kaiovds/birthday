import React from 'react';
import { CalendarDays, MapPin } from 'lucide-react';

export function DetailsSection() {
  return (
    <section
      id="detalhes"
      className="h-screen w-full flex flex-col items-center justify-center pt-16 px-4"
    >
      <div className="max-w-4xl w-full bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl rounded-3xl p-6 md:p-10">
        <div className="grid md:grid-cols-1 gap-6 md:gap-10 items-center">
          <img src={'/meangirls.png'} className="rounded-3xl" />
          <div className="text-center md:text-left">
            <h2 className="text-3xl text-center md:text-5xl font-bold mb-6 drop-shadow-md">Entra no carro, vamos pra festa!!</h2>

            <div className="space-y-6">
              <div className="flex flex-row items-center md:items-start gap-3 md:gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 border border-white/20 shadow-sm">
                  <CalendarDays className="h-6 w-6 md:h-7 md:w-7 drop-shadow-md" />
                </div>
                <div>
                  <p className="md:text-lg font-medium opacity-90 drop-shadow text-left">19 de Dezembro</p>
                </div>
              </div>

              <div className="flex flex-row items-center md:items-start gap-3 md:gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 border border-white/20 shadow-sm">
                  <MapPin className="h-6 w-6 md:h-7 md:w-7 drop-shadow-md" />
                </div>
                <div>
                  <p className="md:text-lg font-medium opacity-90 drop-shadow">Gasperin Eventos</p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full h-56 md:h-80 rounded-2xl overflow-hidden border-white/30 shadow-inner relative bg-white/5">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3186.5812988838343!2d-51.950621437595416!3d-23.372643230569135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ecd6ce02453ee3%3A0x88640066031076c1!2sGasperin%20Eventos!5e0!3m2!1spt-BR!2sbr!4v1794277015336!5m2!1spt-BR!2sbr"
              className="absolute top-0 left-0 w-full h-full"
              style={{ border: 1 }}
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