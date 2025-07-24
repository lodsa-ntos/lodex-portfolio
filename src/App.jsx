import React from "react";
import { Routes, Route } from "react-router-dom";
import LayoutGlobal from "./layout/LayoutGlobal";
import LandingPage from "./pages/LandingPage";
import NotFound from "./pages/NotFound";
import ErrorBoundary from "./layout/ErrorBoundary";
import "./index.css";
import "react-toastify/dist/ReactToastify.css";
import Academico from "./pages/projects/Academico";
import SobreMim from "./pages/sobre/SobreMim";
import Services from "./pages/services/Services";
import GlobalProject from "./pages/projects/GlobalProject";

function App() {
  return (
    <ErrorBoundary>
      <Routes>
        <Route path="/" element={<LayoutGlobal />}>
          <Route index element={<LandingPage />} />
          <Route path="/academico" element={<Academico />} />
          <Route path="/sobremim" element={<SobreMim />} />
          <Route path="/servicos" element={<Services />} />
          <Route path="/projetos" element={<GlobalProject />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </ErrorBoundary>
  );
}

export default App;
