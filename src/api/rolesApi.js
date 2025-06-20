const API_URL = 'http://localhost:3001/api/roles';

export const fetchRoles = async ({ page, q }) => {
  const resp = await fetch(`${API_URL}?page=${page}&q=${q || ''}`);
  if (!resp.ok) throw await resp.json();
  return resp.json();
};

export const fetchRole = async (id) => {
  const resp = await fetch(`${API_URL}/${id}`);
  if (!resp.ok) throw await resp.json();
  return resp.json();
};

export const createRole = async (role) => {
  const resp = await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(role)
  });
  if (!resp.ok) throw await resp.json();
  return resp.json();
};

export const updateRole = async ({ id, role }) => {
  const resp = await fetch(`${API_URL}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(role)
  });
  if (!resp.ok) throw await resp.json();
  return resp.json();
};

export const deleteRole = async (id) => {
  const resp = await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
  if (!resp.ok) throw await resp.json();
  return resp.json();
};
