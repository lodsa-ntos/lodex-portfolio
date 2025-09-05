import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import LayoutGlobal from "./layout/LayoutGlobal";
import ErrorBoundary from "./layout/ErrorBoundary";
import "./index.css";
import "react-toastify/dist/ReactToastify.css";
import ConsentNotice from "./components/ConsentNotice";
import Whatsapp from "./utils/Whatsapp";

// Route-level code-splitting
const LandingPage = lazy(() => import("./pages/LandingPage"));
const NotFound = lazy(() => import("./pages/NotFound"));
const ProjetoReal = lazy(() =>
  import("./pages/projects/client/gestosamaveis/ProjetoReal")
);
const ConceitoPessoal = lazy(() =>
  import("./pages/projects/ficticio/ConceitoPessoal")
);
const Academico = lazy(() => import("./pages/projects/Academico"));
const SobreMim = lazy(() => import("./pages/sobre/SobreMim"));
const Blog = lazy(() => import("./pages/blog/Blog"));
const GlobalProject = lazy(() => import("./pages/projects/GlobalProject"));
const CardResponsivo = lazy(() =>
  import("./pages/blog/article/CardResponsivo")
);

const DataProtection = lazy(() => import("./pages/legal/DataProtection"));
const TermsOfService = lazy(() => import("./pages/legal/TermsOfService"));
const WebsiteTerms = lazy(() => import("./pages/legal/WebsiteTerms"));

function App() {
  return (
    <ErrorBoundary>
      <Suspense
        fallback={<div className="p-6 text-center text-gray-400">Loading…</div>}
      >
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
      </Suspense>
      <ConsentNotice />
      <Whatsapp />
    </ErrorBoundary>
  );
}

export default App;
