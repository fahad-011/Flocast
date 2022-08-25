import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import CitizensUploadPage from './pages/CitizensUploadPage';
import SendFloodMsgPage from './pages/SendFloodMsgPage';
import DistLoginPage from './pages/DistLoginPage';
import GovLoginPage from './pages/GovLoginPage';
import GeoImageUploadPage from "./pages/GeoImageUploadPage";
import HomePage from "./pages/HomePage";
import InundationsPage from "./pages/InundationsPage";
import DashboardPage from "./pages/DashboardPage";
import PrivateRoute from "../src/controllers/PrivateRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/citizensUpload" element={<CitizensUploadPage />}></Route>
        <Route exact path="/sendFloodMsg" element={<PrivateRoute><SendFloodMsgPage /></PrivateRoute>}></Route>
        <Route exact path="/distLogin" element={<DistLoginPage />}></Route>
        <Route exact path="/govLogin" element={<GovLoginPage />}></Route>
        <Route exact path="/imgUpload" element={<GeoImageUploadPage />}></Route>
        <Route exact path="/home" element={<HomePage />}></Route>
        <Route exact path="/inundations" element={<InundationsPage />}></Route>
        <Route exact path="/dashboard" element={<DashboardPage />}></Route>
        <Route
          path="*"
          element={<Navigate to="/home" replace />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
