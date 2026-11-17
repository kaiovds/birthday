import React from 'react';

export function GiftsSection() {
  return (
    <section
      id="mimos"
      className="w-full flex flex-col items-center justify-center px-4 pb-20 pt-16 scroll-mt-6 min-h-screen"
    >
      <div className="max-w-3xl w-full rounded-3xl border border-white/20 bg-white/10 p-8 shadow-2xl backdrop-blur-xl">
        <div className="mb-8 text-center gap-4 flex-col flex">
          <img
            src={'naoprecisava.png'}
            className="rounded-3xl"
          ></img>
          <h2 className="text-4xl font-bold drop-shadow-md">Ahh, mas não precisaaava!</h2>
          <p className="mt-3 text-lg">Mas se fizer questão, aqui estão algumas dicas:</p>
        </div>

        <div className="flex flex-col gap-5 md:text-justify text-center">
          <p>Como um bom Capricorniano, adoro ganhar dinheiro. Se for a sua escolha, minha meta é ter R$43.991.266.407 reais na conta do Itaú.</p>
          <p>Livros: Terror, suspense ou desenvolvimento pessoal.</p>
          <p>Trajes Superiores e Inferiores: M ou 42. Gosto de cores escuras e terrosas.</p>
          <p>Produtos para cabelos ondulados, cacheados e skin care.</p>
          <p>Itens para meu novo lar que me farão lembrar de você.</p>
        </div>
      </div>
    </section>
  );
}
