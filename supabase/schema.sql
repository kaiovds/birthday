create table if not exists public."Convidados" (
    id uuid primary key default gen_random_uuid(),
    "Nome" text not null unique,
    "Acompanhantes" text not null default 'Nenhum'
);

alter table
    public."Convidados" enable row level security;

create policy "Permitir inserção pública" on public."Convidados" for
insert
    with check (true);