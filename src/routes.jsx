import { Routes, Route } from "react-router-dom";
import RolesPage from "./pages/RolesPage";
import CreateRolePage from "./pages/CreateRolePage";
import EditRolePage from "./pages/EditRolePage";
import DeleteRolePage from "./pages/DeleteRolePage";
// ...otras importaciones

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/roles" element={<RolesPage />} />
      <Route path="/roles/create" element={<CreateRolePage />} />
      <Route path="/roles/:id/edit" element={<EditRolePage />} />
      <Route path="/roles/:id/delete" element={<DeleteRolePage />} />
      {/* ...otras rutas */}
    </Routes>
  );
}
