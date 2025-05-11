-- Table: subnets
create table if not exists subnets (
                                       id uuid primary key default gen_random_uuid(),
    cidr text not null,
    description text,
    location text,
    vlan text,
    owner_id uuid,
    created_at timestamp with time zone default now()
    );

-- Table: ips
create table if not exists ips (
                                   id uuid primary key default gen_random_uuid(),
    subnet_id uuid references subnets(id) on delete cascade,
    ip_address text not null,
    label text,
    created_at timestamp with time zone default now()
    );

-- Recommended RLS (optional for multi-user access control)
-- enable row level security;
-- create policy "Allow read/write for authenticated users" on subnets
--   for all using (auth.uid() = owner_id);
