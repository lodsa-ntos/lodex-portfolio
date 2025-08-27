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
import CardResponsivo from "./pages/blog/article/CardResponsivo";
import IAAjuda from "./pages/blog/article/IAAjuda";
import PiramideDigital from "./pages/blog/article/PiramideDigital";
import SmartUX from "./pages/blog/article/SmartUX";
import BrandingIdentidade from "./pages/blog/article/BrandingIdentidade";
import AutomacaoSimples from "./pages/blog/article/AutomacaoSimples";
import DoBlogAoCliente from "./pages/blog/article/DoBlogAoCliente";
import DataProtection from "./pages/legal/DataProtection";
import TermsOfService from "./pages/legal/TermsOfService";
import WebsiteTerms from "./pages/legal/WebsiteTerms";
import ConsentNotice from "./components/ConsentNotice";
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
          <Route path="/about" element={<SobreMim />} />
          <Route path="/services" element={<Services />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/case-studies" element={<GlobalProject />} />
          <Route path="/conversar" element={<Conversar />} />
          <Route path="/cardresponsivo" element={<CardResponsivo />} />
          <Route path="/ia-que-ajuda" element={<IAAjuda />} />
          <Route path="/piramide-digital" element={<PiramideDigital />} />
          <Route path="/smart-ux" element={<SmartUX />} />
          <Route path="/branding-identidade" element={<BrandingIdentidade />} />
          <Route path="/automacao-simples" element={<AutomacaoSimples />} />
          <Route path="/do-blog-ao-cliente" element={<DoBlogAoCliente />} />
          <Route path="/privacypolicy" element={<DataProtection />} />
          <Route path="/terms" element={<TermsOfService />} />
          <Route path="/cookies" element={<WebsiteTerms />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
      <ConsentNotice />
      <Whatsapp />
    </ErrorBoundary>
  );
}

export default App;
