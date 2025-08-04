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
            <div className="grid grid-cols-[1fr_480px] gap-[4rem] py-20">
                

                {/** Imagens mockup */}
                <div className="flex flex-col gap-12">
                    
                    <img src="images/projetos/cliente/gestosamaveis/sobregestosamaveis/bg-herosection.jpg" alt="Gestos Amaveis Homepage" className="rounded-lg"/>

                    <img src="images/projetos/cliente/gestosamaveis/sobregestosamaveis/bg-home-scroll.jpg" alt="Gestos Amaveis Homepage" className="rounded-lg"/>

                    <img src="images/projetos/cliente/gestosamaveis/sobregestosamaveis/bg-sobre.jpg" alt="Gestos Amaveis Homepage" className="rounded-lg"/>

                    <img src="images/projetos/cliente/gestosamaveis/sobregestosamaveis/bg-servicos.jpg" alt="Gestos Amaveis Homepage" className="rounded-lg"/>

                    <img src="images/projetos/cliente/gestosamaveis/sobregestosamaveis/bg-como-funciona.jpg" alt="Gestos Amaveis Homepage" className="rounded-lg"/>
                </div>

                {/** Explicação */}
                <div className="sticky top-24 self-start">
                    Gestos Amáveis 💚
                </div>
            </div>
        </GlobalContainer>
      </section>
    </>
  );
}

export default ProjetoReal;
