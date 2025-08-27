import React from "react";
import { Helmet } from "react-helmet";
import GlobalContainer from "../../../utils/GlobalContainer";

function PiramideDigital() {
  const title =
    "Pirâmide Digital: Como estruturar o seu negócio online sem se perder em ferramentas";
  const description =
    "O método LodeX (a Pirâmide Digital) mostra como organizar o seu negócio online em 3 níveis: Base (Identidade + Website), Meio (Conteúdo + Confiança) e Topo (Crescimento + Automação).";
  const url = "https://lodexstudio.com/piramide-digital";
  const imagePng = "https://lodexstudio.com/images/blog/blog-banner-hero.jpg"; // JPG fallback
  const imageSvg =
    "https://lodexstudio.com/images/blog/piramide-digital-cover.svg";

  return (
    <>
      <Helmet>
        <title>{`${title} | LodeX Studio`}</title>
        <meta name="description" content={description} />
        <meta
          name="keywords"
          content="pirâmide digital, método lodex, estratégia digital, identidade, website, conteúdo, confiança, automação, crescimento"
        />
        {/* Open Graph */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={url} />
        <meta property="og:image" content={imagePng} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta
          property="og:image:alt"
          content="Pirâmide Digital — método LodeX"
        />
        <meta property="og:image" content={imageSvg} />
        <meta property="og:image:type" content="image/svg+xml" />
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={imagePng} />
        {/* JSON-LD */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: title,
            description,
            image: [imagePng, imageSvg],
            mainEntityOfPage: url,
            author: { "@type": "Person", name: "Lodney Santos" },
            publisher: {
              "@type": "Organization",
              name: "LodeX Studio",
              url: "https://lodexstudio.com",
            },
            datePublished: new Date().toISOString().split("T")[0],
          })}
        </script>
      </Helmet>

      <a
        href="#conteudo-principal"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 bg-secundario text-white px-4 py-2 rounded-md"
      >
        Ir para conteúdo principal
      </a>

      <main
        id="conteudo-principal"
        className="min-h-[95vh] border-b shadow-md"
        role="main"
      >
        <GlobalContainer>
          <div className="flex items-center justify-center py-[7.6rem] md:py-[9.6rem]">
            <article
              className="w-full max-w-content mx-auto sm:px-6 md:px-8 lg:px-[18%]"
              aria-label="Pirâmide Digital — método LodeX"
            >
              <header className="mb-8">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-light text-gray-900 leading-relaxed">
                  {title}
                </h1>
                <p className="mt-5 text-base md:text-lg lg:text-xl leading-relaxed text-slate-700 font-light">
                  Em vez de se perder em ferramentas, o método LodeX (a Pirâmide
                  Digital) mostra uma ordem clara para construir um sistema
                  online que gera resultado: começar pela base (identidade e
                  site), consolidar o meio (conteúdo e confiança) e só então
                  acelerar no topo (crescimento e automação).
                </p>
              </header>

              <hr className="my-10" />

              <section aria-labelledby="indice" className="mb-10">
                <h2
                  id="indice"
                  className="text-xl md:text-2xl font-semibold text-gray-900 mb-4"
                >
                  A Pirâmide LodeX (visão geral)
                </h2>
                <ol className="list-decimal list-inside space-y-2 text-slate-700">
                  <li>
                    <strong>Base:</strong> Identidade + Website
                  </li>
                  <li>
                    <strong>Meio:</strong> Conteúdo + Confiança
                  </li>
                  <li>
                    <strong>Topo:</strong> Crescimento + Automação
                  </li>
                </ol>
              </section>

              <section aria-labelledby="base" className="space-y-4 mt-10">
                <h2
                  id="base"
                  className="text-2xl md:text-3xl font-light text-gray-900"
                >
                  Base — Identidade + Website
                </h2>
                <p className="text-slate-700 leading-relaxed">
                  Sem uma base sólida, tudo o resto é frágil. Aqui definimos
                  quem você é, para quem fala e para onde direciona o tráfego.
                </p>
                <ul className="list-disc list-inside space-y-2 text-slate-700">
                  <li>
                    <strong>Identidade clara:</strong> Proposta de valor,
                    posicionamento, tom de voz, promessa e diferenciais.
                  </li>
                  <li>
                    <strong>Website focado em conversão:</strong> Páginas
                    essenciais (Home, Serviços, Sobre, Provas, Contacto),
                    velocidade, SEO técnico e chamadas diretas para ação (CTA).
                  </li>
                  <li>
                    <strong>Rastreio e base de dados:</strong> Analytics
                    configurado, pixels necessários e captação de emails (lead
                    magnet simples).
                  </li>
                </ul>
                <p className="text-slate-700 leading-relaxed">
                  Resultado esperado: um "hub" central confiável, preparado para
                  receber tráfego e transformar visitas em contactos.
                </p>
              </section>

              <section aria-labelledby="meio" className="space-y-4 mt-10">
                <h2
                  id="meio"
                  className="text-2xl md:text-3xl font-light text-gray-900"
                >
                  Meio — Conteúdo + Confiança
                </h2>
                <p className="text-slate-700 leading-relaxed">
                  Com a casa pronta, construímos autoridade. O objetivo é
                  ensinar, provar e aproximar.
                </p>
                <ul className="list-disc list-inside space-y-2 text-slate-700">
                  <li>
                    <strong>Conteúdo que resolve:</strong> Tutoriais, guias
                    práticos, antes/depois, estudos de caso.
                  </li>
                  <li>
                    <strong>Prova social real:</strong> Depoimentos, métricas
                    (ex.: +200% leads), screenshots e bastidores.
                  </li>
                  <li>
                    <strong>Relacionamento:</strong> Newsletter simples (dicas
                    semanais), respostas rápidas e transparência.
                  </li>
                </ul>
                <p className="text-slate-700 leading-relaxed">
                  Resultado esperado: confiança. As pessoas começam a ver LodeX
                  como solução, não apenas mais um serviço.
                </p>
              </section>

              <section aria-labelledby="topo" className="space-y-4 mt-10">
                <h2
                  id="topo"
                  className="text-2xl md:text-3xl font-light text-gray-900"
                >
                  Topo — Crescimento + Automação
                </h2>
                <p className="text-slate-700 leading-relaxed">
                  Quando base e meio estão firmes, aí sim vale escalar com
                  eficiência.
                </p>
                <ul className="list-disc list-inside space-y-2 text-slate-700">
                  <li>
                    <strong>Distribuição e tráfego:</strong> SEO contínuo,
                    parcerias, conteúdo multi-plataforma e, quando fizer
                    sentido, campanhas pagas.
                  </li>
                  <li>
                    <strong>Otimização contínua:</strong> A/B tests simples
                    (títulos, CTAs), heatmaps, métricas de conversão.
                  </li>
                  <li>
                    <strong>Automação inteligente:</strong> Fluxos de email,
                    respostas iniciais, integração com CRM e organização de
                    leads.
                  </li>
                </ul>
                <p className="text-slate-700 leading-relaxed">
                  Resultado esperado: previsibilidade. Um funil que aprende com
                  dados e escala sem desperdiçar energia.
                </p>
              </section>

              <hr className="my-10" />

              <section
                aria-labelledby="prisao-das-ferramentas"
                className="space-y-4"
              >
                <h2
                  id="prisao-das-ferramentas"
                  className="text-2xl md:text-3xl font-light text-gray-900"
                >
                  Evite a prisão das ferramentas
                </h2>
                <p className="text-slate-700 leading-relaxed">
                  Ferramentas mudam. O método permanece. A Pirâmide Digital
                  organiza as decisões para que cada ferramenta sirva a
                  estratégia — e não o contrário.
                </p>
              </section>

              <section className="bg-gray-50 border rounded-xl p-6 mt-10">
                <h3 className="text-lg md:text-xl font-semibold text-gray-900">
                  Quer aplicar a Pirâmide LodeX no seu negócio?
                </h3>
                <p className="mt-2 text-slate-700">
                  Começamos pela base certa, implementamos conteúdo que gera
                  confiança e ativamos crescimento com automação simples.
                </p>
                <div className="mt-4 flex flex-wrap gap-3">
                  <a
                    href="/conversar"
                    className="inline-flex bg-primario text-white px-5 py-3 rounded-full font-semibold hover:bg-secundario transition"
                  >
                    Agendar conversa de 15 min
                  </a>
                  <a
                    href="https://instagram.com/lodex.studio"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex bg-white border text-primario px-5 py-3 rounded-full font-semibold hover:bg-gray-100 transition"
                  >
                    Seguir no Instagram
                  </a>
                </div>
              </section>
            </article>
          </div>
        </GlobalContainer>
      </main>
    </>
  );
}

export default PiramideDigital;
