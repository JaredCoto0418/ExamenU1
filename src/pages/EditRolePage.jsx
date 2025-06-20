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

  if (isLoading) return <div className="editar-rol-cargando">Cargando...</div>;

  return (
    <form onSubmit={handleSubmit} className="form-editar-rol">
      <h2 className="editar-rol-title">Editar Rol</h2>
      <input
        required
        value={nombre}
        onChange={e => setNombre(e.target.value)}
        className="editar-rol-input"
        placeholder="Nombre"
      />
      <input
        required
        value={descripcion}
        onChange={e => setDescripcion(e.target.value)}
        className="editar-rol-input"
        placeholder="Descripción"
      />
      <button type="submit" className="editar-rol-boton">
        {mutation.isLoading ? "Actualizando..." : "Actualizar"}
      </button>
      {mutation.isError && (
        <div className="editar-rol-error">
          {mutation.error.message}
        </div>
      )}
    </form>
  );
}
