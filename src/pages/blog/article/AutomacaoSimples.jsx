import React from "react";
import { Helmet } from "react-helmet";
import GlobalContainer from "../../../utils/GlobalContainer";

function AutomacaoSimples() {
  const title =
    "Automação Simples: como poupar tempo com no‑code e IA no seu dia a dia";
  const description =
    "Zapier/Make + IA: responder leads automaticamente, etiquetar pedidos e gerar relatórios simples — sem programar.";
  const url = "https://lodexstudio.com/automacao-simples";
  const imageJpg = "https://lodexstudio.com/images/blog/blog-banner-hero.jpg"; // JPG fallback
  const imageSvg =
    "https://lodexstudio.com/images/blog/automacao-simples-cover.svg";

  return (
    <>
      <Helmet>
        <title>{`${title} | LodeX Studio`}</title>
        <meta name="description" content={description} />
        <meta
          name="keywords"
          content="automação, no-code, zapier, make, integromat, inteligência artificial, IA, leads, etiquetas, relatórios, produtividade"
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
          content="Automação Simples — no‑code e IA"
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
              aria-label="Automação Simples — no‑code e IA"
            >
              <header className="mb-8">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-light text-gray-900 leading-relaxed">
                  {title}
                </h1>
                <p className="mt-5 text-base md:text-lg lg:text-xl leading-relaxed text-slate-700 font-light">
                  Automatize tarefas repetitivas com no‑code e IA. Veja como
                  responder leads, etiquetar pedidos e gerar relatórios — em
                  minutos, não meses.
                </p>
              </header>

              <hr className="my-10" />

              {/* 1) Responder leads automaticamente */}
              <section aria-labelledby="leads" className="space-y-4 mt-10">
                <h2
                  id="leads"
                  className="text-2xl md:text-3xl font-light text-gray-900"
                >
                  1) Responder leads automaticamente (com contexto)
                </h2>
                <p className="text-slate-700 leading-relaxed">
                  Use formulário/site/WhatsApp como gatilho. Envie os dados para
                  IA criar um rascunho personalizado e responder com próximos
                  passos.
                </p>
                <ol className="list-decimal list-inside text-slate-700 space-y-2">
                  <li>
                    Trigger: novo lead no formulário (Webflow/Typeform/Sheets).
                  </li>
                  <li>
                    Step IA: gerar resposta em PT‑PT com tom da marca e resumo
                    do pedido.
                  </li>
                  <li>
                    Ação: enviar email/WhatsApp com CTA para “Agendar conversa
                    de 15 min”.
                  </li>
                </ol>
                <div className="bg-gray-50 border rounded-lg p-4">
                  <p className="text-sm text-slate-700">
                    Prompt sugerido: “Atue como assistente da marca LodeX.
                    Escreva resposta cordial e objetiva para este lead, inclua 2
                    perguntas de qualificação e um CTA. Dados: [nome],
                    [empresa], [pedido]”.
                  </p>
                </div>
                {/* Template: Zapier (resposta a leads) */}
                <div className="bg-white border rounded-lg p-4">
                  <p className="text-sm font-semibold text-gray-900 mb-2">
                    Template (Zapier): Responder leads
                  </p>
                  <ol className="list-decimal list-inside text-slate-700 space-y-1">
                    <li>
                      Trigger: New form submission (Typeform/Webflow/Sheets).
                    </li>
                    <li>
                      Action: AI Prompt (OpenAI/ChatGPT) — gerar resposta
                      personalizada.
                    </li>
                    <li>
                      Action: Gmail/WhatsApp API — enviar a mensagem com CTA.
                    </li>
                    <li>
                      Action: Google Sheets — registar no separador “Logs”.
                    </li>
                  </ol>
                  <pre className="mt-3 whitespace-pre-wrap text-xs bg-gray-50 p-3 rounded border text-slate-700">{`PROMPT
Atue como assistente da marca LodeX. Em PT-PT, escreva uma resposta cordial e objetiva para este lead.
Inclua: 1) resumo do pedido 2) 2 perguntas de qualificação 3) CTA para "Agendar conversa de 15 min".

Dados do lead:
- Nome: {{lead.nome}}
- Empresa: {{lead.empresa}}
- Pedido: {{lead.mensagem}}
`}</pre>
                </div>
              </section>

              {/* 2) Etiquetar pedidos e priorizar */}
              <section aria-labelledby="tags" className="space-y-4 mt-10">
                <h2
                  id="tags"
                  className="text-2xl md:text-3xl font-light text-gray-900"
                >
                  2) Etiquetar pedidos e priorizar (sem tocar no CRM)
                </h2>
                <p className="text-slate-700 leading-relaxed">
                  Classifique pedidos automaticamente: tipo (suporte, orçamento,
                  urgência), área (web, design, conteúdo) e prioridade
                  (alta/média/baixa).
                </p>
                <ol className="list-decimal list-inside text-slate-700 space-y-2">
                  <li>Trigger: novo email/lead/pedido.</li>
                  <li>
                    Step IA: classificar texto em categorias pré‑definidas.
                  </li>
                  <li>
                    Ação: criar tarefa em Trello/Asana com etiquetas e prazo.
                  </li>
                </ol>
                <div className="bg-gray-50 border rounded-lg p-4">
                  <p className="text-sm text-slate-700">
                    Dica: mantenha um “dicionário” simples de palavras‑chave
                    para reforçar a classificação.
                  </p>
                </div>
                {/* Template: JSON de classificação + Make */}
                <div className="bg-white border rounded-lg p-4">
                  <p className="text-sm font-semibold text-gray-900 mb-2">
                    Template (JSON): Classificação de pedidos
                  </p>
                  <pre className="whitespace-pre-wrap text-xs bg-gray-50 p-3 rounded border text-slate-700">{`{
  "categoria": "suporte | orcamento | urgente",
  "area": "web | design | conteudo | outros",
  "prioridade": "alta | media | baixa",
  "resumo": "50-120 caracteres com o essencial"
}`}</pre>
                  <p className="text-sm font-semibold text-gray-900 mt-3 mb-2">
                    Template (Make): Etiquetar e priorizar
                  </p>
                  <ol className="list-decimal list-inside text-slate-700 text-sm space-y-1">
                    <li>Trigger: Watch emails/rows (Gmail/Sheets/Forms).</li>
                    <li>Module: AI — classificar usando o JSON acima.</li>
                    <li>Module: Router — criar rotas por prioridade.</li>
                    <li>
                      Module: Asana/Trello — criar tarefa com etiquetas e prazo.
                    </li>
                    <li>Module: Google Sheets — adicionar linha em “Logs”.</li>
                  </ol>
                </div>
              </section>

              {/* 3) Relatórios simples semanais */}
              <section aria-labelledby="reports" className="space-y-4 mt-10">
                <h2
                  id="reports"
                  className="text-2xl md:text-3xl font-light text-gray-900"
                >
                  3) Relatórios simples em 1 clique (toda semana)
                </h2>
                <p className="text-slate-700 leading-relaxed">
                  Reúna dados de Sheets/CRM e peça um resumo com destaques e
                  próximos passos. Envie para o seu email/Slack.
                </p>
                <ol className="list-decimal list-inside text-slate-700 space-y-2">
                  <li>Trigger: schedule semanal.</li>
                  <li>
                    Step dados: buscar métricas (leads, respostas, vendas).
                  </li>
                  <li>Step IA: gerar síntese com 3 insights e 2 ações.</li>
                </ol>
                <div className="bg-gray-50 border rounded-lg p-4">
                  <p className="text-sm text-slate-700">
                    Template: “Semana em 5 linhas: 1) Leads 2) Conversas 3)
                    Oportunidades 4) Vendas 5) Ações para próxima semana”.
                  </p>
                </div>
                {/* Template: Relatório semanal */}
                <div className="bg-white border rounded-lg p-4">
                  <p className="text-sm font-semibold text-gray-900 mb-2">
                    Template (Zapier/Make): Relatório semanal
                  </p>
                  <ol className="list-decimal list-inside text-slate-700 text-sm space-y-1">
                    <li>Trigger: Schedule weekly (segunda-feira 08:00).</li>
                    <li>
                      Action: Google Sheets — buscar métricas (últimos 7 dias).
                    </li>
                    <li>Action: AI — gerar resumo com 3 insights e 2 ações.</li>
                    <li>Action: Gmail/Slack — enviar para equipa.</li>
                    <li>Action: Google Drive — guardar PDF/MD (opcional).</li>
                  </ol>
                  <pre className="mt-3 whitespace-pre-wrap text-xs bg-gray-50 p-3 rounded border text-slate-700">{`PROMPT RESUMO
Contexto: Geração de relatório semanal em PT-PT.
Escreva 5 linhas: 1) Leads 2) Conversas 3) Oportunidades 4) Vendas 5) 2 ações para a próxima semana.

Métricas (últimos 7 dias):
- Leads: {{sheet.leads}}
- Conversas: {{sheet.conversas}}
- Oportunidades: {{sheet.oportunidades}}
- Vendas: {{sheet.vendas}}
`}</pre>
                </div>
              </section>

              <hr className="my-10" />

              {/* Boas práticas */}
              <section
                aria-labelledby="boas-praticas"
                className="space-y-4 mt-10"
              >
                <h2
                  id="boas-praticas"
                  className="text-2xl md:text-3xl font-light text-gray-900"
                >
                  Boas práticas (para não dar errado)
                </h2>
                <ul className="list-disc list-inside text-slate-700 space-y-2">
                  <li>Comece manual → automatize o que repetir 3×.</li>
                  <li>
                    Valide mensagens sensíveis (primeiro mês) antes de enviar.
                  </li>
                  <li>Registe erros em uma aba “Logs” no Sheets.</li>
                  <li>Use limites (rate‑limit) para evitar loops.</li>
                  <li>
                    Privacidade: nunca envie dados sensíveis à IA sem
                    consentimento.
                  </li>
                </ul>
              </section>

              {/* Checklist de 1 hora */}
              <section aria-labelledby="checklist" className="space-y-4 mt-10">
                <h2
                  id="checklist"
                  className="text-2xl md:text-3xl font-light text-gray-900"
                >
                  Checklist para começar em 1 hora
                </h2>
                <ol className="list-decimal list-inside text-slate-700 space-y-2">
                  <li>Escolha 1 fluxo acima.</li>
                  <li>Desenhe 3 passos (gatilho → IA → ação).</li>
                  <li>
                    Crie um doc com: prompt, etiquetas e mensagens padrão.
                  </li>
                  <li>Teste com 3 casos reais e ajuste.</li>
                  <li>Ative logs e um alerta em caso de falha.</li>
                </ol>
              </section>

              <hr className="my-10" />

              {/* Modelos de Sheets e CSV */}
              <section aria-labelledby="modelos" className="space-y-4 mt-10">
                <h2
                  id="modelos"
                  className="text-2xl md:text-3xl font-light text-gray-900"
                >
                  Modelos de Sheets e CSV (para copiar)
                </h2>
                <p className="text-slate-700 leading-relaxed">
                  Use estes cabeçalhos para padronizar os seus dados. Pode
                  importar os CSV abaixo no Google Sheets.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white border rounded-lg p-4">
                    <p className="text-sm font-semibold text-gray-900 mb-2">
                      Logs — colunas sugeridas
                    </p>
                    <pre className="whitespace-pre-wrap text-xs bg-gray-50 p-3 rounded border text-slate-700">{`data,origem,nome,email,empresa,mensagem,acao,status,erro,tags,prioridade,responsavel,link,notas`}</pre>
                    <a
                      href="/templates/automacao-logs-sample.csv"
                      className="inline-flex mt-3 text-sm text-primario underline"
                      download
                    >
                      Descarregar CSV de exemplo
                    </a>
                    <div className="mt-1">
                      <a
                        href="/templates/automacao-logs-sample.tsv"
                        className="inline-flex text-xs text-primario/80 underline"
                        download
                      >
                        Versão TSV
                      </a>
                    </div>
                    <p className="mt-2 text-[11px] text-slate-600">
                      Excel: duplo clique (CSV inclui "sep=,") ou Data &gt; From
                      Text/CSV &gt; UTF‑8; delimitador: vírgula (CSV) ou
                      tabulação (TSV).
                    </p>
                  </div>
                  <div className="bg-white border rounded-lg p-4">
                    <p className="text-sm font-semibold text-gray-900 mb-2">
                      Métricas — colunas sugeridas
                    </p>
                    <pre className="whitespace-pre-wrap text-xs bg-gray-50 p-3 rounded border text-slate-700">{`data,leads,conversas,oportunidades,vendas,receita,tempo_medio_resposta_min,nps`}</pre>
                    <a
                      href="/templates/automacao-metricas-sample.csv"
                      className="inline-flex mt-3 text-sm text-primario underline"
                      download
                    >
                      Descarregar CSV de exemplo
                    </a>
                    <div className="mt-1">
                      <a
                        href="/templates/automacao-metricas-sample.tsv"
                        className="inline-flex text-xs text-primario/80 underline"
                        download
                      >
                        Versão TSV
                      </a>
                    </div>
                    <p className="mt-2 text-[11px] text-slate-600">
                      Excel: duplo clique (CSV inclui "sep=,") ou Data &gt; From
                      Text/CSV &gt; UTF‑8; delimitador: vírgula (CSV) ou
                      tabulação (TSV).
                    </p>
                  </div>
                </div>
              </section>

              <hr className="my-10" />

              {/* CTA final */}
              <section className="bg-gray-50 border rounded-xl p-6">
                <h3 className="text-lg md:text-xl font-semibold text-gray-900">
                  Quer automatizar o seu dia a dia?
                </h3>
                <p className="mt-2 text-slate-700">
                  A LodeX Studio desenha e implementa automações simples com
                  no‑code e IA para ganhar horas por semana.
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

export default AutomacaoSimples;
