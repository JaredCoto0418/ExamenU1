import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useRole, useUpdateRole } from '../hooks/useRoles';

export default function EditRolePage() {
  const { id } = useParams();
  const { data, isLoading } = useRole(id);
  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const mutation = useUpdateRole();
  const navigate = useNavigate();

  useEffect(() => {
    if (data) {
      setNombre(data.nombre);
      setDescripcion(data.descripcion);
    }
  }, [data]);

  const handleSubmit = e => {
    e.preventDefault();
    mutation.mutate({ id, role: { nombre, descripcion } }, {
      onSuccess: () => navigate('/roles'),
    });
  };

  if (isLoading) return <div>Cargando...</div>;

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4">
      <h2 className="text-lg font-bold mb-2">Editar Rol</h2>
      <input required value={nombre} onChange={e => setNombre(e.target.value)}
        className="border rounded px-2 py-1 w-full mb-2" placeholder="Nombre" />
      <input required value={descripcion} onChange={e => setDescripcion(e.target.value)}
        className="border rounded px-2 py-1 w-full mb-2" placeholder="Descripción" />
      <button type="submit" className="bg-yellow-600 text-white px-4 py-2 rounded">
        {mutation.isLoading ? "Actualizando..." : "Actualizar"}
      </button>
      {mutation.isError && <div className="text-red-600 mt-2">{mutation.error.message}</div>}
    </form>
  );
}
