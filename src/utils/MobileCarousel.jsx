import React from "react";
import { Carousel, ChevronLeftIcon, ChevronRightIcon } from "flowbite-react";

function MobileCarousel() {
  return (
    <div className="h-56 sm:h-64 md:hidden mb-10">
      <Carousel
        slideInterval={5000}
        indicators={false}
        leftControl={
            <ChevronLeftIcon 
            className="w-6 h-6 bg-green-50
            rounded-full text-[#2f9b92] hover:text"/>
        }
        rightControl={
            <ChevronRightIcon 
            className="w-6 h-6 bg-green-50
            rounded-full text-[#2f9b92] hover:text"/>
        }
      >
        <img
          src="images/projetos/cliente/gestosamaveis/sobregestosamaveis/bg-herosection.jpg"
          alt="..."
        />
        <img
          src="images/projetos/cliente/gestosamaveis/sobregestosamaveis/bg-home-scroll.jpg"
          alt="..."
        />
        <img
          src="images/projetos/cliente/gestosamaveis/sobregestosamaveis/bg-sobre.jpg"
          alt="..."
        />
        <img
          src="images/projetos/cliente/gestosamaveis/sobregestosamaveis/bg-servicos.jpg"
          alt="..."
        />
        <img
          src="images/projetos/cliente/gestosamaveis/sobregestosamaveis/bg-contact-form.jpg"
          alt="..."
        />
      </Carousel>
    </div>
  );
}

export default MobileCarousel;
