import React from "react";
import { Routes, Route } from "react-router-dom";
import LayoutGlobal from "./layout/LayoutGlobal";
import LandingPage from "./pages/LandingPage";
import NotFound from "./pages/NotFound";
import ErrorBoundary from "./layout/ErrorBoundary";
import "./index.css";
import "react-toastify/dist/ReactToastify.css";
import ProjetoReal from "./pages/projects/client/gestosamaveis/ProjetoReal";
import ConceitoPessoal from "./pages/projects/ficticio/ConceitoPessoal";
import Academico from "./pages/projects/Academico";
import SobreMim from "./pages/sobre/SobreMim";
import Services from "./pages/services/Services";
import Blog from "./pages/blog/Blog";
import GlobalProject from "./pages/projects/GlobalProject";
import Conversar from "./pages/chat/Conversar";
import Pedidos from "./pages/helpTribo/Pedidos";
import Whatsapp from "./utils/Whatsapp";

function App() {
  return (
    <ErrorBoundary>
      <Routes>
        <Route path="/" element={<LayoutGlobal />}>
          <Route index element={<LandingPage />} />
           <Route path="/gestosamaveis" element={<ProjetoReal />} />
          <Route path="/academico" element={<Academico />} />
          <Route path="/launchpeak" element={<ConceitoPessoal />} />
          <Route path="/sobremim" element={<SobreMim />} />
          <Route path="/servicos" element={<Services />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/portfolio" element={<GlobalProject />} />
          <Route path="/conversar" element={<Conversar />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
      <Whatsapp />
    </ErrorBoundary>
  );
}

export default App;
