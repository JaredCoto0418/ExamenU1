import React, { useState } from 'react';
import { useRoles } from '../hooks/useRoles';
import RolesTable from '../components/RolesTable';
import { Link } from 'react-router-dom';

export default function RolesPage() {
  const [page, setPage] = useState(1);
  const [q, setQ] = useState('');
  const { data, isLoading, isError } = useRoles({ page, q });

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Gestión de Roles</h1>
      <div className="mb-4 flex gap-2">
        <input
          className="border rounded px-2 py-1"
          placeholder="Buscar por nombre o descripción..."
          value={q}
          onChange={e => setQ(e.target.value)}
        />
        <Link to="/roles/create" className="bg-blue-600 text-white px-4 py-2 rounded">Nuevo Rol</Link>
      </div>
      <RolesTable data={data} loading={isLoading} error={isError} onPageChange={setPage} page={page} />
    </div>
  );
}
