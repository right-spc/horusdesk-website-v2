function getConfig() {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!url || !key) {
    throw new Error(
      'SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY must be set in environment variables.'
    );
  }

  return { url, key };
}

const SCHEMA = 'website';

async function request<T>(
  path: string,
  options?: RequestInit
): Promise<{ data: T | null; error: { message: string } | null }> {
  const { url, key } = getConfig();
  const baseUrl = url.endsWith('/') ? url.slice(0, -1) : url;
  const requestUrl = `${baseUrl}/rest/v1${path}`;

  const response = await fetch(requestUrl, {
    ...options,
    headers: {
      apikey: key,
      Authorization: `Bearer ${key}`,
      'Content-Type': 'application/json',
      'Accept-Profile': SCHEMA,
      'Content-Profile': SCHEMA,
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

export async function deleteAll(path: string, filter = 'id=not.is.null'): Promise<void> {
  const { url, key } = getConfig();
  const baseUrl = url.endsWith('/') ? url.slice(0, -1) : url;
  const requestUrl = `${baseUrl}/rest/v1${path}?${filter}`;

  const response = await fetch(requestUrl, {
    method: 'DELETE',
    headers: {
      apikey: key,
      Authorization: `Bearer ${key}`,
      'Content-Profile': SCHEMA,
      Prefer: 'return=minimal',
    },
  });

  if (!response.ok) {
    const errorText = await response.text().catch(() => 'Unknown error');
    throw new Error(`Delete failed: ${response.status} ${errorText}`);
  }
}

export function escapeLiteral(value: string | null | undefined): string {
  if (value == null) return 'NULL';
  return "'" + value.replace(/'/g, "''").replace(/\\/g, '\\\\') + "'";
}
