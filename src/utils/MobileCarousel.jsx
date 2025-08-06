import React from "react";
import { Carousel, ChevronLeftIcon, ChevronRightIcon } from "flowbite-react";

export default function MobileCarousel() {
  return (
    <div className="h-72 sm:h-64 md:hidden mb-10">
      <Carousel
        slideInterval={5000}
        indicators={false}
        leftControl={
          <ChevronLeftIcon
            className="w-6 h-6 bg-green-50
            rounded-full text-[#2f9b92] hover:text"
          />
        }
        rightControl={
          <ChevronRightIcon
            className="w-6 h-6 bg-green-50
            rounded-full text-[#2f9b92] hover:text"
          />
        }
      >
        <img
          src="images/projetos/cliente/gestosamaveis/sobregestosamaveis/bg-herosection.jpg"
          alt="Gestos Amáveis - Hero Section"
        />
        <img
          src="images/projetos/cliente/gestosamaveis/sobregestosamaveis/bg-home-scroll.jpg"
          alt="Gestos Amáveis - Página inicial com scroll"
        />
        <img
          src="images/projetos/cliente/gestosamaveis/sobregestosamaveis/bg-sobre.jpg"
          alt="Gestos Amáveis - Seção sobre"
        />
        <img
          src="images/projetos/cliente/gestosamaveis/sobregestosamaveis/bg-servicos.jpg"
          alt="Gestos Amáveis - Seção serviços avulso"
        />
        <img
          src="images/projetos/cliente/gestosamaveis/sobregestosamaveis/bg-contact-form.jpg"
          alt="Gestos Amáveis - Contato"
        />
      </Carousel>
    </div>
  );
}

export function MobileCarouselLaunchPeak() {
  return (
    <div className="h-72 sm:h-64 md:hidden mb-10">
      <Carousel
        slideInterval={5000}
        indicators={false}
        leftControl={
          <ChevronLeftIcon
            className="w-6 h-6 bg-purple-50
            rounded-full text-[#6248d6] hover:text"
          />
        }
        rightControl={
          <ChevronRightIcon
            className="w-6 h-6 bg-purple-50
            rounded-full text-[#6248d6] hover:text"
          />
        }
      >
        <img
          src="images/projetos/ficticio/conceitopessoal/bg-launchpeak-herosection.jpg"
          alt="Launchpeak - Hero Section"
        />
        <img
          src="images/projetos/ficticio/conceitopessoal/bg-launchpeak-categorysection.jpg"
          alt="Launchpeak - Seção Categoria"
        />
        <img
          src="images/projetos/ficticio/conceitopessoal/bg-launchpeak-pricesection.jpg"
          alt="Launchpeak - Seção preço"
        />
        <img
          src="images/projetos/ficticio/conceitopessoal/bg-launchpeak-projectsection.jpg"
          alt="Launchpeak - Seção projetos"
        />
      </Carousel>
    </div>
  );
}
