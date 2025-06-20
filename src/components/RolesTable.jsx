import { Link } from 'react-router-dom';


export default function RolesTable({ data, loading, error, onPageChange, page }) {
  if (loading) return <div className="text-gray-500 text-center py-8">Cargando...</div>;
  if (error) return <div className="text-red-600 text-center py-8">Error al cargar los roles.</div>;
  if (!data || data.length === 0) return <div className="text-gray-500 text-center py-8">No hay roles registrados.</div>;

  return (
    <div>
      <table className="roles-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Descripción</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {data.map(role => (
            <tr key={role.id}>
              <td>{role.id}</td>
              <td>{role.nombre}</td>
              <td>{role.descripcion}</td>
              <td>
                <Link to={`/roles/${role.id}`} className="action-link">Ver</Link>
                <Link to={`/roles/${role.id}/edit`} className="action-link">Editar</Link>
                <Link to={`/roles/${role.id}/delete`} className="action-link">Eliminar</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div style={{ marginTop: 12, display: "flex", gap: 10, alignItems: "center" }}>
        <button
          className="button-nav"
          disabled={page === 1}
          onClick={() => onPageChange(page - 1)}
        >Anterior</button>
        <span style={{ color: "#555" }}>Página {page}</span>
      </div>
    </div>
  );
}
