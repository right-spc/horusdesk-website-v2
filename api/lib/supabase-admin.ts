const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY) {
  throw new Error(
    'SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY must be set in environment variables.'
  );
}

async function request<T>(
  path: string,
  options?: RequestInit
): Promise<{ data: T | null; error: { message: string } | null }> {
  const url = `${SUPABASE_URL}/rest/v1${path}`;
  const response = await fetch(url, {
    ...options,
    headers: {
      apikey: SUPABASE_SERVICE_ROLE_KEY,
      Authorization: `Bearer ${SUPABASE_SERVICE_ROLE_KEY}`,
      'Content-Type': 'application/json',
      Prefer: 'return=representation',
      ...options?.headers,
    },
  });

  if (!response.ok) {
    const errorText = await response.text().catch(() => 'Unknown error');
    return {
      data: null,
      error: { message: `Supabase request failed: ${response.status} ${errorText}` },
    };
  }

  const data = (await response.json()) as T;
  return { data, error: null };
}

export async function select<T>(path: string, query = ''): Promise<T[]> {
  const fullPath = query ? `${path}?${query}` : path;
  const { data, error } = await request<T[]>(fullPath, { method: 'GET' });
  if (error) throw new Error(error.message);
  return data ?? [];
}

export async function insert<T>(path: string, record: Record<string, unknown>): Promise<T[]> {
  const { data, error } = await request<T[]>(path, {
    method: 'POST',
    body: JSON.stringify(record),
  });
  if (error) throw new Error(error.message);
  return data ?? [];
}

export function escapeLiteral(value: string | null | undefined): string {
  if (value == null) return 'NULL';
  return "'" + value.replace(/'/g, "''").replace(/\\/g, '\\\\') + "'";
}
