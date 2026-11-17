import { NextResponse } from 'next/server';
import { getPool } from '../../../lib/db';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const nome = String(body?.nome ?? '').trim();
    const acompanhantes = String(body?.acompanhantes ?? '').trim() || 'Nenhum';

    if (!nome) {
      return NextResponse.json(
        { message: 'Informe o nome.' },
        { status: 400 }
      );
    }

    const pool = getPool();

    if (!pool) {
      return NextResponse.json(
        { message: 'Configure SUPABASE_DIRECT_URL antes de enviar o formulário.' },
        { status: 500 }
      );
    }

    const result = await pool.query(
      `
        INSERT INTO public."Convidados" ("Nome", "Acompanhantes")
        VALUES ($1, $2)
        ON CONFLICT ("Nome") DO NOTHING
        RETURNING *;
      `,
      [nome, acompanhantes]
    );

    if (result.rowCount === 0) {
      return NextResponse.json(
        { message: 'Nome já cadastrado. Essa pessoa já confirmou a presença.' },
        { status: 409 }
      );
    }

    return NextResponse.json({ message: 'Presença confirmada com sucesso!' }, { status: 201 });
  } catch (error) {
    console.error('Erro ao inserir convidado:', error);

    return NextResponse.json(
      { message: 'Não foi possível salvar sua confirmação. Tente novamente.' },
      { status: 500 }
    );
  }
}
