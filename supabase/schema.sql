-- Dleverse global istatistik/liderlik şeması.
-- Supabase SQL Editor'da bir kere çalıştır: https://app.supabase.com/project/_/sql

create table if not exists daily_completions (
  id bigint generated always as identity primary key,
  pack_id text not null,
  mode text not null default 'classic',
  date_key text not null,          -- "YYYY-MM-DD", oyuncunun yerel günü
  device_id text not null,         -- hesapsız, anonim cihaz kimliği (AsyncStorage'da üretilir)
  won boolean not null,
  guess_count int not null,
  created_at timestamptz not null default now(),
  unique (pack_id, mode, date_key, device_id)  -- bir cihaz, bir paket+mod+gün için tek kayıt
);

create index if not exists idx_daily_completions_lookup
  on daily_completions (pack_id, mode, date_key);

alter table daily_completions enable row level security;

-- Anonim kullanıcılar kendi sonucunu ekleyebilir/güncelleyebilir (upsert).
create policy if not exists "anon can insert completions"
  on daily_completions for insert
  to anon
  with check (true);

create policy if not exists "anon can update own completion"
  on daily_completions for update
  to anon
  using (true);

-- Agregasyon (sayaç/liderlik) için okuma serbest; tek tek device_id'ler
-- istemci tarafında kimseyi teşhis etmek için kullanılmaz, sadece sıralama içindir.
create policy if not exists "anon can read completions"
  on daily_completions for select
  to anon
  using (true);
