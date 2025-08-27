import React from "react";
import { Helmet } from "react-helmet";
import GlobalContainer from "../../../utils/GlobalContainer";

function BrandingIdentidade() {
  const title =
    "Branding não é só um logótipo: como criar uma identidade que transmite confiança online";
  const description =
    "Entenda a diferença entre estética e estratégia, e como a consistência torna pequenas marcas grandes aos olhos do público.";
  const url = "https://lodexstudio.com/branding-identidade";
  const imageJpg = "https://lodexstudio.com/images/blog/blog-banner-hero.jpg"; // JPG fallback
  const imageSvg =
    "https://lodexstudio.com/images/blog/branding-identidade-cover.svg";

  return (
    <>
      <Helmet>
        <title>{`${title} | LodeX Studio`}</title>
        <meta name="description" content={description} />
        <meta
          name="keywords"
          content="branding, identidade visual, estratégia de marca, confiança online, consistência, tom de voz, sistema visual"
        />
        {/* Open Graph */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={url} />
        <meta property="og:image" content={imageJpg} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta
          property="og:image:alt"
          content="Branding não é só um logótipo — identidade que gera confiança"
        />
        <meta property="og:image" content={imageSvg} />
        <meta property="og:image:type" content="image/svg+xml" />
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={imageJpg} />
        {/* JSON-LD */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: title,
            description,
            image: [imageJpg, imageSvg],
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
              aria-label="Branding — identidade que gera confiança"
            >
              <header className="mb-8">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-light text-gray-900 leading-relaxed">
                  {title}
                </h1>
                <p className="mt-5 text-base md:text-lg lg:text-xl leading-relaxed text-slate-700 font-light">
                  Branding não é um ficheiro .png. É uma promessa cumprida com
                  consistência: na mensagem, no visual e na experiência. É isso
                  que faz marcas pequenas parecerem maiores.
                </p>
              </header>

              <hr className="my-10" />

              {/* Estética vs Estratégia */}
              <section
                aria-labelledby="estetica-estrategia"
                className="space-y-4 mt-10"
              >
                <h2
                  id="estetica-estrategia"
                  className="text-2xl md:text-3xl font-light text-gray-900"
                >
                  Estética × Estratégia: qual a diferença?
                </h2>
                <p className="text-slate-700 leading-relaxed">
                  Estética é como parece. Estratégia é o porquê e para quem. Um
                  logótipo bonito ajuda, mas sem posicionamento, proposta de
                  valor e tom de voz, a marca não cria confiança.
                </p>
                <ul className="list-disc list-inside text-slate-700 space-y-2">
                  <li>
                    <strong>Estética:</strong> cores, tipografia, layout,
                    ícones.
                  </li>
                  <li>
                    <strong>Estratégia:</strong> quem servimos, promessa
                    central, dores que resolvemos, prova.
                  </li>
                  <li>
                    <strong>Resultado:</strong> confiança vem quando a estética
                    reforça a estratégia de forma consistente.
                  </li>
                </ul>
              </section>

              {/* Microexemplos: Estética vs Estratégia */}
              <section
                aria-labelledby="microexemplos-estetica-estrategia"
                className="mt-6"
              >
                <h3
                  id="microexemplos-estetica-estrategia"
                  className="text-lg md:text-xl font-semibold text-gray-900 mb-3"
                >
                  Antes/Depois (tornar a estratégia visível)
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 border rounded-lg p-4">
                    <p className="text-xs uppercase tracking-wide text-gray-500 mb-2">
                      Antes
                    </p>
                    <ul className="list-disc list-inside text-slate-700 space-y-1">
                      <li>Promessa: “Fazemos websites e design”.</li>
                      <li>Sobre: “Somos apaixonados por design”.</li>
                      <li>CTA: “Saber mais”.</li>
                    </ul>
                  </div>
                  <div className="bg-white border rounded-lg p-4">
                    <p className="text-xs uppercase tracking-wide text-gray-500 mb-2">
                      Depois
                    </p>
                    <ul className="list-disc list-inside text-slate-700 space-y-1">
                      <li>
                        Promessa: “Website rápido que gera contactos em 14
                        dias”.
                      </li>
                      <li>
                        Sobre: “Resultados provados: +120% leads em 60 dias (3
                        casos)”.
                      </li>
                      <li>
                        CTA: “Falar com um especialista” &gt; “Saber mais”.
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Pilares de identidade */}
              <section aria-labelledby="pilares" className="space-y-4 mt-10">
                <h2
                  id="pilares"
                  className="text-2xl md:text-3xl font-light text-gray-900"
                >
                  Os 5 pilares de uma identidade que transmite confiança
                </h2>
                <ol className="list-decimal list-inside text-slate-700 space-y-2">
                  <li>
                    <strong>Mensagem:</strong> promessa clara e orientada a
                    resultados.
                  </li>
                  <li>
                    <strong>Tom de voz:</strong> humano, consistente e adequado
                    ao público.
                  </li>
                  <li>
                    <strong>Sistema visual:</strong> logótipo, cores, tipos,
                    espaçamentos e componentes.
                  </li>
                  <li>
                    <strong>Consistência:</strong> o mesmo padrão em site,
                    redes, emails e propostas.
                  </li>
                  <li>
                    <strong>Experiência:</strong> rapidez, clareza, respostas e
                    pós-venda.
                  </li>
                </ol>
              </section>

              {/* Microexemplos: Pequenas marcas consistentes */}
              <section
                aria-labelledby="microexemplos-exemplos"
                className="mt-6"
              >
                <h3
                  id="microexemplos-exemplos"
                  className="text-lg md:text-xl font-semibold text-gray-900 mb-3"
                >
                  Antes/Depois (consistência que aumenta a percepção)
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 border rounded-lg p-4">
                    <p className="text-xs uppercase tracking-wide text-gray-500 mb-2">
                      Antes
                    </p>
                    <ul className="list-disc list-inside text-slate-700 space-y-1">
                      <li>Fonte diferente em cada capa de post.</li>
                      <li>3 tons de azul no mesmo site.</li>
                      <li>CTA muda: “Saber mais”, “Ver mais”, “Contactar”.</li>
                    </ul>
                  </div>
                  <div className="bg-white border rounded-lg p-4">
                    <p className="text-xs uppercase tracking-wide text-gray-500 mb-2">
                      Depois
                    </p>
                    <ul className="list-disc list-inside text-slate-700 space-y-1">
                      <li>
                        Pack de templates com 1 tipografia e grelha fixas.
                      </li>
                      <li>
                        Paleta documentada: Primário (#004AAD), Secundário,
                        Neutros.
                      </li>
                      <li>
                        CTA principal padrão: “Agendar conversa de 15 min”.
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Pequenas marcas que parecem grandes */}
              <section aria-labelledby="exemplos" className="space-y-4 mt-10">
                <h2
                  id="exemplos"
                  className="text-2xl md:text-3xl font-light text-gray-900"
                >
                  Pequenas marcas que parecem grandes (por serem consistentes)
                </h2>
                <ul className="list-disc list-inside text-slate-700 space-y-2">
                  <li>
                    <strong>Oficina local</strong> com site rápido, fotos reais,
                    preços claros e o mesmo tom no WhatsApp — parece uma rede.
                  </li>
                  <li>
                    <strong>Consultoria de 1 pessoa</strong> com guias no blog,
                    casos com números, templates visuais iguais — transmite
                    autoridade.
                  </li>
                  <li>
                    <strong>Marca de produtos artesanais</strong> com embalagens
                    simples, cores consistentes e emails pós-compra — parece uma
                    D2C consolidada.
                  </li>
                </ul>
              </section>

              {/* Microexemplos: Sistema visual na prática */}
              <section
                aria-labelledby="microexemplos-sistema-visual"
                className="mt-6"
              >
                <h3
                  id="microexemplos-sistema-visual"
                  className="text-lg md:text-xl font-semibold text-gray-900 mb-3"
                >
                  Antes/Depois (componentes e decisões visuais)
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 border rounded-lg p-4">
                    <p className="text-xs uppercase tracking-wide text-gray-500 mb-2">
                      Antes
                    </p>
                    <ul className="list-disc list-inside text-slate-700 space-y-1">
                      <li>6 estilos diferentes de botão no site.</li>
                      <li>Cards com espaçamentos aleatórios.</li>
                      <li>Formulários sem validação visível.</li>
                    </ul>
                  </div>
                  <div className="bg-white border rounded-lg p-4">
                    <p className="text-xs uppercase tracking-wide text-gray-500 mb-2">
                      Depois
                    </p>
                    <ul className="list-disc list-inside text-slate-700 space-y-1">
                      <li>
                        1 componente “Button” com variantes (primário,
                        secundário, ghost).
                      </li>
                      <li>
                        Tokens de espaço (4, 8, 12, 16…) aplicados aos cards.
                      </li>
                      <li>Validação inline com mensagens claras (PT‑PT).</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Sistema visual na prática */}
              <section
                aria-labelledby="sistema-visual"
                className="space-y-4 mt-10"
              >
                <h2
                  id="sistema-visual"
                  className="text-2xl md:text-3xl font-light text-gray-900"
                >
                  Sistema visual na prática (o mínimo viável)
                </h2>
                <ul className="list-disc list-inside text-slate-700 space-y-2">
                  <li>
                    Versões do logótipo (clara/escura, horizontal/quadrada).
                  </li>
                  <li>Paleta com 1 cor primária, 1 secundária e 2 neutras.</li>
                  <li>
                    2 tipografias (títulos e textos) e grelha de espaçamentos.
                  </li>
                  <li>Componentes base: botão, cartão, alerta, formulário.</li>
                  <li>
                    Kits para redes (story/post), assinatura de email e capa de
                    proposta.
                  </li>
                </ul>
              </section>

              {/* Checklist */}
              <section aria-labelledby="checklist" className="space-y-4 mt-10">
                <h2
                  id="checklist"
                  className="text-2xl md:text-3xl font-light text-gray-900"
                >
                  Checklist de consistência (aplique esta semana)
                </h2>
                <ol className="list-decimal list-inside text-slate-700 space-y-2">
                  <li>
                    Defina uma frase de promessa e use em todos os canais.
                  </li>
                  <li>Crie 3 CTAs padrão e mantenha os rótulos iguais.</li>
                  <li>
                    Escolha cores e tipos — documente num ficheiro simples.
                  </li>
                  <li>
                    Alinhe o tom (formalidade, emojis, saudação e despedida).
                  </li>
                  <li>
                    Padronize 3 componentes no site: botão, card e formulário.
                  </li>
                </ol>
              </section>

              {/* Erros comuns */}
              <section aria-labelledby="erros" className="space-y-4 mt-10">
                <h2
                  id="erros"
                  className="text-2xl md:text-3xl font-light text-gray-900"
                >
                  Erros comuns que sabotam a confiança
                </h2>
                <ul className="list-disc list-inside text-slate-700 space-y-2">
                  <li>Mudar de estilo a cada post ou página.</li>
                  <li>CTAs confusos (10 opções, nenhuma clara).</li>
                  <li>Prova social vaga (sem números, sem contexto real).</li>
                  <li>Políticas e termos escondidos ou desatualizados.</li>
                </ul>
              </section>

              {/* Como começar */}
              <section
                aria-labelledby="como-comecar"
                className="space-y-4 mt-10"
              >
                <h2
                  id="como-comecar"
                  className="text-2xl md:text-3xl font-light text-gray-900"
                >
                  Como começar agora
                </h2>
                <ol className="list-decimal list-inside text-slate-700 space-y-2">
                  <li>Escreva sua promessa em 1 linha e mostre na Home.</li>
                  <li>
                    Defina 1 cor primária e 1 secundária; aplique nos botões.
                  </li>
                  <li>Escolha 1 fonte para títulos e 1 para textos no site.</li>
                  <li>
                    Padronize o CTA principal (ex.: “Falar com um
                    especialista”).
                  </li>
                  <li>Publique 1 caso com números e 1 FAQ real de clientes.</li>
                </ol>
              </section>

              <hr className="my-10" />

              {/* CTA final */}
              <section className="bg-gray-50 border rounded-xl p-6">
                <h3 className="text-lg md:text-xl font-semibold text-gray-900">
                  Precisa de uma identidade que gere confiança?
                </h3>
                <p className="mt-2 text-slate-700">
                  A LodeX Studio ajuda a transformar a sua marca em um sistema
                  consistente: mensagem, visual e experiência.
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

export default BrandingIdentidade;
