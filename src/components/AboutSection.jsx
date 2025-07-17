import React from "react";
import GlobalContainer from "../utils/GlobalContainer";
import me from "../assets/me/about-photo.svg";

function AboutSection() {
  return (
    <section className="min-h-screen mt-20 lg:mt-0 py-10 bg-primario-claro">
      <GlobalContainer>
        {/* Main title */}
        <h1 className="">Sobre mim</h1>
        {/* Title */}
        <h2 className="">
          Construo produtos com foco no que importa: as pessoas.
        </h2>
        {/* Subtitle */}
        <h3 className="">
          Interfaces bem feitas não são só bonitas — resolvem, simplificam e
          escalam.
        </h3>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 mt-10">
          {/* Left Side - Foto */}
          <div className="flex items-center justify-center w-full mx-auto">
            <img
              src={me}
              alt="personal photo"
              className="bg-gradient-to-b from-primario-claro w-80 h-80"
            />
          </div>

          {/* Right Side - Texto */}
          <div className="text-justify text-base lg:text-lg max-w-2xl">
            <p className="mb-4">
              Sou um frontend developer focado em criar experiências digitais
              que entregam valor real. Acredito que tecnologia não é sobre
              código, mas sobre resolver problemas concretos da forma mais
              simples e eficaz possível. Comecei no desenvolvimento por
              curiosidade, mas fiquei por convicção. Trabalho com React,
              Tailwind e foco em performance e usabilidade. Acredito que um bom
              produto começa com empatia e termina com clareza. Não procuro
              reinventar a roda — quero fazer com que ela gire melhor. Não vejo
              meu trabalho como “só um portfólio”. Cada linha de código que
              escrevo tem um objetivo: transformar uma ideia em algo útil, que
              alguém realmente queira usar. Se o que você está construindo tem
              impacto, quero fazer parte.
            </p>
          </div>
        </div>
      </GlobalContainer>
    </section>
  );
}

export default AboutSection;
