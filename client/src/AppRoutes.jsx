import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./pages/AppLayout";

function AppRoutes() {
  return (
    <BrowserRouter
      future={{
        v7_startTransition: true,
      }}
    >
      <Routes>
        <Route path="*" element={<AppLayout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
