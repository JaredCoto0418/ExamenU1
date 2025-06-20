import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";


import RolesPage from "./pages/RolesPage";
import CreateRolePage from "./pages/CreateRolePage";
import EditRolePage from "./pages/EditRolePage";
import DeleteRolePage from "./pages/DeleteRolePage";
import ViewRolePage from "./pages/ViewRolePage";

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
        <Route path="/roles/:id" element={<ViewRolePage />} />
        {}
        <Route path="*" element={<div>Página no encontrada</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
