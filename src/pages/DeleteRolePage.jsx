import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useRole, useDeleteRole } from '../hooks/useRoles';

export default function DeleteRolePage() {
  const { id } = useParams();
  const { data, isLoading } = useRole(id);
  const mutation = useDeleteRole();
  const navigate = useNavigate();

  const handleDelete = () => {
    mutation.mutate(id, { onSuccess: () => navigate('/roles') });
  };

  if (isLoading) return <div>Cargando...</div>;
  if (!data) return <div>No se encontró el rol.</div>;

  return (
    <div className="max-w-md mx-auto p-4">
      <h2 className="text-lg font-bold mb-2">Eliminar Rol</h2>
      <p>¿Estás seguro de eliminar el rol <b>{data.nombre}</b>?</p>
      <button onClick={handleDelete} className="bg-red-600 text-white px-4 py-2 rounded mt-2">
        {mutation.isLoading ? "Eliminando..." : "Eliminar"}
      </button>
      <button onClick={() => navigate('/roles')} className="ml-2 border px-4 py-2 rounded">Cancelar</button>
      {mutation.isError && <div className="text-red-600 mt-2">{mutation.error.message}</div>}
    </div>
  );
}
