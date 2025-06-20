import React, { useState } from 'react';
import { useRoles } from '../hooks/useRoles';
import RolesTable from '../components/RolesTable';
import { Link } from 'react-router-dom';

export default function RolesPage() {
  const [page, setPage] = useState(1);
  const [q, setQ] = useState('');
  const { data, isLoading, isError } = useRoles({ page, q });

  return (
    <div className="roles-container">
      <h1 className="roles-title">Gestión de Roles</h1>
      <div className="roles-search-bar">
        <input
          className="buscador-input"
          placeholder="Buscar por nombre o descripción..."
          value={q}
          onChange={e => setQ(e.target.value)}
        />
        <Link to="/roles/create" className="boton-nuevo-rol">Nuevo Rol</Link>
      </div>
      <RolesTable data={data} loading={isLoading} error={isError} onPageChange={setPage} page={page} />
    </div>
  );
}
