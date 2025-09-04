import React, { useEffect, useRef, useState } from "react";
import GlobalContainer from "../../utils/GlobalContainer";
import { TbFileTypePdf } from "react-icons/tb";
import { RiPagesLine } from "react-icons/ri";
import { CgWebsite } from "react-icons/cg";
import { FaPortrait } from "react-icons/fa";
import { MdOutlineDesignServices } from "react-icons/md";
import { FaRocketchat } from "react-icons/fa";
import { GrValidate } from "react-icons/gr";
import { MdOutlinePersonPin } from "react-icons/md";
import { MdWeb } from "react-icons/md";
import { PiTreeStructureDuotone } from "react-icons/pi";
import { GiTakeMyMoney } from "react-icons/gi";
import { SiLibreofficewriter } from "react-icons/si";
import { BubblyLink } from "../../library/BubblyLink";
import { BsPersonWorkspace } from "react-icons/bs";
import { trackCtaClick, trackSectionView } from "../../utils/analytics";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet";

function Services() {
  // Section view tracking
  useEffect(() => {
    const seen = new Set();
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const el = entry.target;
          const id = el.getAttribute("data-track-section");
          if (id && entry.isIntersecting && !seen.has(id)) {
            seen.add(id);
            trackSectionView(id, { page: "services" });
          }
        });
      },
      { threshold: 0.5 }
    );

    document
      .querySelectorAll("[data-track-section]")
      .forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
  const cardsTop = [
    {
      icon: <RiPagesLine className="size-10 text-white" />,
      titleFunction1: "Landing pages sob medida",
      title: (
        <>
          Landing pages sob medida <br />{" "}
          <small className="text-sm flex items-center justify-start mt-1 gap-1">
            <GiTakeMyMoney className="text-green-700 size-5" /> a partir de 200€
          </small>
        </>
      ),
      titleFunction: "Landing pages sob medida → a partir de 200€",
      titleForm: "O que preciso para estruturar a tua landing…",
      desc: "Para quem precisa comunicar uma ideia com impacto e clareza. Direto ao ponto.",
      descModal:
        "Uma página única e direta para apresentar tua ideia com impacto e ação.",
      linkText: "Ver detalhes",
      tag: {
        minicon: <GrValidate />,
        label: "Para validar ideias",
        cor: "text-yellow-800 px-4 rounded-full border border-yellow-200 mx-auto bg-yellow-50",
      },
      details: [
        {
          iconDetails: "💡",
          text: "Criado com base na tua ideia ou conteúdo. Simples, direto e com identidade.",
          title: "Visual",
        },
        {
          iconDetails: "📱",
          text: "Estrutura única, responsiva e funcional, pensada para impactar.",
          title: "Página",
        },
        {
          iconDetails: "🔗",
          text: "Link, botão ou formulário para captar o interesse sem distrações.",
          title: "Botão",
        },
        {
          iconDetails: "⚙️",
          text: "Código leve com React + Tailwind, pronto para publicar ou integrar.",
          title: "Código",
        },
      ],

      prerequisites: (
        <>
          Basta uma ideia inicial, referência ou esboço.
          <br /> O resto trato eu.
        </>
      ),
      audience: "👥 freelancers, criadores e ideias em fase inicial",
      price: (
        <p className="flex-row items-center justify-center text-start">
          📄 O valor "<strong>a partir de 300€</strong>" refere-se à estrutura
          base do serviço.
          <br />
          💡 O preço final depende do número de seções, funcionalidades extra e
          do nível de preparação do conteúdo. <br />
          Vamos alinhar juntos de forma transparente. <br />
        </p>
      ),
      time: "📅 5 a 7 dias úteis",
      placeholder:
        "Descreve a tua ideia, desafio ou o que tens em mente. Vale tudo, mesmo que ainda não esteja claro.",
    },
    {
      icon: <CgWebsite className="size-10 text-white" />,
      titleFunction1: "Website completo",
      title: (
        <>
          Website completo <br />{" "}
          <small className="text-sm flex items-center justify-start mt-1 gap-1">
            <GiTakeMyMoney className="text-green-700 size-5" /> a partir de 400€
          </small>
        </>
      ),
      titleFunction: "Website completo → a partir de 400€",
      titleForm: "Vamos estruturar o teu site…",
      desc: "Do zero, com identidade — sem templates, site institucional ou pessoal com estrutura sólida.",
      descModal:
        "Um site institucional ou pessoal com estrutura sólida, visual limpo e navegação fluida.",
      linkText: "Ver detalhes",
      tag: {
        minicon: <MdWeb />,
        label: "Para presença profissional",
        cor: "text-primario px-4 rounded-full border border-blue-200 mx-auto bg-blue-50",
      },
      details: [
        {
          iconDetails: "🧩",
          text: "Design modular adaptado ao teu projeto e identidade. Sem templates.",
          title: "Visual",
        },
        {
          iconDetails: "🗂️",
          text: "De 3 a 5 páginas como Home, Sobre, Serviços, Contato... com navegação clara.",
          title: "Estrutura",
        },
        {
          iconDetails: "🌐",
          text: "Responsivo, acessível e com animações suaves que orientam o olhar.",
          title: "Acessibilidade",
        },
        {
          iconDetails: "⚙️",
          text: "Frontend limpo com React + Tailwind, preparado para crescer contigo.",
          title: "Código",
        },
        {
          iconDetails: "🔧",
          text: "Acompanhamento pós-entrega por 30 dias para pequenos ajustes.",
          title: "Suporte",
        },
      ],

      prerequisites: (
        <>
          Precisas ter ideia do conteúdo das páginas. <br />
          Se ainda estiveres a definir,
          <br /> posso ajudar com estrutura base e referências.
        </>
      ),

      audience:
        "🏢 Profissionais, negócios locais, freelancers, marcas pessoais",
      price: (
        <p className="flex-row items-center justify-center text-start">
          📄 O valor "<strong>a partir de 600€</strong>" refere-se à estrutura
          base do serviço.
          <br />
          💡 O preço final varia conforme o número de páginas, integração de
          funcionalidades (ex: blog, CMS) e se já tiveres conteúdo definido.{" "}
          <br />
          Tudo é alinhado com clareza desde o início.
        </p>
      ),
      time: "📅 3 a 4 semanas úteis",
      placeholder:
        "Tens alguma ideia das páginas necessárias? Já tens identidade visual? (ex: Home, Sobre, Contato...)",
    },
    {
      icon: <FaPortrait className="size-10 text-white" />,
      titleFunction1: "Portfólio com presença",
      title: (
        <>
          Portfólio com presença <br />{" "}
          <small className="text-sm flex items-center justify-start mt-1 gap-1">
            <GiTakeMyMoney className="text-green-700 size-5" /> a partir de 350€
          </small>
        </>
      ),
      titleFunction: "Portfólio com presença → a partir de 350€",
      titleForm: "O que preciso de ti para começar:",
      desc: "Mostra o teu trabalho com estrutura, ritmo e identidade. Destaque para o trabalho e trajetória.",
      descModal:
        "Um portfólio profissional que destaca tua trajetória, projetos e visão com impacto e clareza.",
      linkText: "Ver detalhes",
      tag: {
        minicon: <MdOutlinePersonPin />,
        label: "Para mostrar teu trabalho",
        cor: "text-purple-800 px-4 rounded-full border border-purple-200 mx-auto bg-purple-50",
      },
      details: [
        {
          iconDetails: "🎯",
          text: "Criado com base no teu estilo, ritmo e trajetória. Identidade em foco.",
          title: "Visual",
        },
        {
          iconDetails: "🗂️",
          text: "Sobre, Projetos, Contato, Manifesto... tudo alinhado com tua narrativa.",
          title: "Seções",
        },
        {
          iconDetails: "🎈",
          text: "Transições suaves, foco no percurso do visitante.",
          title: "Navegação",
        },
        {
          iconDetails: "🔗",
          text: "Integrações com GitHub, LinkedIn, Behance ou o que fizer sentido para ti.",
          title: "Links",
        },
        {
          iconDetails: "⚙️",
          text: "Desenvolvido com React + Tailwind, responsivo e pronto para mostrar teu trabalho.",
          title: "Código",
        },
      ],

      prerequisites: (
        <>
          Precisas enviar teus projetos, bio e referências visuais.
          <br /> Se precisares, posso orientar com base em exemplos.
        </>
      ),

      audience: "🧑‍🎨 Designers, devs, freelancers, criadores independentes",
      price: (
        <p className="flex-row items-center justify-center text-start">
          📄 O valor "<strong>a partir de 450€</strong>" refere-se à estrutura
          base do serviço.
          <br />
          💡 O preço pode variar conforme a quantidade de projetos, nível de
          orientação necessária para bio, e ajustes visuais específicos. <br />
          Vamos montar com ritmo, clareza e identidade.
        </p>
      ),
      time: "📅 2 a 3 semanas úteis",
      placeholder:
        "Fala um pouco sobre os teus projetos, referências ou onde já expuseste o teu trabalho. Links úteis como GitHub, Behance ou Instagram também ajudam.",
    },
    {
      icon: <MdOutlineDesignServices className="size-10 text-white" />,
      titleFunction1: "Redesign funcional",
      title: (
        <>
          Redesign funcional <br />{" "}
          <small className="text-sm flex items-center justify-start gap-1 mt-1">
            <GiTakeMyMoney className="text-green-700 size-5" /> a partir de 100€
          </small>
        </>
      ),
      titleFunction: "Redesign funcional → a partir de 100€",
      titleForm: "Para começamos o redesign…",
      desc: "Para quem já tem algo online, mas quer mais clareza, performance ou presença sem perder tua essência.",
      descModal:
        "Melhoria visual e funcional de um site já existente. Mais clareza, estrutura e performance.",
      linkText: "Ver detalhes",
      tag: {
        minicon: <PiTreeStructureDuotone />,
        label: "Melhora o teu site atual",
        cor: "text-gray-800 px-4 rounded-full border border-gray-300 mx-auto bg-gray-50",
      },
      details: [
        {
          iconDetails: "🔍",
          text: "Análise de usabilidade, contraste e hierarquia visual do site atual.",
          title: "Diagnóstico",
        },
        {
          iconDetails: "🎨",
          text: "Redesenho parcial ou total da interface sem perder tua essência.",
          title: "Interface",
        },
        {
          iconDetails: "⚡",
          text: "Código ajustado ou refeito com foco em performance e responsividade.",
          title: "Código",
        },
        {
          iconDetails: "📐",
          text: "Espaçamento, tipografia, leitura... todos os detalhes que fazem diferença.",
          title: "Ajustes",
        },
        {
          iconDetails: "🖼️",
          text: "Garantia de alinhamento visual com a tua marca ou projeto atual.",
          title: "Identidade",
        },
      ],

      prerequisites: <>Se já tens um site, analiso o que pode ser melhorado.</>,

      audience: "🔁 Projetos que precisam evoluir visual ou funcionalmente",
      price: (
        <p className="flex-row items-center justify-center text-start">
          📄 O valor "<strong>a partir de 150€</strong>" refere-se ao redesenho
          visual e melhorias básicas.
          <br />
          💡 Pode variar caso precise de novo código, reformulação completa ou
          identidade visual. <br />A análise é feita com base no que já tens
          online.
        </p>
      ),
      time: "📅 2 a 3 semanas úteis",
      placeholder:
        "Descreve brevemente o que gostavas de melhorar (design, performance, clareza...)",
    },
  ];

  // Open modal and scroll to details
  const [selectedService, setselectedService] = useState(false);
  const formRef = useRef(null);
  // Estado para controlar e mostrar o formulário para preenchimento - Candidaturas
  const [sending, setSending] = useState(false);
  const [nomeCompleto, setnomeCompleto] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // Função para scrollar para o formulário quando um serviço for selecionado
  const handleScrollToForm = (card) => {
    setselectedService(card);
    setTimeout(() => {
      if (formRef.current) {
        formRef.current?.scrollIntoView({ behavior: "smooth" });
      }
    }, 100); // Atraso para garantir que o estado foi atualizado
  };

  // (Removed unused handleFindOutMore function)
  const handleCardClick = (card) => {
    setselectedService(card);
    // Scroll to the modal details section
    setTimeout(() => {
      const detailsSection = document.getElementById("modal-details-section");
      if (detailsSection) {
        detailsSection.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  const Card = ({ icon, title, desc, linkText, tag }) => (
    <div className="relative max-w-xs h-full border border-solid border-gray-400 bg-white rounded-2xl p-4 flex flex-col justify-between transition-all duration-500 col-span-12 xl:p-7 lg:col-span-3 md:col-span-6 border-l-4 border-l-primario">
      <span
        className={`absolute top-2 right-2 ${tag.cor} text-xs font-semibold pl-2 pr-2 py-1 rounded flex items-center justify-end text-end gap-1 `}
      >
        {tag.minicon} {`${tag.label}`}
      </span>
      <div className="mb-6 w-16 h-16 rounded-full bg-secundario flex items-center justify-center">
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

  // Função para enviar o formulário
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);

    const formData = new FormData(e.target);
    formData.append("funcao", selectedService?.titleFunction1);

    try {
      const response = await fetch("/api/send-service", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        toast.success(
          "Mensagem enviada com sucesso! Obrigado, entrarei em contacto em breve."
        );
        setselectedService(false);

        // Limpa os campos do formulário
        setnomeCompleto("");
        setEmail("");
        setMessage("");
      } else {
        toast.error("Erro ao enviar mensagem. Por favor, tente novamente.");
        setselectedService(false);
      }
    } catch {
      toast.error(
        "Erro inesperado. Tente mais tarde. Se o problema persistir, contacte-nos."
      );
    } finally {
      setSending(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Services — LodeX Studio</title>
        <meta
          name="description"
          content="Websites and landing pages that turn freelancers and entrepreneurs from invisible to unforgettable online. Outcome-led, fast, and conversion-focused."
        />
        <meta
          name="keywords"
          content="web designer, frontend developer, landing page, website, portfolio, redesign, freelancer, entrepreneur, conversion, React, Tailwind"
        />
        {/* Review JSON-LD — prova social do cliente Gestos Amáveis */}
        <script type="application/ld+json">{`
{
  "@context": "https://schema.org",
  "@type": "Review",
  "itemReviewed": {
    "@type": "Organization",
    "name": "LodeX Studio"
  },
  "reviewBody": "Ficámos muito satisfeitas com o site. Está incrível, adorámos mesmo! Muito profissional e detalhista. A página Sobre Nós ficou linda e transmite exatamente o que queríamos.",
  "reviewRating": {
    "@type": "Rating",
    "ratingValue": "5",
    "bestRating": "5"
  },
  "author": {
    "@type": "Organization",
    "name": "Gestos Amáveis"
  }
}
        `}</script>
      </Helmet>
      <section
        id="servicos"
        className="min-h-[95vh] pt-36 border-b shadow-md bg-[#f6f6f6] transition-all duration-500"
        data-track-section="services_hero"
      >
        <GlobalContainer>
          <div className="flex flex-col items-start justify-start mb-2 transition-all duration-500">
            <div className="w-full py-10 mx-auto bg-white border rounded-3xl">
              <div className="flex flex-col items-center justify-center text-center">
                <div className="flex flex-col items-center justify-center p-2 text-terciario">
                  <h1 className="text-3xl md:text-4xl lg:text-5xl mb-4 mt-2 tracking-wide leading-10 font-medium text-black/90">
                    Transformo ideias em crescimento visível.
                  </h1>
                  <p className="text-2xl font-light text-[#0e101199]">
                    Sites e experiências que geram leads, autoridade e vendas.{" "}
                    <br />
                    Do primeiro pixel ao primeiro cliente.
                  </p>
                </div>
                <div className="flex gap-3 mt-2 transition-all duration-500">
                  <button
                    className="bg-primario font-semibold text-white py-3 px-4 rounded-full shadow-md hover:shadow-lg text-sm w-full sm:w-fit max-w-xs hover:bg-secundario transition-all duration-500 whitespace-nowrap hover:ring-2 hover:ring-secundario hover:scale-105 hover:ring-inset flex items-center gap-1"
                    aria-label="Explorar projetos"
                  >
                    <BubblyLink
                      to="/conversar"
                      colorStart="#004AAD"
                      colorEnd="#FFFFFF"
                      className="flex items-center justify-center gap-1"
                      onClick={() =>
                        trackCtaClick("cta_comecar_projeto", {
                          page: "services",
                        })
                      }
                    >
                      <SiLibreofficewriter className="text-green-400" /> Começar
                      projeto
                    </BubblyLink>
                  </button>

                  <BubblyLink
                    to="/portfolio"
                    colorStart="#004AAD"
                    colorEnd="#FFFFFF"
                    className="bg-white border-2 border-secundario text-secundario py-2 px-3 rounded-full shadow-sm text-sm font-medium w-full sm:w-fit max-w-xs ring-1 ring-inset ring-transparent hover:ring-secundario hover:scale-105 flex items-center gap-1 transition-all duration-500"
                    aria-label="Falar comigo"
                    onClick={() =>
                      trackCtaClick("cta_ver_casos", { page: "services" })
                    }
                  >
                    <BsPersonWorkspace className="text-indigo-600" /> Ver casos
                    & resultados
                  </BubblyLink>
                </div>
              </div>
            </div>
          </div>

          {/* Testemunho curto (prova social) */}
          <div
            className="w-full mb-6"
            data-track-section="services_testimonial"
          >
            <div className="mx-auto max-w-3xl bg-white border rounded-2xl p-5 flex gap-3 items-start">
              <div className="shrink-0">
                <div className="w-10 h-10 rounded-full bg-white ring-1 ring-slate-200 overflow-hidden flex items-center justify-center">
                  <img
                    src="/images/projetos/cliente/gestosamaveis/gestos-amaveis-logo.jpg"
                    alt="Gestos Amáveis — logotipo"
                    className="w-9 h-9 object-contain"
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="flex-1">
                <p className="text-gray-800 italic">
                  “Ficámos muito satisfeitas com o site. Está incrível, adorámos
                  mesmo! Muito profissional e detalhista. A página Sobre Nós
                  ficou linda e transmite exatamente o que queríamos.”
                </p>
                <div className="mt-2 flex items-center gap-3 text-sm text-slate-600">
                  <span className="font-semibold text-gray-900">
                    Gestos Amáveis
                  </span>
                  <span>•</span>
                  <span>Projeto de website</span>
                  <span>•</span>
                  <span
                    aria-label="5 estrelas no Google"
                    title="5 estrelas no Google"
                  >
                    ★★★★★
                  </span>
                  <span>•</span>
                  <BubblyLink
                    to="/gestosamaveis"
                    colorStart="#004AAD"
                    colorEnd="#FFFFFF"
                    className="text-primario hover:underline"
                    aria-label="Ver projeto Gestos Amáveis"
                    onClick={() =>
                      trackCtaClick("cta_ver_projeto_gestosamaveis", {
                        page: "services",
                      })
                    }
                  >
                    Ver projeto
                  </BubblyLink>
                </div>
              </div>
            </div>
          </div>

          <div className="py-16 flex items-center justify-center transition-all duration-500">
            {/* Cards em cima */}
            <div className="mb-10 gap-4 sm:mb-16 flex-wrap justify-center transition-all duration-500 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4">
              {cardsTop.map((card, idx) => (
                <div
                  key={idx}
                  onClick={() => handleScrollToForm(card)}
                  className="cursor-pointer"
                  tabIndex={0}
                  role="button"
                  aria-label={`Abrir detalhes de ${card.title}`}
                  onKeyPress={(e) => {
                    if (e.key === "Enter" || e.key === " ")
                      handleCardClick(card);
                  }}
                >
                  <Card {...card} />
                </div>
              ))}
            </div>
          </div>

          {/* Formulário */}
          <div>
            {selectedService && (
              <>
                <div
                  ref={formRef}
                  className="text-left container mx-auto py-2 transition-all duration-500"
                >
                  <span className="text-xs sm:text-sm text-secundario  font-semibold text-start block mb-2 uppercase tracking-wide ">
                    Detalhes do serviço
                  </span>

                  {/* Título, subtítulo e Descrição */}
                  <div className="mb-10 sm:mb-16 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                    <div className="flex flex-col items-start justify-center flex-1">
                      <h2 className="text-xl sm:text-3xl md:text-4xl text-left font-medium text-gray-900 leading-tight">
                        {selectedService?.titleFunction}
                      </h2>
                      <p className="mt-6 mb-2 text-base max-w-xl lg:text-lg text-left text-slate-500 font-Satoshi leading-relaxed text-balance">
                        {selectedService?.desc}
                      </p>
                      {selectedService?.time} <br />
                      {selectedService?.price}
                      {selectedService?.audience}
                    </div>

                    <div
                      className="bg-secundario mb-6 w-16 h-16 rounded-full shadow-sm font-semibold hover:brightness-105 flex items-center justify-center gap-1 ring-white ring-inset ring-2 ring-transparent transition-all duration-500"
                      role="button"
                      aria-label="Explorar mais no WhatsApp"
                    >
                      {selectedService?.icon}
                    </div>
                  </div>
                </div>
                <div className="py-8 bg-white transition-all duration-500">
                  <div
                    className={`mx-auto grid  ${
                      selectedService?.details.length === 4
                        ? "md:grid-cols-4"
                        : "md:grid-cols-5"
                    } gap-7 text-center`}
                  >
                    {selectedService?.details.map((item, idx) => (
                      <div
                        key={idx}
                        className="flex flex-col text-center items-center gap-1 transition-all duration-500"
                      >
                        <div
                          className="w-20 h-20 rounded-full mb-3 flex items-center justify-center transition-all duration-500"
                          style={{
                            backgroundColor:
                              idx === 0
                                ? "#F1EFFD"
                                : idx === 1
                                ? "#FEE7E7"
                                : idx === 2
                                ? "#FFF3E4"
                                : idx === 3
                                ? "#E6F4FF"
                                : idx === 4
                                ? "#E6FFFA"
                                : "#F0F9FF",
                          }}
                        >
                          <div className="text-3xl">{item.iconDetails}</div>
                        </div>
                        <ul className="text-lg font-semibold mb-2 text-gray-700">
                          <li
                            key={idx}
                            className="flex gap-1 items-center justify-center"
                          >
                            <span>{item.title}</span>
                          </li>
                        </ul>
                        <p>{item.text}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Título + descrição */}
                <div className="container mx-auto mt-6 py-10 flex flex-col items-center justify-center text-center">
                  <h2 className="text-base sm:text-2xl md:text-3xl font-bold text-gray-900">
                    {selectedService?.titleForm}
                  </h2>
                  <p className="mt-3 text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed text-slate-600">
                    {selectedService?.prerequisites}
                  </p>
                </div>

                <div className="text-left container mx-auto px-4 sm:px-6 lg:px-8 py-10">
                  <div>
                    <form
                      method="POST"
                      encType="multipart/form-data"
                      onSubmit={handleSubmit}
                      className="space-y-6 sm:space-y-10 px-4 sm:px-16 lg:px-20 transition-all duration-500"
                    >
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {/* Primeiro Nome e Último Nome */}
                        <div className="flex flex-col gap-1">
                          <label className="text-sm font-medium text-gray-700">
                            Nome Completo{" "}
                            <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            name="nomeCompleto"
                            value={nomeCompleto}
                            placeholder="Nome Completo"
                            onChange={(e) => setnomeCompleto(e.target.value)}
                            required
                            className="w-full border outline-none focus:border-secundario hover:border-secundario rounded-md px-4 py-2 transition duration-500"
                          />
                        </div>

                        {/* E-mail */}
                        <div className="flex flex-col gap-1">
                          <label className="text-sm font-medium text-gray-700">
                            E-mail <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="E-mail"
                            required
                            className="w-full rounded-md px-4 py-2 border outline-none focus:border-secundario hover:border-secundario transition duration-500"
                            title="Insira um e-mail válido"
                          />
                        </div>
                      </div>

                      {/* Mensagem */}
                      <div className="flex flex-col gap-1">
                        <label className="text-sm font-medium text-gray-700">
                          Mensagem <span className="text-red-500">*</span>
                        </label>
                        <textarea
                          placeholder={selectedService?.placeholder}
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          name="message"
                          rows="4"
                          required
                          className="w-full rounded-md px-4 py-2 border outline-none focus:border-secundario hover:border-secundario transition duration-500 resize-none"
                          aria-label="Mensagem"
                        ></textarea>
                      </div>

                      {/* Mensagem de Espera */}
                      {sending && (
                        <p
                          className="text-center text-gray-500"
                          role="status"
                          aria-live="polite"
                        >
                          A enviar mensagem, por favor aguarde...
                        </p>
                      )}

                      {/* Botão de Envio */}
                      <div className="flex flex-col items-center justify-center mt-6">
                        <button
                          type="submit"
                          className="w-fit bg-secundario text-white py-4 px-10 rounded-md transition-colors duration-500  hover:bg-secundario/90 focus:outline-none focus:ring-2 focus:ring-secundario focus:ring-opacity-50 shadow-md "
                          aria-label="Enviar mensagem"
                          disabled={sending}
                        >
                          Enviar mensagem
                        </button>
                        <small className="py-10 text-sm text-center">
                          🕓 Responderei em até 24h úteis. Preferes falar
                          direto? Usa o botão de WhatsApp.
                        </small>
                      </div>
                    </form>
                  </div>
                </div>
              </>
            )}
          </div>
        </GlobalContainer>
      </section>

      {/* CTA final */}
      <section
        className="bg-white border-t"
        data-track-section="services_final_cta"
      >
        <GlobalContainer>
          <div className="py-16 max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-medium text-gray-900">
              Pronto para crescer?
            </h2>
            <p className="mt-3 text-lg text-slate-700">
              Marca um diagnóstico gratuito. Saímos com um mini-plano e próximos
              passos claros.
            </p>
            <div className="mt-6">
              <a
                href="/conversar"
                className="inline-flex bg-primario text-white px-6 py-3 rounded-full font-semibold hover:bg-secundario transition"
                data-umami-event="cta_agendar_diagnostico"
                onClick={() =>
                  trackCtaClick("cta_agendar_diagnostico", { page: "services" })
                }
              >
                Agendar diagnóstico
              </a>
            </div>
          </div>
        </GlobalContainer>
      </section>
    </>
  );
}

export default Services;
