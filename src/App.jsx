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
import Blog from "./pages/blog/Blog";
import GlobalProject from "./pages/projects/GlobalProject";
import CardResponsivo from "./pages/blog/article/CardResponsivo";
// Removed other blog articles to keep only the responsive card tutorial
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
          <Route path="/blog" element={<Blog />} />
          <Route path="/case-studies" element={<GlobalProject />} />
          <Route path="/cardresponsivo" element={<CardResponsivo />} />
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
