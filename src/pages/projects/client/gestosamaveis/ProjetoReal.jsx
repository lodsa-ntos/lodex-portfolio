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

      <section id="gestosamaveis"  className="min-h-screen pt-36 border-b shadow-md transition-all duration-500">
        <GlobalContainer>
            <div className="grid grid-cols-[1fr_480px] gap-[4rem] py-16">
                
                {/** Imagens mockup */}
                <div className="flex flex-col gap-4">
                    
                    <img src="images/projetos/cliente/gestosamaveis/sobregestosamaveis/bg-herosection.jpg" alt="Gestos Amáveis - Hero Section" className="rounded-lg"/>

                    <img src="images/projetos/cliente/gestosamaveis/sobregestosamaveis/bg-home-scroll.jpg" alt="Gestos Amáveis - Página inicial com scroll" className="rounded-lg"/>

                    <img src="images/projetos/cliente/gestosamaveis/sobregestosamaveis/bg-sobre.jpg" alt="Gestos Amáveis - Seção sobre" className="rounded-lg"/>

                    <img src="images/projetos/cliente/gestosamaveis/sobregestosamaveis/bg-servicos.jpg" alt="Gestos Amáveis - Seção serviços avulso" className="rounded-lg"/>

                    <img src="images/projetos/cliente/gestosamaveis/sobregestosamaveis/bg-como-funciona.jpg" alt="Gestos Amáveis - Seção como funciona" className="rounded-lg"/>
                </div>

                {/** Explicação */}
                <div className="sticky top-24 self-start h-fit">
                    Gestos Amáveis 💚
                </div>
            </div>
        </GlobalContainer>
      </section>
    </>
  );
}

export default ProjetoReal;
