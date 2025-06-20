// src/pages/ViewRolePage.jsx

import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useRole } from '../hooks/useRoles';

export default function ViewRolePage() {
  const { id } = useParams();
  const { data: role, isLoading, isError } = useRole(id);

  if (isLoading) return <div className="ver-rol-cargando">Cargando...</div>;
  if (isError) return <div className="ver-rol-error">Error al cargar el rol.</div>;
  if (!role) return <div className="ver-rol-error">Rol no encontrado.</div>;

  return (
    <div className="ver-rol-contenedor">
      <h2 className="ver-rol-titulo">Detalle del Rol</h2>
      <div className="ver-rol-detalle">
        <div>
          <span className="ver-rol-label">ID:</span> {role.id}
        </div>
        <div>
          <span className="ver-rol-label">Nombre:</span> {role.nombre}
        </div>
        <div>
          <span className="ver-rol-label">Descripción:</span> {role.descripcion}
        </div>
      </div>
      <Link to="/roles" className="ver-rol-volver">← Volver a la lista</Link>
    </div>
  );
}
