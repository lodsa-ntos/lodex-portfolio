import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/FooterSection";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function LayoutGlobal() {
  return (
    <>
      {/* Barra do Menu */}
      <Navbar />

      {/* Conteúdo principal */}
      <Outlet />

      {/* Rodapé */}
      <Footer />

      {/* Toast Notifications */}
      <ToastContainer
        position="top-center"
        autoClose={3000}
      />
    </>
  );
}

export default LayoutGlobal;