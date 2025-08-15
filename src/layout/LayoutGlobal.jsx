import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../components/FooterSection";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BubblyContainer } from "../library/BubblyContainer";
import { trackPageView } from "../utils/analytics";

function LayoutGlobal() {
  const location = useLocation();

  useEffect(() => {
    // Track page views with Google Analytics
    const pageTitle = document.title;
    trackPageView(pageTitle);
  }, [location.pathname]);

  return (
    <>
      <BubblyContainer />

      {/* Barra do Menu */}
      <Navbar />

      {/* Conteúdo principal */}
      <Outlet />

      {/* Rodapé */}
      <Footer />

      {/* Toast Notifications */}
      <ToastContainer position="top-center" autoClose={3000} />
    </>
  );
}

export default LayoutGlobal;
