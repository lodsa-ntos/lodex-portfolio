import React from "react";
import GlobalContainer from "../../utils/GlobalContainer";
import { PiRocketLaunchFill } from "react-icons/pi";
import { GiVacuumCleaner } from "react-icons/gi";
import { TbFileTypePdf } from "react-icons/tb";
import { FaLaptopCode } from "react-icons/fa";
import { MdCall } from "react-icons/md";
import { RiPagesLine } from "react-icons/ri";
import { CgWebsite } from "react-icons/cg";
import { FaPortrait } from "react-icons/fa";
import { MdOutlineDesignServices } from "react-icons/md";
import { FaRocketchat } from "react-icons/fa";
import { FcIdea } from "react-icons/fc";
import { FcSmartphoneTablet } from "react-icons/fc";
import { FcMultipleInputs } from "react-icons/fc";
import { FcEnteringHeavenAlive } from "react-icons/fc";

function Services() {
  const cardsTop = [
    {
      icon: <RiPagesLine className="size-10 text-secundario" />,
      title: "Landing pages sob medida",
      desc: "Para quem precisa comunicar uma ideia com impacto e clareza. Direto ao ponto.",
      descModal:
        "Uma página única e direta para apresentar tua ideia com impacto e ação.",
      linkText: "Ver detalhes",
      tag: {
        label: "Para validar ideias",
        cor: "text-yellow-800 px-4 rounded-full border border-yellow-200 mx-auto bg-yellow-50",
      },
      details: (
        <>
          <ul className="mb-4 text-sm text-gray-700">
            <li className="flex items-center justify-start gap-1">
              <FcIdea /> Visual feito com base no teu conteúdo
            </li>
            <li>📱 Página única, responsiva e funcional</li>
            <li>🔗 Botão, link ou formulário de contato</li>
            <li>⚙️ Código final com React + Tailwind</li>
          </ul>
        </>
      ),

      prerequisites:
        "Uma ideia mínima, referência ou esboço. Se não tiveres, posso sugerir caminhos visuais. Depois disso, a execução é comigo.",
      audience: "👥 freelancers, criadores e ideias em fase inicial",
      price: "💶 a partir de 300€",
      time: "📅 3 a 5 dias úteis",
      cta: (
        <>
          <a
            href={`https://wa.me/351937287597?text=${encodeURIComponent(
              `Olá! Gostaria de saber mais sobre o serviço avulso de ${`Assistência Sênior Diária`} oferecido pela Gestos Amáveis.`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-verde-petroleo text-secundario px-4 py-2 rounded-full font-semibold text-sm hover:brightness-105 transition"
            role="button"
            tabIndex={0}
            aria-label="Quero este apoio"
            onKeyPress={(e) => {
              if (e.key === "Enter" || e.key === " ") e.target.click();
            }}
          >
            👉 Quero conversar sobre este serviço
          </a>
        </>
      ),
    },
    {
      icon: <CgWebsite className="size-10 text-secundario" />,
      title: "Website completo",
      desc: "Do zero, com identidade — sem templates, site institucional ou pessoal com estrutura sólida",
      descModal:
        "Um site institucional ou pessoal com estrutura sólida, visual limpo e navegação fluida.",
      linkText: "Ver detalhes",
      tag: {
        label: "Para presença profissional",
        cor: "text-primario px-4 rounded-full border border-blue-200 mx-auto bg-blue-50",
      },
      details: (
        <>
          <ul className="mb-4 text-sm text-gray-700">
            <li>🧩 Design modular adaptado ao teu projeto</li>
            <li>🗂️ De 3 a 5 páginas: Home, Sobre, Serviços, Contato...</li>
            <li>🌐 Responsivo, acessível e com microanimações</li>
            <li>⚙️ Código limpo com React + Tailwind</li>
            <li>🔧 Suporte pós-entrega por 30 dias</li>
          </ul>
        </>
      ),
      prerequisites:
        "Precisas ter ideia do conteúdo das páginas. Se ainda estiveres a definir, posso ajudar com estrutura base e referências.",
      audience: "🏢 Profissionais, negócios locais, freelancers, marcas pessoais",
      price: "💶 a partir de 600€",
      time: "📅 10 a 15 dias úteis",
      cta: (
        <>
          <a
            href={`https://wa.me/351937287597?text=${encodeURIComponent(
              `Olá! Gostaria de saber mais sobre o serviço avulso de ${`Assistência Sênior Diária`} oferecido pela Gestos Amáveis.`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-verde-petroleo text-secundario px-4 py-2 rounded-full font-semibold text-sm hover:brightness-105 transition"
            role="button"
            tabIndex={0}
            aria-label="Quero este apoio"
            onKeyPress={(e) => {
              if (e.key === "Enter" || e.key === " ") e.target.click();
            }}
          >
            👉 Quero estruturar minha presença digital
          </a>
        </>
      ),
    },
    {
      icon: <FaPortrait className="size-10 text-secundario" />,
      title: "Portfólio com presença",
      desc: "Mostra o teu trabalho com estrutura, ritmo e identidade. Destaque para o trabalho e trajetória",
      descModal:
        "Um portfólio profissional que destaca tua trajetória, projetos e visão com impacto e clareza.",
      linkText: "Ver detalhes",
      tag: {
        label: "Para mostrar teu trabalho",
        cor: "text-purple-800 px-4 rounded-full border border-purple-200 mx-auto bg-purple-50",
      },
      details: (
        <>
          <ul className="mb-4 text-sm text-gray-700">
            <li>🎯 Design centrado na tua identidade e conteúdo</li>
            <li>📁 Seções como: Sobre, Projetos, Contato, Manifesto...</li>
            <li>🎈 Navegação fluida e animações suaves</li>
            <li>🔗 Links para GitHub, Behance, LinkedIn, etc.</li>
            <li>⚙️ Código com React + Tailwind, pronto para publicar</li>
          </ul>
        </>
      ),

      prerequisites:
        "Precisas enviar teus projetos, bio e referências visuais. Se precisares, posso orientar com base em exemplos.",
      audience: "🧑‍🎨 Designers, devs, freelancers, criadores independentes",
      price: "💶 a partir de 500€",
      time: "📅 8 a 12 dias úteis",
      cta: (
        <>
          <a
            href={`https://wa.me/351937287597?text=${encodeURIComponent(
              `Olá! Gostaria de saber mais sobre o serviço avulso de ${`Assistência Sênior Diária`} oferecido pela Gestos Amáveis.`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-verde-petroleo text-secundario px-4 py-2 rounded-full font-semibold text-sm hover:brightness-105 transition"
            role="button"
            tabIndex={0}
            aria-label="Quero este apoio"
            onKeyPress={(e) => {
              if (e.key === "Enter" || e.key === " ") e.target.click();
            }}
          >
            👉 Quero construir meu portfólio com presença
          </a>
        </>
      ),
    },
    {
      icon: <MdOutlineDesignServices className="size-10 text-secundario" />,
      title: "Redesign funcional",
      desc: "Para quem já tem algo online, mas quer mais clareza, performance ou presença sem perder tua essência.",
      descModal:
        "Melhoria visual e funcional de um site já existente. Mais clareza, estrutura e performance.",
      linkText: "Ver detalhes",
      tag: {
        label: "Melhora o teu site atual",
        cor: "text-gray-800 px-4 rounded-full border border-gray-300 mx-auto bg-gray-50",
      },
      details: (
        <>
          <ul className="mb-4 text-sm text-gray-700">
            <li>🔍 Análise de usabilidade, hierarquia e visual</li>
            <li>🎨 Redesenho parcial ou completo da interface</li>
            <li>⚡ Código otimizado e responsivo (se necessário)</li>
            <li>📐 Ajustes de contraste, legibilidade e espaçamento</li>
            <li>🖼️ Alinhamento com tua identidade atual</li>
          </ul>
        </>
      ),
      prerequisites:
        "Precisas ter um site online ou em desenvolvimento. A partir disso, analiso os pontos de melhoria.",
      audience: "🔁 Projetos que precisam evoluir visual ou funcionalmente",
      price: "💶 a partir de 400€",
      time: "📅 5 a 9 dias úteis",
      cta: (
        <>
          <a
            href={`https://wa.me/351937287597?text=${encodeURIComponent(
              `Olá! Gostaria de saber mais sobre o serviço avulso de ${`Assistência Sênior Diária`} oferecido pela Gestos Amáveis.`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-verde-petroleo text-secundario px-4 py-2 rounded-full font-semibold text-sm hover:brightness-105 transition"
            role="button"
            tabIndex={0}
            aria-label="Quero este apoio"
            onKeyPress={(e) => {
              if (e.key === "Enter" || e.key === " ") e.target.click();
            }}
          >
            👉 Quero melhorar meu site sem começar do zero
          </a>
        </>
      ),
    },
  ];

  // Open modal and scroll to details
  const [modalOpen, setModalOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(null);

  // (Removed unused handleFindOutMore function)
  const handleCardClick = (card) => {
    setSelectedCard(card);
    setModalOpen(true);
    // Scroll to the modal details section
    setTimeout(() => {
      const detailsSection = document.getElementById("modal-details-section");
      if (detailsSection) {
        detailsSection.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  // Modal component
  const Modal = ({ open, onClose, card }) => {
    if (!open || !card) return null;
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative bg-white rounded-2xl shadow-lg max-w-md w-full p-6 animate-fadeIn">
          <button
            className="absolute top-3 right-4 text-2xl text-verde-petroleo hover:text-secundario"
            onClick={onClose}
            aria-label="Fechar modal"
            type="button"
          >
            ×
          </button>
          <div className="flex flex-col">
            <div className="mb-4 flex items-center justify-center text-center">
              {card.icon}
            </div>
            <h3 className="text-lg font-semibold mb-2 items-start justify-center text-start">
              {card.title}
            </h3>
            <p className="text-gray-600 mb-4 items-start justify-center text-start">
              {card.descModal}
            </p>
            <div
              id="modal-details-section"
              className="items-start justify-center text-start"
            >
              {card.details}
            </div>
            <h3 className="text-lg font-semibold mb-2 items-start justify-center text-start">
              O que preciso de ti para começar:
            </h3>
            <p className="text-gray-600 mb-4 items-start justify-center text-start">
              {card.prerequisites}
            </p>
            <small className="mb-4 text-sm text-gray-700text-start">
              <>
                {card.time} <br />
                {card.price} <br />
                {card.audience} <br />
              </>
            </small>
            {card.cta}
          </div>
        </div>
      </div>
    );
  };

  const Card = ({ icon, title, desc, linkText, tag }) => (
    <div className="relative max-w-xs h-full border border-solid border-gray-400 rounded-2xl p-4 flex flex-col justify-between transition-all duration-500 col-span-12 xl:p-7 lg:col-span-3 md:col-span-6 border-l-4 border-l-primario">
      <span
        className={`absolute top-2 right-2 ${tag.cor} text-xs font-semibold pr-4 py-1 rounded flex items-end justify-end text-end `}
      >
        {`${tag.label}`}
      </span>
      <div className="mb-6 w-16 h-16 rounded-full bg-white flex items-center justify-center">
        {icon}
      </div>
      <h4 className="text-base font-semibold text-gray-900 mb-2 transition-all duration-500">
        {title}
      </h4>
      <p className="text-sm font-normal text-gray-500 transition-all duration-500 leading-5 mb-4">
        {desc}
      </p>
      <a
        href="javascript:;"
        className="group flex items-center gap-2 text-sm font-semibold text-terciario hover:underline transition-all duration-500"
        role="button"
        tabIndex={0}
        aria-label={linkText}
        onKeyPress={(e) => {
          if (e.key === "Enter" || e.key === " ") e.target.click();
        }}
      >
        {linkText}
        <svg
          className="transition-all duration-500 group-hover:translate-x-1"
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          focusable="false"
        >
          <path
            d="M2.25 9L14.25 9M10.5 13.5L14.4697 9.53033C14.7197 9.28033 14.8447 9.15533 14.8447 9C14.8447 8.84467 14.7197 8.71967 14.4697 8.46967L10.5 4.5"
            stroke="#004AAD"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
      </a>
    </div>
  );

  return (
    <section
      id="sobremim"
      className="min-h-[95vh] pt-36 border-b shadow-md bg-[#f6f6f6]"
    >
      <GlobalContainer>
        <div className="flex flex-col items-start justify-start mb-2">
          <div className="w-full py-10 mx-auto bg-white border rounded-3xl">
            <div className="flex flex-col items-center justify-center text-center">
              <div className="flex flex-col items-center justify-center p-2 text-terciario">
                <h1 className="text-5xl mb-4 mt-2 tracking-wide leading-10 font-medium text-black/90">
                  Serviços
                </h1>
                <p className="text-2xl font-light text-[#0e101199]">
                  <strong>
                    Acredito que cada projeto é uma oportunidade para praticar o
                    cuidado nos detalhes.
                  </strong>
                </p>
              </div>
              <div className="flex gap-3 mt-2 transition-all duration-500">
                <button
                  className="bg-primario font-semibold text-white py-3 px-4 rounded-md shadow-md hover:shadow-lg text-sm w-full sm:w-fit max-w-xs hover:bg-secundario transition-all duration-500 whitespace-nowrap hover:ring-2 hover:ring-secundario hover:scale-105 hover:ring-inset flex items-center gap-1"
                  aria-label="Explorar projetos"
                >
                  <a
                    href="#projetos"
                    className="flex items-center justify-center gap-1"
                  >
                    <FaRocketchat className="text-green-400" /> Quero conversar
                  </a>
                </button>

                <button
                  className="bg-white border-2 border-secundario text-secundario py-2 px-3 rounded-md shadow-sm text-sm font-medium w-full sm:w-fit max-w-xs ring-1 ring-inset ring-transparent hover:ring-secundario hover:scale-105 flex items-center gap-1 transition-all duration-500"
                  aria-label="Falar comigo"
                >
                  <TbFileTypePdf className="text-[#F40F02]" /> Ver portfólio
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="py-16 transition-all duration-500">
          {/* Cards em cima */}
          <div className="mb-10 gap-4 sm:mb-16 flex-wrap justify-center transition-all duration-500 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {cardsTop.map((card, idx) => (
              <div
                key={idx}
                onClick={() => handleCardClick(card)}
                className="cursor-pointer"
                tabIndex={0}
                role="button"
                aria-label={`Abrir detalhes de ${card.title}`}
                onKeyPress={(e) => {
                  if (e.key === "Enter" || e.key === " ") handleCardClick(card);
                }}
              >
                <Card {...card} />
              </div>
            ))}
          </div>

          {/* Modal for card details */}
          <Modal
            open={modalOpen}
            onClose={() => setModalOpen(false)}
            card={selectedCard}
          />
        </div>
      </GlobalContainer>
    </section>
  );
}

export default Services;
