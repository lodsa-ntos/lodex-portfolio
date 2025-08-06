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
        <title>LodeX Studio — Sobre mim</title>
      </Helmet>
      <section
        id="sobremim"
        className="min-h-[95vh] lg:min-h-[70vh] 2xl:min-h-[35vh] pt-36 border-b shadow-md bg-gray-50"
      >
        <GlobalContainer>
          <div className="flex flex-col items-start justify-start mb-2">
            {/* Main title */}
            <h1 className="text-sm font-bold uppercase text-secundario subpixel-antialiased tracking-[2px] mb-1">
              Sobre mim
            </h1>
            {/* Title */}
            <h2 className="text-5xl tracking-tighter font-semibold text-primario subpixel-antialiased">
              <span className="text-primario font-semibold">Entre design</span>
              <span className="text-[#757575]"> e </span>
              persistência
            </h2>
          </div>

          <div className="flex flex-col-reverse lg:flex-row gap-y-10 lg:gap-x-16 items-center">
            {/* Right Side - Texto */}
            <div className="text-gray-800 text-left leading-relaxed">
              <h1 className="mb-6 text-2xl font-bold text-[#757575] subpixel-antialiased">
                 Lodney Santos — Frontend Developer &<br /> UI/UX Designer 
              </h1>

              <p className="max-w-xl mb-20 lg:mb-6 font-light text-xl leading-relaxed subpixel-antialiased">
                Sempre fui curioso com o que há por trás das coisas — desmontar
                computadores, observar interfaces, tentar entender lógica onde a
                maioria só vê pixels. Foi no design digital que encontrei um
                lugar onde forma e estrutura se encontram. Sou desenvolvedor
                frontend com foco em transformar ideias em produtos digitais com
                estrutura, clareza e presença visual.
                <br />
                <br />
                Ajudo pessoas que têm uma ideia — mas ainda não têm alguém que
                saiba dar forma a isso com código, design e usabilidade.
              </p>
            </div>

            {/* Left Side - Foto */}
            <img
              src={me}
              alt="Lod, desenvolvedor frontend e entusiasta de UI/UX design"
              className="w-64 mt-28 sm:w-80 aspect-square rounded-2xl object-cover mx-auto bg-gradient-to-b from-primario-claro shadow-lg hover:scale-105 hover:brightness-105 hover:contrast-100 hover:shadow-xl -translate-y-16 transform transition-all duration-500"
            />
          </div>
        </GlobalContainer>
      </section>

      {/** O que faço */}
      <section id="Oquefaco" className="pb-32 pt-20 border-b">
        <GlobalContainer>
          <div className="mb-16">
            <h2 className="mb-6 text-4xl font-light text-[##333333] subpixel-antialiased text-center">
              Dou forma ao que <br />
              ainda está só na cabeça.
            </h2>
          </div>

          <div className="relative flex items-center justify-center pb-10">
            <div className="w-full mx-auto border border-gray-200"></div>
            <div className="absolute w-24 h-10 flex items-center justify-center text-center text-sm font-light text-white  bg-secundario border-1 border-white rounded-full -rotate-6">
              O que faço?
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mt-4">
            {/** Card 1 */}
            <div className="flex items-center justify-center text-center">
              <div className="flex flex-col items-center justify-center space-y-1">
                <PiWallDuotone className="size-10 text-gray-500" />
                <h1 className="font-bold ">Construo</h1>
                <p className="font-light text-lg leading-relaxed subpixel-antialiased">
                  Websites e interfaces sob medida — sem templates, com base na
                  ideia e no público.
                </p>
              </div>
            </div>

            {/** Card 2 */}
            <div className="flex items-center justify-center text-center">
              <div className="flex flex-col items-center justify-center space-y-1">
                <MdOutlineDesignServices className="size-10 text-gray-500" />
                <h1 className="font-bold ">Desenho</h1>
                <p className="font-light text-lg leading-relaxed subpixel-antialiased">
                  Protótipos e interfaces funcionais com foco em estrutura,
                  hierarquia e intenção visual.
                </p>
              </div>
            </div>

            {/** Card 3 */}
            <div className="flex items-center justify-center text-center">
              {/** Card 1 */}
              <div className="flex flex-col items-center justify-center space-y-1">
                <MdImportantDevices className="size-10 text-gray-500" />
                <h1 className="font-bold ">Desenvolvo</h1>
                <p className="font-light text-lg leading-relaxed subpixel-antialiased">
                  Frontend com React, Tailwind e animações leves com Framer
                  Motion
                </p>
              </div>
            </div>

            {/** Card 4 */}
            <div className="flex items-center justify-center text-center">
              <div className="flex flex-col items-center justify-center space-y-1">
                <PiRocketLaunchDuotone className="size-10 text-gray-500" />
                <h1 className="font-bold ">Lanço</h1>
                <p className="font-light text-lg leading-relaxed subpixel-antialiased">
                  Transformo ideias iniciais em MVPs prontos para ir ao ar —
                  simples, diretos e viáveis.
                </p>
              </div>
            </div>

            {/** Card 5 */}
            <div className="flex items-center justify-center text-center">
              <div className="flex flex-col items-center justify-center space-y-1">
                <VscCompassDot className="size-10 text-gray-500" />
                <h1 className="font-bold ">Guio</h1>
                <p className="font-light text-lg leading-relaxed subpixel-antialiased">
                  Ajudas pontuais para quem quer clareza no que precisa
                  construir (mesmo antes do código).
                </p>
              </div>
            </div>
          </div>
        </GlobalContainer>
      </section>

      {/** Para quem é */}
      <section
        id="paraqueme"
        className="min-h-[95vh] lg:min-h-[95vh] 2xl:min-h-[35vh] pb-20 lg:pb-0 pt-24 border-b shadow-md bg-gray-50"
      >
        <GlobalContainer>
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Left Side - Foto */}
            <div className="sticky">
              <img
                src="images/aboutme/pratical.png"
                alt="Retrato pratical"
                className="w-52 sm:w-96 object-cover mx-auto hover:brightness-105 hover:contrast-100  transform transition-all duration-500"
              />
            </div>

            {/* Right Side - Texto */}
            <div className="text-gray-800">
              <h1 className="mb-6 mt-6 lg:mt-0 text-4xl font-light text-[##333333] subpixel-antialiased">
                Para quem é
              </h1>

              <p className="max-w-xl mb-6 font-light text-lg leading-relaxed subpixel-antialiased">
                Se tens uma ideia, um projeto, um negócio ou até só um rascunho
                mal definido — posso ajudar a dar forma a isso. Já trabalhei com
                quem tinha tudo pronto e só precisava de execução, mas também
                com quem só tinha uma frase e nenhuma certeza.
                <br /> <br />
                Seja um site simples, uma landing page, uma app ou algo maior, a
                base é a mesma: escutar, entender e construir algo funcional e
                visualmente certo para quem vai usar.
                <br /> <br />
                Trabalho com quem está a começar, com freelancers, pequenos
                negócios, criadores ou equipas que querem algo próprio — sem
                complicação. Não importa se tens experiência técnica ou não
                sabes por onde começar. O meu papel é facilitar, guiar e
                construir contigo, com transparência e foco no essencial. Se
                valorizas isso, estou aqui para somar.
              </p>
            </div>
          </div>
        </GlobalContainer>
      </section>

      {/** Por que faço isso*/}
      <section id="porquefacoisso" className="-mb-1.2 py-16 bg-white border-b">
        <GlobalContainer>
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Right Side - Texto */}
            <div className="text-gray-800">
              <h1 className="mb-6 text-4xl font-light text-[##333333] subpixel-antialiased">
                Por que faço isso?
              </h1>
              <p className="max-w-lg font-light text-xl leading-relaxed subpixel-antialiased">
                Levei anos para entender o meu lugar. Comecei desmontando
                computadores, lutei com a programação, formei-me com atraso. Mas
                descobri que meu foco não era velocidade, era transformar
                confusão em clareza.
                <br />
                <br />É isso que faço hoje: ajudo pessoas a transformar ideias
                soltas em experiências digitais reais — com estrutura, beleza e
                funcionalidade, mesmo que o ponto de partida seja incerto.
              </p>
            </div>

            {/* Left Side - Foto */}
            <div className="sticky">
              <img
                src="images/aboutme/place.svg"
                alt="Retrato pratical"
                className="hidden md:block w-72 inset-[326px] xl:translate-x-0 translate-x-16 lg:w-96 object-cover mx-auto hover:brightness-105 hover:contrast-100  transform transition-all duration-500 lg:inset-[166px] left-0 absolute"
              />
            </div>
          </div>
        </GlobalContainer>
      </section>

      {/** Para quem é */}
      <section id="paraqueme" className="py-24 border-b shadow-md bg-gray-50">
        <GlobalContainer>
          <div className="flex flex-col items-center justify-center text-center">
            <h1 className="text-3xl font-bold uppercase text-terciario mb-2">
              Bora construir?
            </h1>
            <p className="text-terciario text-base mb-6 font-regular">
              Quando a ideia é boa, a execução precisa acompanhar.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <BubblyLink
                to="/conversar"
                colorStart="#004AAD"
                colorEnd="#FFFFFF"
              >
                <button
                  className="bg-primario font-semibold text-white py-3 px-4 rounded-full shadow-md hover:shadow-lg text-sm w-full sm:w-fit max-w-xs hover:bg-secundario transition-all duration-500 whitespace-nowrap hover:ring-2 hover:ring-white hover:scale-105 hover:ring-inset flex items-center gap-1"
                  aria-label="Explorar projetos"
                >
                  <SiLibreofficewriter className="text-green-400" />
                  Preencher formulário
                </button>
              </BubblyLink>

              <BubblyLink
                to="/portfolio"
                colorStart="#004AAD"
                colorEnd="#FFFFFF"
              >
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
    </>
  );
}

export default SobreMim;
