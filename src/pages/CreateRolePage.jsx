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
    <form onSubmit={handleSubmit} className="form-crear-rol">
      <h2 className="crear-rol-title">Crear Rol</h2>
      <input
        required
        value={nombre}
        onChange={e => setNombre(e.target.value)}
        className="crear-rol-input"
        placeholder="Nombre"
      />
      <input
        required
        value={descripcion}
        onChange={e => setDescripcion(e.target.value)}
        className="crear-rol-input"
        placeholder="Descripción"
      />
      <button type="submit" className="crear-rol-boton">
        {mutation.isLoading ? "Creando..." : "Crear"}
      </button>
      {mutation.isError && (
        <div className="crear-rol-error">
          {mutation.error.message}
        </div>
      )}
    </form>
  );
}
