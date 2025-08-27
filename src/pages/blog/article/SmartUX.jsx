import React from "react";
import { Helmet } from "react-helmet";
import GlobalContainer from "../../../utils/GlobalContainer";

function SmartUX() {
  const title =
    "Smart UX: 5 microdetalhes que aumentam a confiança no seu website";
  const description =
    "Exemplos práticos: microcopies, estados de loading, CTAs claros, formulários simples e FAQs reais para transmitir confiança e converter mais.";
  const url = "https://lodexstudio.com/smart-ux";
  const imageJpg = "https://lodexstudio.com/images/blog/blog-banner-hero.jpg"; // JPG fallback
  const imageSvg = "https://lodexstudio.com/images/blog/smart-ux-cover.svg";

  return (
    <>
      <Helmet>
        <title>{`${title} | LodeX Studio`}</title>
        <meta name="description" content={description} />
        <meta
          name="keywords"
          content="ux, microcopy, microtextos, estados de carregamento, skeleton, call to action, cta, formulários simples, faqs, confiança"
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
          content="Smart UX — microdetalhes que geram confiança"
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
              aria-label="Smart UX — microdetalhes que geram confiança"
            >
              <header className="mb-8">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-light text-gray-900 leading-relaxed">
                  {title}
                </h1>
                <p className="mt-5 text-base md:text-lg lg:text-xl leading-relaxed text-slate-700 font-light">
                  Pequenas decisões de UX podem aumentar (ou destruir) a
                  confiança. Aqui estão 5 microdetalhes com exemplos práticos
                  para aplicar hoje.
                </p>
              </header>

              <hr className="my-10" />

              {/* 1. Microcopies */}
              <section
                aria-labelledby="microcopies"
                className="space-y-4 mt-10"
              >
                <h2
                  id="microcopies"
                  className="text-2xl md:text-3xl font-light text-gray-900"
                >
                  1) Microcopies que falam com pessoas
                </h2>
                <p className="text-slate-700 leading-relaxed">
                  Microtextos em botões, erros e estados vazios reduzem fricção.
                  Troque jargões por linguagem clara e humana.
                </p>
                <ul className="list-disc list-inside text-slate-700 space-y-2">
                  <li>
                    Formulário: “Submeter” → “Pedir contacto” / “Pedir
                    orçamento”.
                  </li>
                  <li>
                    Erro: “Campo inválido” → “Ops! Este email parece errado.
                    Ex.: nome@empresa.pt”.
                  </li>
                  <li>
                    Estado vazio: “Sem dados” → “Ainda não há pedidos. Comece
                    por criar um novo.”
                  </li>
                </ul>
                <div className="bg-gray-50 border rounded-lg p-4">
                  <p className="text-sm text-slate-700">
                    Dica: valide os microtextos lendo em voz alta. Se soar
                    estranho, simplifique.
                  </p>
                </div>
              </section>

              {/* 2. Loading states */}
              <section aria-labelledby="loading" className="space-y-4 mt-10">
                <h2
                  id="loading"
                  className="text-2xl md:text-3xl font-light text-gray-900"
                >
                  2) Estados de loading com feedback real
                </h2>
                <p className="text-slate-700 leading-relaxed">
                  Mostre progresso: skeletons, spinners com mensagem e passos.
                  Evite telas “mortas”.
                </p>
                <ul className="list-disc list-inside text-slate-700 space-y-2">
                  <li>
                    Skeleton para cartões e listas (aparece em &lt;300ms).
                  </li>
                  <li>Spinner com mensagem: “A processar o seu pedido…”.</li>
                  <li>
                    Accões desabilitadas enquanto envia (evita duplo clique).
                  </li>
                </ul>
                <div className="bg-gray-50 border rounded-lg p-4">
                  <p className="text-sm text-slate-700">
                    Dica: se algo demora &gt; 2s, mostre uma dica ou ação
                    alternativa (ex.: “Pode continuar a navegar”).
                  </p>
                </div>
              </section>

              {/* 3. Clear CTAs */}
              <section aria-labelledby="ctas" className="space-y-4 mt-10">
                <h2
                  id="ctas"
                  className="text-2xl md:text-3xl font-light text-gray-900"
                >
                  3) CTAs claros e orientados a resultado
                </h2>
                <p className="text-slate-700 leading-relaxed">
                  Botões com verbos fortes e benefício. Um primário por página,
                  secundários discretos.
                </p>
                <ul className="list-disc list-inside text-slate-700 space-y-2">
                  <li>“Falar com um especialista” &gt; “Contactar”.</li>
                  <li>“Ver preços e planos” &gt; “Saber mais”.</li>
                  <li>
                    Coloque o primário onde a decisão acontece (acima da dobra,
                    fim de secções).
                  </li>
                </ul>
                <div className="bg-gray-50 border rounded-lg p-4">
                  <p className="text-sm text-slate-700">
                    Dica: mantenha rótulos consistentes; evite 3 CTAs competindo
                    entre si.
                  </p>
                </div>
              </section>

              {/* 4. Simple forms */}
              <section aria-labelledby="forms" className="space-y-4 mt-10">
                <h2
                  id="forms"
                  className="text-2xl md:text-3xl font-light text-gray-900"
                >
                  4) Formulários simples que não assustam
                </h2>
                <p className="text-slate-700 leading-relaxed">
                  Menos campos, validação imediata, autofill e privacidade
                  clara. O objetivo é reduzir o esforço.
                </p>
                <ul className="list-disc list-inside text-slate-700 space-y-2">
                  <li>
                    3–5 campos no primeiro contacto (nome, email,
                    mensagem/objetivo).
                  </li>
                  <li>
                    Validação inline com mensagens úteis (ex.: formato do
                    email).
                  </li>
                  <li>
                    Etiqueta visível + placeholder opcional; não confie só no
                    placeholder.
                  </li>
                  <li>
                    Nota de privacidade curta junto ao botão (“Nunca partilhamos
                    o seu email”).
                  </li>
                </ul>
              </section>

              {/* 5. Real FAQs */}
              <section aria-labelledby="faqs" className="space-y-4 mt-10">
                <h2
                  id="faqs"
                  className="text-2xl md:text-3xl font-light text-gray-900"
                >
                  5) FAQs reais, baseadas em perguntas de clientes
                </h2>
                <p className="text-slate-700 leading-relaxed">
                  Não invente dúvidas. Use emails, DM e chamadas para criar
                  respostas claras e objetivas.
                </p>
                <ul className="list-disc list-inside text-slate-700 space-y-2">
                  <li>Como funciona o processo? Quanto tempo demora?</li>
                  <li>O que está incluído? Existem custos adicionais?</li>
                  <li>Como é o pagamento e as garantias?</li>
                  <li>Como tratam a privacidade de dados?</li>
                </ul>
                <div className="bg-gray-50 border rounded-lg p-4">
                  <p className="text-sm text-slate-700">
                    Dica: ligue FAQs a páginas de políticas e termos quando
                    fizer sentido.
                  </p>
                </div>
              </section>

              <hr className="my-10" />

              {/* CTA final */}
              <section className="bg-gray-50 border rounded-xl p-6">
                <h3 className="text-lg md:text-xl font-semibold text-gray-900">
                  Quer melhorar a confiança do seu website?
                </h3>
                <p className="mt-2 text-slate-700">
                  A LodeX Studio implementa estes microdetalhes de UX no seu
                  site para reduzir fricção e aumentar conversões.
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

export default SmartUX;
