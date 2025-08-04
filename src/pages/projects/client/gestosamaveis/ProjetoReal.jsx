import React from "react";
import { Helmet } from "react-helmet";
import GlobalContainer from "../../../../utils/GlobalContainer";

function ProjetoReal() {
  return (
    <>
      <Helmet>
        <title>
          Gestos Amáveis — Website Profissional para Cuidadores | LodeX Studio
        </title>
        <meta
          name="description"
          content="Website desenvolvido pela LodeX Studio para a empresa real Gestos Amáveis. Design leve, acessível e com foco em empatia e navegação simples."
        />
      </Helmet>

      <section id="gestosamaveis"  className="min-h-[95vh] pt-36 border-b shadow-md bg-[#f6f6f6] transition-all duration-500">
        <GlobalContainer>

        </GlobalContainer>
      </section>
    </>
  );
}

export default ProjetoReal;
