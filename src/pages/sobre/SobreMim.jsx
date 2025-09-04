import React from "react";
import GlobalContainer from "../../utils/GlobalContainer";
import { PiWallDuotone } from "react-icons/pi";
import { MdOutlineDesignServices } from "react-icons/md";
import { MdImportantDevices } from "react-icons/md";
import { PiRocketLaunchDuotone } from "react-icons/pi";
import { VscCompassDot } from "react-icons/vsc";
import { SiLibreofficewriter } from "react-icons/si";
import { BubblyLink } from "../../library/BubblyLink";
import me from "../../assets/me/about-photo.svg";
import { Helmet } from "react-helmet";

function SobreMim() {
  return (
    <>
      <Helmet>
        <title>About — LodeX Studio</title>
        <meta
          name="description"
          content="I help freelancers and entrepreneurs build clean, fast websites that communicate clearly and convert. Frontend developer and UI/UX designer."
        />
        <meta
          name="keywords"
          content="about Lodney Santos, about LodeX Studio, frontend developer, UI/UX designer, freelancer websites"
        />
      </Helmet>

      <HeroSection />
      <WhatIDoSection />
      <ForWhomSection />
      <WhySection />
      <CallToActionSection />
    </>
  );
}

/* Sub‑components */

const HeroSection = () => (
  <section
    id="sobremim"
    className="min-h-[95vh] lg:min-h-[70vh] 2xl:min-h-[35vh] pt-36 border-b shadow-md bg-gray-50"
  >
    <GlobalContainer>
      <div className="flex flex-col items-start justify-start mb-2">
        <h1 className="text-sm font-bold uppercase text-secundario subpixel-antialiased tracking-[2px] mb-1">
          Sobre mim
        </h1>
        <h2 className="text-5xl tracking-tighter font-semibold text-primario subpixel-antialiased">
          <span className="text-primario font-semibold">Entre design</span>
          <span className="text-[#757575]"> e </span>
          persistência
        </h2>
      </div>

      <div className="flex flex-col-reverse lg:flex-row gap-y-10 lg:gap-x-16 items-center">
        <div className="text-gray-800 text-left leading-relaxed">
          <h1 className="mb-6 text-2xl font-bold text-[#757575] subpixel-antialiased">
            Lodney Santos — Frontend Developer &<br /> UI/UX Designer
          </h1>

          <p className="max-w-xl mb-20 lg:mb-6 font-light text-xl leading-relaxed subpixel-antialiased">
            Sempre fui curioso com o que há por trás das coisas — desmontar
            computadores, observar interfaces, tentar entender lógica onde a
            maioria só vê pixels. Foi no design digital que encontrei um lugar
            onde forma e estrutura se encontram. Sou desenvolvedor frontend com
            foco em transformar ideias em produtos digitais com estrutura,
            clareza e presença visual.
            <br />
            <br />
            Ajudo pessoas que têm uma ideia, mas ainda não têm alguém que saiba
            dar forma a isso com código, design e usabilidade.
          </p>
        </div>

        <img
          src={me}
          alt="Lod, desenvolvedor frontend e entusiasta de UI/UX design"
          className="w-64 mt-28 sm:w-80 aspect-square rounded-2xl object-cover mx-auto bg-gradient-to-b from-primario-claro shadow-lg hover:scale-105 hover:brightness-105 hover:contrast-100 hover:shadow-xl -translate-y-16 transform transition-all duration-500"
        />
      </div>
    </GlobalContainer>
  </section>
);

const whatIDoItems = [
  {
    icon: <PiWallDuotone className="size-10 text-gray-500" />,
    title: "Construo",
    text: "Websites e interfaces sob medida, sem templates, com base na ideia e no público.",
  },
  {
    icon: <MdOutlineDesignServices className="size-10 text-gray-500" />,
    title: "Desenho",
    text: "Protótipos e interfaces funcionais com foco em estrutura, hierarquia e intenção visual.",
  },
  {
    icon: <MdImportantDevices className="size-10 text-gray-500" />,
    title: "Desenvolvo",
    text: "Frontend com React, Tailwind e animações leves com Framer Motion",
  },
  {
    icon: <PiRocketLaunchDuotone className="size-10 text-gray-500" />,
    title: "Lanço",
    text: "Transformo ideias iniciais em MVPs prontos para ir ao ar — simples, diretos e viáveis.",
  },
  {
    icon: <VscCompassDot className="size-10 text-gray-500" />,
    title: "Guio",
    text: "Ajudas pontuais para quem quer clareza no que precisa construir (mesmo antes do código).",
  },
];

const WhatIDoSection = () => (
  <section id="Oquefaco" className="pb-32 pt-20 border-b">
    <GlobalContainer>
      <div className="mb-16">
        <h2 className="mb-6 text-4xl font-light text-[##333333] subpixel-antialiased text-center">
          Dou forma ao que <br />
          ainda está só na cabeça.
        </h2>
      </div>

      <DividerLabel label="O que faço?" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mt-4">
        {whatIDoItems.map(({ icon, title, text }) => (
          <InfoCard key={title} icon={icon} title={title} text={text} />
        ))}
      </div>
    </GlobalContainer>
  </section>
);

const ForWhomSection = () => (
  <section
    id="paraqueme"
    className="min-h-[95vh] lg:min-h-[95vh] 2xl:min-h-[35vh] pb-20 pt-16 lg:pb-0 lg:pt-24 border-b shadow-md bg-gray-50"
  >
    <GlobalContainer>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="sticky">
          <img
            src="images/aboutme/pratical.png"
            alt="Retrato pratical"
            className="w-52 sm:w-96 object-cover mx-auto hover:brightness-105 hover:contrast-100 transform transition-all duration-500"
          />
        </div>

        <div className="text-gray-800">
          <h1 className="mb-6 mt-6 lg:mt-0 text-4xl font-light text-[##333333] subpixel-antialiased">
            Para quem é
          </h1>

          <p className="max-w-xl mb-6 font-light text-lg leading-relaxed subpixel-antialiased">
            Se tens uma ideia, um projeto, um negócio ou até só um rascunho mal
            definido, posso ajudar a dar forma a isso. Já trabalhei com quem
            tinha tudo pronto e só precisava de execução, mas também com quem só
            tinha uma frase e nenhuma certeza.
            <br /> <br />
            Seja um site simples, uma landing page, uma app ou algo maior, a
            base é a mesma: escutar, entender e construir algo funcional e
            visualmente certo para quem vai usar.
            <br /> <br />
            Trabalho com quem está a começar, com freelancers, pequenos
            negócios, criadores ou equipas que querem algo próprio, sem
            complicação. Não importa se tens experiência técnica ou não sabes
            por onde começar. O meu papel é facilitar, guiar e construir
            contigo, com transparência e foco no essencial. Se valorizas isso,
            estou aqui para somar.
          </p>
        </div>
      </div>
    </GlobalContainer>
  </section>
);

const WhySection = () => (
  <section id="porquefacoisso" className="-mb-1.2 py-16 bg-white border-b">
    <GlobalContainer>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="text-gray-800">
          <h1 className="mb-6 text-4xl font-light text-[##333333] subpixel-antialiased">
            Por que faço isso?
          </h1>
          <p className="max-w-lg font-light text-xl leading-relaxed subpixel-antialiased">
            Levei anos para entender o meu lugar. Comecei desmontando
            computadores, lutei com a programação, formei-me com atraso. Mas
            descobri que meu foco não era velocidade, era transformar confusão
            em clareza.
            <br />
            <br />É isso que faço hoje: ajudo pessoas a transformar ideias
            soltas em experiências digitais reais, com estrutura, beleza e
            funcionalidade, mesmo que o ponto de partida seja incerto.
          </p>
        </div>

        <div className="sticky">
          <img
            src="images/aboutme/place.svg"
            alt="Retrato pratical"
            className="hidden md:block w-72 inset-[326px] xl:translate-x-0 translate-x-16 lg:w-96 object-cover mx-auto hover:brightness-105 hover:contrast-100 transform transition-all duration-500 lg:inset-[166px] left-0 absolute"
          />
        </div>
      </div>
    </GlobalContainer>
  </section>
);

const CallToActionSection = () => (
  <section id="construir" className="py-24 border-b shadow-md bg-gray-50">
    <GlobalContainer>
      <div className="flex flex-col items-center justify-center text-center">
        <h1 className="text-3xl font-bold uppercase text-terciario mb-2">
          Bora construir?
        </h1>
        <p className="text-terciario text-base mb-6 font-regular">
          Quando a ideia é boa, a execução precisa acompanhar.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <BubblyLink to="/conversar" colorStart="#004AAD" colorEnd="#FFFFFF">
            <button
              className="bg-primario font-semibold text-white py-3 px-4 rounded-full shadow-md hover:shadow-lg text-sm w-full sm:w-fit max-w-xs hover:bg-secundario transition-all duration-500 whitespace-nowrap hover:ring-2 hover:ring-white hover:scale-105 hover:ring-inset flex items-center gap-1"
              aria-label="Explorar projetos"
            >
              <SiLibreofficewriter className="text-green-400" />
              Preencher formulário
            </button>
          </BubblyLink>

          <BubblyLink to="/portfolio" colorStart="#004AAD" colorEnd="#FFFFFF">
            <button
              className="bg-white font-semibold text-secundario py-3 px-3 rounded-full shadow-md hover:shadow-lg text-sm w-full sm:w-fit max-w-xs hover:bg-blue-300 hover:text-white transition-all duration-500 whitespace-nowrap hover:ring-2 hover:ring-white ring-secundario ring-2 hover:scale-105 hover:ring-inset flex items-center gap-1"
              aria-label="Explorar projetos"
            >
              👉 Veja os meus projetos
            </button>
          </BubblyLink>
        </div>
      </div>
    </GlobalContainer>
  </section>
);

/* Reusable small components */

const DividerLabel = ({ label }) => (
  <div className="relative flex items-center justify-center pb-10">
    <div className="w-full mx-auto border border-gray-200"></div>
    <div className="absolute w-24 h-10 flex items-center justify-center text-center text-sm font-light text-white bg-secundario border-1 border-white rounded-full -rotate-6">
      {label}
    </div>
  </div>
);

const InfoCard = ({ icon, title, text }) => (
  <div className="flex items-center justify-center text-center">
    <div className="flex flex-col items-center justify-center space-y-1">
      {icon}
      <h1 className="font-bold">{title}</h1>
      <p className="font-light text-lg leading-relaxed subpixel-antialiased">
        {text}
      </p>
    </div>
  </div>
);

export default SobreMim;
