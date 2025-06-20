import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

// Importa tus páginas (¡cópialas tal cual te las mandé antes!)
import RolesPage from "./pages/RolesPage";
import CreateRolePage from "./pages/CreateRolePage";
import EditRolePage from "./pages/EditRolePage";
import DeleteRolePage from "./pages/DeleteRolePage";

function App() {
  return (
    <BrowserRouter>
      <nav style={{ padding: 16 }}>
        <Link to="/roles" style={{ marginRight: 16 }}>Roles</Link>
        {}
      </nav>
      <Routes>
        <Route path="/roles" element={<RolesPage />} />
        <Route path="/roles/create" element={<CreateRolePage />} />
        <Route path="/roles/:id/edit" element={<EditRolePage />} />
        <Route path="/roles/:id/delete" element={<DeleteRolePage />} />
        {}
        <Route path="*" element={<div>Página no encontrada</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
