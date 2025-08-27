import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import GlobalContainer from "../../../utils/GlobalContainer";
import { trackCtaClick, trackSectionView } from "../../../utils/analytics";

function DoBlogAoCliente() {
  const title =
    "Do Blog ao Cliente: transforme conteúdo numa pipeline de vendas";
  const description =
    "Como artigos e posts se tornam leads reais quando são planeados com SEO, CTAs claros e um lead magnet irresistível.";
  const url = "https://lodexstudio.com/do-blog-ao-cliente";
  const imageJpg = "https://lodexstudio.com/images/blog/blog-banner-hero.jpg"; // JPG fallback
  const imageSvg =
    "https://lodexstudio.com/images/blog/blog-to-customer-cover.svg";

  useEffect(() => {
    const seen = new Set();
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.getAttribute("data-track-section");
          if (id && entry.isIntersecting && !seen.has(id)) {
            seen.add(id);
            trackSectionView(id, { page: "blog_do_blog_ao_cliente" });
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

  return (
    <>
      <Helmet>
        <title>{`${title} | LodeX Studio`}</title>
        <meta name="description" content={description} />
        <meta
          name="keywords"
          content="conteúdo, SEO, blog, geração de leads, call to action, lead magnet, funil, pipeline de vendas"
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
          content="Do Blog ao Cliente — transforme conteúdo numa pipeline de vendas"
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
        data-track-section="article_hero"
        role="main"
      >
        <GlobalContainer>
          <div className="flex items-center justify-center py-[7.6rem] md:py-[9.6rem]">
            <article
              className="w-full max-w-content mx-auto sm:px-6 md:px-8 lg:px-[18%]"
              aria-label="Do Blog ao Cliente — pipeline de vendas"
            >
              <header className="mb-8">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-light text-gray-900 leading-relaxed">
                  {title}
                </h1>
                <p className="mt-5 text-base md:text-lg lg:text-xl leading-relaxed text-slate-700 font-light">
                  Conteúdo que não vira negócio é só passatempo. Veja como
                  transformar artigos e posts em leads reais com SEO, CTAs e um
                  lead magnet que as pessoas querem.
                </p>
              </header>

              <hr className="my-10" />

              {/* 1) Estratégia: do tema ao objetivo */}
              <section aria-labelledby="estrategia" className="space-y-4 mt-10">
                <h2
                  id="estrategia"
                  className="text-2xl md:text-3xl font-light text-gray-900"
                >
                  1) Estratégia: cada peça de conteúdo precisa de um objetivo
                </h2>
                <p className="text-slate-700 leading-relaxed">
                  Defina o papel de cada artigo/post no funil: descoberta
                  (frio), consideração (morno) ou decisão (quente). O objetivo
                  dita o CTA e o lead magnet.
                </p>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-white border rounded-lg p-4">
                    <p className="text-sm font-semibold text-gray-900">
                      Topo (Descoberta)
                    </p>
                    <p className="text-sm text-slate-700 mt-1">
                      Educar e atrair. CTA: seguir/assinar. Magnet: checklist.
                    </p>
                  </div>
                  <div className="bg-white border rounded-lg p-4">
                    <p className="text-sm font-semibold text-gray-900">
                      Meio (Consideração)
                    </p>
                    <p className="text-sm text-slate-700 mt-1">
                      Comparar caminhos. CTA: descarregar guia. Magnet:
                      templates.
                    </p>
                  </div>
                  <div className="bg-white border rounded-lg p-4">
                    <p className="text-sm font-semibold text-gray-900">
                      Fundo (Decisão)
                    </p>
                    <p className="text-sm text-slate-700 mt-1">
                      Remover dúvidas. CTA: agendar conversa. Magnet: demo/caso.
                    </p>
                  </div>
                </div>
              </section>

              {/* 2) Mapa editorial orientado a palavras‑chave */}
              <section
                aria-labelledby="mapa-editorial"
                className="space-y-4 mt-10"
                data-track-section="article_mapa_editorial"
              >
                <h2
                  id="mapa-editorial"
                  className="text-2xl md:text-3xl font-light text-gray-900"
                >
                  2) Mapa editorial (SEO primeiro, depois criatividade)
                </h2>
                <p className="text-slate-700 leading-relaxed">
                  Liste 10–20 dúvidas reais dos seus clientes. Para cada uma,
                  associe 1 palavra‑chave principal, 2 secundárias, intenção de
                  busca e o CTA.
                </p>
                <div className="bg-gray-50 border rounded-lg p-4">
                  <p className="text-sm font-semibold text-gray-900 mb-1">
                    Modelo rápido
                  </p>
                  <pre className="whitespace-pre-wrap text-xs bg-white p-3 rounded border text-slate-700">{`TEMA | Palavra-chave | Intenção (informacional/navegacional/transacional) | CTA | Lead magnet | Link interno principal`}</pre>
                  <a
                    href="/templates/blog-pipeline-editorial-plan.csv"
                    className="inline-flex mt-3 text-sm text-primario underline"
                    data-umami-event="download_editorial_plan_csv"
                    onClick={() =>
                      trackCtaClick("download_editorial_plan_csv", {
                        page: "blog_do_blog_ao_cliente",
                      })
                    }
                    download
                  >
                    Descarregar CSV: Plano Editorial
                  </a>
                  <div className="mt-1">
                    <a
                      href="/templates/blog-pipeline-editorial-plan.tsv"
                      className="inline-flex text-xs text-primario/80 underline"
                      data-umami-event="download_editorial_plan_tsv"
                      onClick={() =>
                        trackCtaClick("download_editorial_plan_tsv", {
                          page: "blog_do_blog_ao_cliente",
                        })
                      }
                      download
                    >
                      Versão TSV
                    </a>
                  </div>
                  <p className="mt-2 text-[11px] text-slate-600">
                    Excel: duplo clique (CSV inclui "sep=,") ou Data &gt; From
                    Text/CSV &gt; UTF‑8; delimitador: vírgula (CSV) ou tabulação
                    (TSV).
                  </p>
                </div>
              </section>

              {/* 3) SEO on‑page essencial */}
              <section aria-labelledby="seo" className="space-y-4 mt-10">
                <h2
                  id="seo"
                  className="text-2xl md:text-3xl font-light text-gray-900"
                >
                  3) SEO on‑page essencial (sem complicar)
                </h2>
                <ul className="list-disc list-inside text-slate-700 space-y-2">
                  <li>Título com a palavra‑chave + benefício claro.</li>
                  <li>
                    Introdução que responde em 2–3 linhas “o que ganho com
                    isto?”.
                  </li>
                  <li>Subtítulos H2/H3 com variações semânticas.</li>
                  <li>Links internos para serviços/casos/FAQs relevantes.</li>
                  <li>Imagens com alt descritivo e tamanho otimizado.</li>
                  <li>Meta description de 150–160 caracteres convidativa.</li>
                </ul>
              </section>

              {/* 4) CTA: claro, único, consistente */}
              <section aria-labelledby="cta" className="space-y-4 mt-10">
                <h2
                  id="cta"
                  className="text-2xl md:text-3xl font-light text-gray-900"
                >
                  4) CTA: claro, único e consistente por peça
                </h2>
                <p className="text-slate-700 leading-relaxed">
                  Cada artigo tem um único próximo passo. Rotule igual em todo o
                  site para treinar o olhar do leitor.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white border rounded-lg p-4">
                    <p className="text-sm font-semibold text-gray-900">
                      Exemplos de CTA
                    </p>
                    <ul className="list-disc list-inside text-slate-700 text-sm space-y-1 mt-1">
                      <li>Descarregar checklist (PDF)</li>
                      <li>Receber 3 templates por email</li>
                      <li>Agendar conversa de 15 min</li>
                    </ul>
                  </div>
                  <div className="bg-white border rounded-lg p-4">
                    <p className="text-sm font-semibold text-gray-900">
                      Boas práticas
                    </p>
                    <ul className="list-disc list-inside text-slate-700 text-sm space-y-1 mt-1">
                      <li>Coloque 1 CTA primário no topo e no final.</li>
                      <li>Use rótulo igual no site e nas redes.</li>
                      <li>Mostre prova (número de downloads, feedback).</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* 5) Lead magnet: oferta que resolve algo em 10 minutos */}
              <section
                aria-labelledby="lead-magnet"
                className="space-y-4 mt-10"
                data-track-section="article_lead_magnet"
              >
                <h2
                  id="lead-magnet"
                  className="text-2xl md:text-3xl font-light text-gray-900"
                >
                  5) Lead magnet: algo que ajuda em 10 minutos
                </h2>
                <p className="text-slate-700 leading-relaxed">
                  Prometa uma micro‑transformação imediata. Menos “ebook de 50
                  páginas”, mais “checklist pronta + 3 modelos”.
                </p>
                <div className="bg-gray-50 border rounded-lg p-4">
                  <p className="text-sm font-semibold text-gray-900 mb-2">
                    Ideias de lead magnet
                  </p>
                  <ul className="list-disc list-inside text-slate-700 text-sm space-y-1">
                    <li>Checklist de SEO on‑page (1 página)</li>
                    <li>Modelos de CTAs e cabeçalhos</li>
                    <li>Planilha de plano editorial (CSV/Sheets)</li>
                  </ul>
                  <a
                    href="/templates/blog-cta-leadmagnet-ideas.csv"
                    className="inline-flex mt-3 text-sm text-primario underline"
                    data-umami-event="download_cta_leadmagnet_csv"
                    onClick={() =>
                      trackCtaClick("download_cta_leadmagnet_csv", {
                        page: "blog_do_blog_ao_cliente",
                      })
                    }
                    download
                  >
                    Descarregar CSV: Ideias de CTA e Lead Magnet
                  </a>
                  <div className="mt-1">
                    <a
                      href="/templates/blog-cta-leadmagnet-ideas.tsv"
                      className="inline-flex text-xs text-primario/80 underline"
                      data-umami-event="download_cta_leadmagnet_tsv"
                      onClick={() =>
                        trackCtaClick("download_cta_leadmagnet_tsv", {
                          page: "blog_do_blog_ao_cliente",
                        })
                      }
                      download
                    >
                      Versão TSV
                    </a>
                  </div>
                  <p className="mt-2 text-[11px] text-slate-600">
                    Excel: duplo clique (CSV inclui "sep=,") ou Data &gt; From
                    Text/CSV &gt; UTF‑8; delimitador: vírgula (CSV) ou tabulação
                    (TSV).
                  </p>
                </div>
              </section>

              {/* 6) Distribuição: 1 artigo = 7 peças sociais */}
              <section
                aria-labelledby="distribuicao"
                className="space-y-4 mt-10"
              >
                <h2
                  id="distribuicao"
                  className="text-2xl md:text-3xl font-light text-gray-900"
                >
                  6) Distribuição: de 1 artigo para 7 posts
                </h2>
                <ul className="list-disc list-inside text-slate-700 space-y-2">
                  <li>Resumo em carrossel (5 slides) com CTA para ler.</li>
                  <li>Reel de 30s com 3 pontos do artigo.</li>
                  <li>Thread com checklist e link para o magnet.</li>
                  <li>Story com pergunta de qualificação e sticker.</li>
                </ul>
              </section>

              {/* 7) Medir: sheet simples e 3 métricas */}
              <section aria-labelledby="medir" className="space-y-4 mt-10">
                <h2
                  id="medir"
                  className="text-2xl md:text-3xl font-light text-gray-900"
                >
                  7) Medir: use 3 métricas para decidir próximos passos
                </h2>
                <ul className="list-disc list-inside text-slate-700 space-y-2">
                  <li>CTR do CTA (% de cliques no botão/links)</li>
                  <li>Taxa de conversão do lead magnet (visitas → emails)</li>
                  <li>Leads qualificados gerados por artigo</li>
                </ul>
                <p className="text-slate-700">
                  Reveja semanalmente e promova o que converte mais.
                </p>
              </section>

              <hr className="my-10" />

              {/* Plano de 7 dias */}
              <section
                aria-labelledby="plano-7-dias"
                className="space-y-4 mt-10"
              >
                <h2
                  id="plano-7-dias"
                  className="text-2xl md:text-3xl font-light text-gray-900"
                >
                  Plano de 7 dias (executável)
                </h2>
                <ol className="list-decimal list-inside text-slate-700 space-y-2">
                  <li>Liste 10 dúvidas reais de clientes.</li>
                  <li>Monte o CSV do plano editorial e escolha 1 tema.</li>
                  <li>Escreva o artigo com SEO on‑page.</li>
                  <li>Crie 1 lead magnet simples (checklist + 3 modelos).</li>
                  <li>Publique e adicione 1 CTA no topo e no final.</li>
                  <li>Repurpose em 3 posts sociais com o mesmo CTA.</li>
                  <li>Messa CTR/Conversões e itere o título/CTA.</li>
                </ol>
              </section>

              <hr className="my-10" />

              {/* CTA final */}
              <section className="bg-gray-50 border rounded-xl p-6">
                <h3 className="text-lg md:text-xl font-semibold text-gray-900">
                  Quer transformar o seu blog em clientes?
                </h3>
                <p className="mt-2 text-slate-700">
                  A LodeX Studio planeia o seu calendário editorial, cria o lead
                  magnet e implementa os CTAs de conversão.
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

export default DoBlogAoCliente;
