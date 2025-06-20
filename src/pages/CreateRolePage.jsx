import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCreateRole } from '../hooks/useRoles';

export default function CreateRolePage() {
  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const mutation = useCreateRole();
  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();
    mutation.mutate({ nombre, descripcion }, {
      onSuccess: () => navigate('/roles'),
    });
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4">
      <h2 className="text-lg font-bold mb-2">Crear Rol</h2>
      <input required value={nombre} onChange={e => setNombre(e.target.value)}
        className="border rounded px-2 py-1 w-full mb-2" placeholder="Nombre" />
      <input required value={descripcion} onChange={e => setDescripcion(e.target.value)}
        className="border rounded px-2 py-1 w-full mb-2" placeholder="Descripción" />
      <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">
        {mutation.isLoading ? "Creando..." : "Crear"}
      </button>
      {mutation.isError && <div className="text-red-600 mt-2">{mutation.error.message}</div>}
    </form>
  );
}
