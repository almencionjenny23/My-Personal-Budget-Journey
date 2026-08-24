-- BudgetPro cloud database
create table if not exists public.budgetpro_data (
  user_id uuid primary key references auth.users(id) on delete cascade,
  data jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default now()
);

alter table public.budgetpro_data enable row level security;

drop policy if exists "budgetpro_select_own" on public.budgetpro_data;
drop policy if exists "budgetpro_insert_own" on public.budgetpro_data;
drop policy if exists "budgetpro_update_own" on public.budgetpro_data;

create policy "budgetpro_select_own"
on public.budgetpro_data for select
using (auth.uid() = user_id);

create policy "budgetpro_insert_own"
on public.budgetpro_data for insert
with check (auth.uid() = user_id);

create policy "budgetpro_update_own"
on public.budgetpro_data for update
using (auth.uid() = user_id)
with check (auth.uid() = user_id);

-- Enable realtime updates for cross-device instant refresh.
do $$
begin
  alter publication supabase_realtime add table public.budgetpro_data;
exception
  when duplicate_object then null;
end $$;
