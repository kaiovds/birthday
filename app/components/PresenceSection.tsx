'use client';

import { FormEvent, useState } from 'react';

export function PresenceSection() {
  const [nome, setNome] = useState('');
  const [acompanhantes, setAcompanhantes] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    setMessage('');
    setError('');

    if (!nome.trim()) {
      setError('Por favor, informe seu nome.');
      return;
    }

    setLoading(true);

    try {
      const response = await fetch('/api/convidados', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nome: nome.trim(),
          acompanhantes: acompanhantes.trim() || 'Nenhum',
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Erro ao confirmar presença.');
      }

      setNome('');
      setAcompanhantes('');
      setMessage(data.message || 'Presença confirmada com sucesso!');
    } catch (submitError) {
      console.error(submitError);
      setError(submitError instanceof Error ? submitError.message : 'Não foi possível salvar sua confirmação. Tente novamente.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <section
      id="presenca"
      className="w-full flex flex-col items-center justify-center px-4 pb-20 pt-16 scroll-mt-6 min-h-screen"
    >
      <div className="max-w-3xl w-full rounded-3xl border border-white/20 bg-white/10 p-8 shadow-2xl backdrop-blur-xl">
        <div className="mb-8 text-center">
          <h2 className="text-4xl font-bold drop-shadow-md">Confirme sua presença</h2>
          <p className="mt-3 text-lg">Já estou com a roupa de ir!</p>
        </div>

        <form
          className="space-y-6"
          onSubmit={handleSubmit}
        >
          <div className="text-left">
            <label
              htmlFor="nome"
              className="mb-2 block text-sm font-semibold uppercase tracking-wide text-white"
            >
              Nome
            </label>
            <input
              id="nome"
              type="text"
              value={nome}
              onChange={(event) => setNome(event.target.value)}
              placeholder="Igualzinho no CPF por favor"
              className="w-full rounded-2xl border border-white/20 bg-white/5 px-4 py-3 text-white placeholder:text-white/80 placeholder:text-[12px] sm:placeholder:text-base outline-none transition focus:border-cyan-300 focus:bg-white/10"
            />
          </div>

          <div className="text-left">
            <label
              htmlFor="acompanhante"
              className="mb-2 block text-sm font-semibold uppercase tracking-wide text-white"
            >
              Quem vem com você?
            </label>
            <input
              id="acompanhante"
              type="text"
              value={acompanhantes}
              onChange={(event) => setAcompanhantes(event.target.value)}
              placeholder="Aqui o convidado convida, mas veja bem..."
              className="w-full rounded-2xl border border-white/20 bg-white/5 px-4 py-3 text-white placeholder:text-white/80 placeholder:text-[12px] sm:placeholder:text-base outline-none transition focus:border-cyan-300 focus:bg-white/10"
            />
          </div>

          <div className="flex flex-col gap-6 text-justify">
            <p>Ao confirmar a presença você e seus acompanhantes serão considerados na minha estimativa de comida e bebida.</p>
            <p>Se você não tiver certeza que poderá comparecer, não preencha... Se conseguir vir, traga o que for consumir.</p>
            <p>Se você confirmar e o destino nos pregar uma peça, por favor me avise o quanto antes.</p>
          </div>

          {error ? <p className="text-sm font-medium text-red-200">{error}</p> : null}
          {message ? <p className="text-sm font-medium text-green-200">{message}</p> : null}

          <div className="flex md:justify-center">
            <button
              type="submit"
              disabled={loading}
              className="w-full md:w-[50%] rounded-2xl bg-white px-6 py-3 font-semibold text-black shadow-lg transition cursor-pointer hover:scale-[1.01] hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-70"
            >
              {loading ? 'Enviando...' : 'Confirmar presença'}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
