import React from "react";
import { BubblyLink } from "../library/BubblyLink";
import { Helmet } from "react-helmet";

function NotFound() {
  return (
    <>
      <Helmet>
        <title>Página não encontrada | LodeX Studio</title>
        <meta
          name="description"
          content="A página que procuras não existe ou foi movida. Volta à página inicial ou explora os projetos disponíveis na LodeX Studio."
        />
      </Helmet>
      
      <div className="min-h-screen flex flex-col items-center justify-center px-4 text-center">
        <h1 className="text-5xl font-bold bg-secundario text-white mb-4">
          404
        </h1>
        <p className="text-lg">A página que procuras não existe.</p>
        <BubblyLink
          to="/"
          colorStart="#004AAD"
          colorEnd="#FFFFFF"
          className="mt-6 text-blue-600 underline hover:text-blue-800 transition duration-500"
        >
          Voltar ao início
        </BubblyLink>
      </div>
    </>
  );
}

export default NotFound;
