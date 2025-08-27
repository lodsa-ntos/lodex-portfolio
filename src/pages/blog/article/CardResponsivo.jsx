import React from "react";
import { Helmet } from "react-helmet";
import GlobalContainer from "../../../utils/GlobalContainer";
import { RiTailwindCssFill } from "react-icons/ri";
import { TbBrandFramerMotion } from "react-icons/tb";
import { RxDrawingPinFilled } from "react-icons/rx";
import { IoMdCodeWorking } from "react-icons/io";
import { GiConvergenceTarget } from "react-icons/gi";
import imgAvatar from "../../../assets/logo/lodexstudio-logo-white.svg";
import CodeBlock from "../../../utils/CodeBlock";

const Avatar = [
  {
    foto: imgAvatar,
    profileFoto: "",
    autor: "LodeX Studio",
    date: "09 de agosto de 2025",
  },
];

const blocoParte2 = {
  language: "javascript",
  code: `export default function Card() {
  return (
    <div className="bg-white shadow p-4 w-[400px] rounded">
      <img src="imagem.jpg" alt="..." className="mb-4" />
      <h2 className="text-lg font-bold">Título do Card</h2>
      <p>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
      Quod voluptatibus maiores expedita atque veritatis 
      accusantium architecto dolor dolores enim nihil molestias
      ad.
      </p>
    </div>
  );
}`,
};

const blocoParte3 = {
  language: "javascript",
  code: `
  const Badge = ({ icon, label, link }) => (
  <a
    className={" flex items-center gap-0.5 rounded-full px-2 py-[0.5px] text-xs 
    font-medium tracking-tight ring-1 ring-inset
     \${label === "React.js" ? "bg-blue-50 text-blue-600 ring-blue-700/10" : ""}
    "}
    href={link}
    target="_blank"
    rel="noopener noreferrer"
  >
    {icon} {label}
  </a>
);
  `,
};

const blocoParte4 = {
  language: "javascript",
  code: `
  <img className="w-full h-[280px] object-cover
  transition-transform duration-500 group-hover:scale-105"
    src="images/blog/card-example.jpg"
    alt="Exemplo de card visual"
  />
  `,
};

const blocoParte5 = {
  language: "javascript",
  code: `
  {/* CTA button */}
<div className="absolute top-2 right-3 bg-white rounded-full w-8
 h-8 flex items-center justify-center opacity-0
  group-hover:opacity-100 transition duration-500">
  <MdArrowOutward className="size-5 text-[#e96360]" />
</div>

{/* Card content */}
<div className="p-5">
  <h5 className="font-bold">{card.title}</h5>
  <p className="text-sm text-gray-500">{card.description}</p>
</div>
  `,
};

const blocoParte6 = {
  language: "javascript",
  code: `
  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
    {/* Cards aqui */}
  </div>`,
};

const blocoParte61 = {
  language: "javascript",
  code: `
  <video src="images/blog/responsividade.mp4" 
  autoPlay 
  muted 
  loop 
  playsInline 
  className="w-full mx-auto h-full object-cover rounded-lg" 
  /> `,
};

function AuthorInfo() {
  return (
    <div className="flex mt-4 mb-10">
      {Avatar.map((avt, idx) => (
        <div key={idx} className="flex items-center justify-center gap-3">
          <div className="flex items-center justify-center w-16 h-16 bg-terciario rounded-full">
            <img src={avt.foto} alt="avatar" className="size-7 bg-no-repeat" />
          </div>
          <div className="flex flex-col text-gray-700 text-base">
            <p className="text-lg font-light text-terciario">{avt.autor}</p>
            <p className="text-base text-slate-500 font-light">{avt.date}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

const indice = [
  { id: "passo-1", label: "Criar projeto com React e TailwindCSS" },
  { id: "passo-2", label: "Estruturar o componente base (Card)" },
  { id: "passo-3", label: "Adicionar badges e ícones de tecnologia" },
  { id: "passo-4", label: "Criar imagem visual impactante" },
  { id: "passo-5", label: "Incluir título e botão de ação (CTA)" },
  { id: "passo-6", label: "Tornar o card responsivo" },
  { id: "passo-final", label: "Código final e repositório no GitHub" },
];

function Indice() {
  return (
    <div className="mb-10">
      <ul className="space-y-4 text-left text-gray-500">
        <h1 className="flex items-center gap-1 text-[#6a7282] font-[500] text-lg">
          <RxDrawingPinFilled className="text-secundario" /> Índice
        </h1>
        <ol className="list-decimal font-semibold text-sm sm:text-base md:text-lg leading-relaxed text-slate-700 mb-5 max-w-3xl space-y-1 list-inside">
          {indice.map((item) => (
            <li key={item.id} className="font-medium">
              <span className="font-light">
                <a
                  href={`#${item.id}`}
                  className="underline hover:text-secundario focus-within:text-secundario"
                >
                  {item.label}
                </a>
              </span>
            </li>
          ))}
        </ol>
      </ul>
    </div>
  );
}

import { useState } from "react";
import { toast } from "react-toastify";

function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.target);

    // Valida os campos obrigatórios
    const email = formData.get("email")?.trim();

    if (!email) {
      toast.error("Por favor, insira um email válido.");
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        toast.success(data.message || "Subscrição realizada com sucesso!");
        setEmail("");
        // Limpa os campos não-controlados
        e.target.reset();
      } else {
        const data = await response.json();
        toast.error(data.error || "Erro ao processar subscrição.");
      }
    } catch {
      toast.error("Erro inesperado. Tente novamente.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center py-10">
      <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-900 text-center leading-relaxed mb-5">
        📩 Quer receber <br className=" md:hidden" />
        mais tutoriais como este?
      </h1>
      <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed text-slate-600 text-center">
        Assine minha newsletter <br className=" md:hidden" />e receba novidades
        direto no seu e-mail.
      </p>
      <form
        method="POST"
        encType="multipart/form-data"
        onSubmit={handleSubmit}
        className="max-w-lg md:max-w-3xl w-full mx-auto bg-gray-100 flex p-1 rounded-full mt-10 focus-within:bg-white border focus-within:ring-1 focus-within:ring-secundario transition"
      >
        <input
          id="email"
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder="Endereço de e-mail"
          disabled={isSubmitting}
          className="w-full rounded-full px-5 py-4 border-none tracking-tight outline-none bg-transparent text-base text-slate-900 placeholder-gray-500 disabled:opacity-50"
          title="Insira um e-mail válido"
        />
        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-secundario hover:bg-blue-700 transition-all text-white font-semibold text-sm rounded-full px-6 py-3 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? "..." : "Subscrever"}
        </button>
      </form>
    </div>
  );
}

function SocialMediaCTA() {
  return (
    <div className="flex flex-col items-center justify-center py-10 bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 rounded-2xl text-white my-10">
      <div className="text-center max-w-3xl px-6">
        <h3 className="text-2xl sm:text-3xl font-bold mb-4 flex items-center justify-center gap-2">
          📱 Siga @lodex.studio no Instagram
        </h3>
        <p className="text-lg sm:text-xl leading-relaxed mb-6 text-white/90">
          Tutoriais rápidos em stories, dicas de design, código ao vivo e
          bastidores do desenvolvimento.
          <strong className="text-yellow-300"> Conteúdo diário</strong> para
          devs que querem evoluir!
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 text-sm">
          <div className="bg-white/10 backdrop-blur rounded-lg p-4">
            <span className="block font-semibold mb-1">💡 Stories Diários</span>
            <span className="text-white/80">Tips rápidos de 30 segundos</span>
          </div>
          <div className="bg-white/10 backdrop-blur rounded-lg p-4">
            <span className="block font-semibold mb-1">🔥 Live Coding</span>
            <span className="text-white/80">Desenvolvimento ao vivo</span>
          </div>
          <div className="bg-white/10 backdrop-blur rounded-lg p-4">
            <span className="block font-semibold mb-1">🎨 Design Process</span>
            <span className="text-white/80">Bastidores dos projetos</span>
          </div>
          <div className="bg-white/10 backdrop-blur rounded-lg p-4">
            <span className="block font-semibold mb-1">👥 Comunidade</span>
            <span className="text-white/80">+1000 devs ativos</span>
          </div>
        </div>

        <a
          href="https://instagram.com/lodex.studio"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-white text-purple-600 font-bold text-lg px-8 py-4 rounded-full hover:bg-gray-100 transition-all duration-300 hover:scale-105 hover:shadow-xl"
          aria-label="Seguir LodeX Studio no Instagram"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
          </svg>
          Seguir Agora
        </a>
      </div>
    </div>
  );
}

function CardResponsivo() {
  return (
    <>
      <Helmet>
        <title>
          Card Responsivo com Hover Animado — React + TailwindCSS (Tutorial
          Passo a Passo) | LodeX Studio
        </title>
        <meta
          name="description"
          content="Aprenda passo a passo a criar um card responsivo com hover animado usando React e TailwindCSS. Inclui código, dicas de design e responsividade."
        />
        <meta
          name="keywords"
          content="React, Tailwind, card responsivo, badges, UI components, web design, frontend"
        />
        <meta
          property="og:title"
          content="Card Responsivo com Badges - React + Tailwind"
        />
        <meta
          property="og:description"
          content="Aprenda a criar um card responsivo com badges usando React e Tailwind."
        />
        <meta
          property="og:image"
          content="https://lodexstudio.com/images/blog/card-responsivo-cover.jpg"
        />
        <meta
          property="og:url"
          content="https://lodexstudio.com/images/blog/card-responsivo-lodex-studio.png"
        />
        <meta property="og:type" content="article" />
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
            <div className="w-full max-w-content mx-auto sm:px-6 md:px-8 lg:px-[18%]">
              <article
                className="flex-col text-start"
                aria-label="Tutorial: Card Responsivo com Hover Animado"
              >
                <header className="mb-10">
                  <h1 className="text-2xl sm:text-4xl md:text-5xl font-light text-gray-900 leading-relaxed max-w-4xl">
                    Card Responsivo com Hover Animado usando React + TailwindCSS
                  </h1>
                  <p className="mt-6 mb-2 text-base lg:text-2xl text-slate-600 leading-relaxed max-w-3xl font-light">
                    Efeito suave de hover que dá vida ao card com menos de 200
                    linhas de código.
                  </p>
                </header>

                <AuthorInfo />

                <figure className="mb-10">
                  <img
                    src="images/blog/cad-responsivo-differ.jpg"
                    alt="Comparação entre card simples e card melhorado com badges e animação"
                    className="rounded-lg"
                    loading="lazy"
                  />
                  <figcaption className="sr-only">
                    Comparação visual entre dois estados do card.
                  </figcaption>
                </figure>

                <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed text-slate-700 font-light mb-10">
                  Um card visual deve ser claro, organizado e usar hierarquia
                  visual para guiar o usuário. No exemplo otimizado, ícones e
                  badges destacam o conteúdo, o espaçamento melhora a leitura e
                  o design moderno cria uma experiência agradável. Responsivo e
                  interativo, valoriza o conteúdo e aumenta o engajamento com
                  código simples.
                </p>

                <hr className="mb-10" />

                <nav aria-label="Índice do artigo">
                  <Indice />
                </nav>

                <hr className="mb-10" />

                {/* PASSO 1 */}
                <section id="passo-1" aria-labelledby="heading-passo-1">
                  <h2
                    id="heading-passo-1"
                    className="text-xl sm:text-3xl md:text-4xl font-light text-gray-900 leading-relaxed mb-10"
                  >
                    <strong>Passo 1</strong> — Criar o projeto com React e
                    TailwindCSS
                  </h2>
                  <p className="text-base md:text-lg lg:text-xl leading-relaxed text-slate-700 font-light mb-10">
                    <strong className="font-medium">Objetivo:</strong> Criar a
                    base do projeto onde o card será construído.
                  </p>
                  <p className="text-base md:text-lg lg:text-xl leading-relaxed text-slate-700 font-medium mb-2">
                    O que será feito:
                  </p>
                  <ol className="list-decimal font-medium text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed text-slate-700 mb-5 max-w-3xl space-y-1 list-inside">
                    <li className="font-light">
                      Criar projeto React com{" "}
                      <strong className="font-medium">Vite</strong>
                    </li>
                    <li className="font-light">
                      Instalar e configurar{" "}
                      <strong className="font-medium">TailwindCSS</strong>
                    </li>
                  </ol>

                  <hr className="mb-10" />
                  <h3 className="text-base md:text-lg lg:text-xl leading-relaxed text-slate-700 font-semibold mb-2">
                    Código
                  </h3>

                  <div
                    className="w-full mx-auto bg-gray-100 p-5 rounded-xl mb-2"
                    aria-label="Comandos para criar projeto"
                  >
                    <p className="text-base leading-relaxed text-slate-700 font-[400] mb-10">
                      <span className="text-gray-500 font-[500] tracking-wide text-sm italic">
                        # Criar projeto React com Vite
                      </span>
                      <br />
                      npm create vite@latest card-tailwind
                      <br />
                      <span className="text-yellow-600">cd</span> card-tailwind
                    </p>
                    <p className="text-base leading-relaxed text-slate-700 font-[400]">
                      <span className="text-gray-500 font-[500] tracking-wider text-sm italic">
                        # Instalar TailwindCSS
                      </span>
                      <br />
                      npm install -D tailwindcss postcss autoprefixer
                      <br />
                      npx tailwindcss init -p
                    </p>
                  </div>

                  <div
                    className="w-full mx-auto bg-gray-100 p-5 rounded-xl mb-2"
                    aria-label="Configuração Tailwind"
                  >
                    <p className="text-base leading-relaxed text-slate-700 font-[400]">
                      <span className="text-gray-500 font-[500] tracking-wide text-sm italic">
                        // tailwind.config.js
                      </span>
                      <br />
                      <span className="text-yellow-600 text-sm">module</span>
                      <span className="text-sm">.exports = {"{"}</span>
                      <br />
                      <span className="text-yellow-600 ml-5 text-sm">
                        content
                      </span>
                      <span className="text-sm">: [</span>
                      <span className="text-sm text-green-600 tracking-wide">
                        {" ./index.html, ./src/**/*.{js,jsx} "}
                      </span>
                      <span className="text-sm">],</span>
                      <br />
                      <span className="text-yellow-600 ml-5 text-sm">
                        theme
                      </span>
                      <span className="text-sm">: {"{"} </span>
                      <span className="text-yellow-600 text-sm">extend</span>
                      <span className="text-sm">: {"{}"}, </span>
                      <br />
                      <span className="text-yellow-600 ml-5 text-sm">
                        plugins
                      </span>
                      <span className="text-sm">: [],</span>
                      <br />
                      <span className="text-sm">{"}"}</span>
                    </p>
                  </div>

                  <div
                    className="w-full mx-auto bg-gray-100 p-5 rounded-xl mb-2"
                    aria-label="Importação CSS Tailwind"
                  >
                    <p className="text-base leading-relaxed text-slate-700 font-[400]">
                      <span className="text-gray-500 font-[500] tracking-wide text-sm italic">
                        /* index.css */
                      </span>
                      <br />
                      <span className="text-purple-600 text-sm">
                        @tailwind{" "}
                      </span>
                      <span className="text-sm">base;</span>
                      <br />
                      <span className="text-purple-600 text-sm">
                        @tailwind{" "}
                      </span>
                      <span className="text-sm">components;</span>
                      <br />
                      <span className="text-purple-600 text-sm">
                        @tailwind{" "}
                      </span>
                      <span className="text-sm">utilities;</span>
                    </p>
                  </div>

                  <p className="text-sm md:text-base lg:text-lg leading-relaxed text-slate-700 font-light mb-5">
                    Configure o arquivo{" "}
                    <span className="bg-gray-100 px-2 rounded-lg">
                      tailwind.config.js
                    </span>{" "}
                    e importe o CSS em{" "}
                    <span className="bg-gray-100 px-2 rounded-lg">
                      index.css
                    </span>
                    .
                  </p>
                  <p className="text-base leading-relaxed text-slate-700">
                    Dica: mantenha a estrutura organizada para facilitar
                    manutenção.
                  </p>

                  <hr className="my-10" />
                  <h3 className="text-base md:text-lg lg:text-xl leading-relaxed text-slate-700 font-semibold mb-2">
                    Teste agora
                  </h3>
                  <p className="text-sm md:text-base lg:text-lg leading-relaxed text-slate-700 font-light mb-10">
                    Execute{" "}
                    <code className="bg-gray-100 rounded-md px-1 font-medium text-sm">
                      npm run dev
                    </code>{" "}
                    e confirme que o Tailwind está a aplicar estilos.
                  </p>
                </section>

                <hr className="my-10" />

                {/* PASSO 2 */}
                <section id="passo-2" aria-labelledby="heading-passo-2">
                  <h2
                    id="heading-passo-2"
                    className="text-xl sm:text-3xl md:text-4xl font-light text-gray-900 leading-relaxed mb-10"
                  >
                    <strong>Passo 2</strong> — Estruturar o componente base
                  </h2>
                  <p className="text-base md:text-lg lg:text-xl leading-relaxed text-slate-700 font-light mb-10">
                    <strong className="font-medium">Objetivo:</strong> Criar um
                    card simples sem efeitos para servir de ponto de partida.
                  </p>
                  <p className="text-base md:text-lg lg:text-xl leading-relaxed text-slate-700 font-medium mb-2">
                    O que será feito:
                  </p>
                  <ol className="list-decimal font-medium text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed text-slate-700 mb-5 max-w-3xl space-y-1 list-inside">
                    <li className="font-light">
                      Criar o arquivo{" "}
                      <code className="bg-gray-100 px-1 rounded-md">
                        Card.jsx
                      </code>
                    </li>
                    <li className="font-light">
                      Adicionar imagem, título e descrição
                    </li>
                    <li className="font-light">
                      Aplicar classes básicas do TailwindCSS
                    </li>
                  </ol>

                  <hr className="mb-10" />
                  <h3 className="text-base md:text-lg lg:text-xl leading-relaxed text-slate-700 font-semibold mb-2">
                    Código (resumo)
                  </h3>

                  <div>
                    <CodeBlock
                      language={blocoParte2.language}
                      code={blocoParte2.code}
                    />
                    <p className="text-base leading-relaxed text-slate-700">
                      Estrutura base que receberá design e animações.
                    </p>
                  </div>

                  <hr className="my-10" />
                  <figure className="-mt-10">
                    <img
                      src="images/blog/card-base2.jpg"
                      alt="Primeira versão do card apenas com imagem e texto"
                      className="w-96 mx-auto h-full object-cover"
                      loading="lazy"
                    />
                    <figcaption className="text-base leading-relaxed text-slate-700 mb-2">
                      Funciona, mas falta apelo visual e dinamismo.
                    </figcaption>
                  </figure>
                </section>

                <hr className="my-10" />

                {/* PASSO 3 */}
                <section id="passo-3" aria-labelledby="heading-passo-3">
                  <h2
                    id="heading-passo-3"
                    className="text-xl sm:text-3xl md:text-4xl font-light text-gray-900 leading-relaxed mb-10"
                  >
                    <strong>Passo 3</strong> — Adicionando badges e ação
                  </h2>
                  <p className="text-base md:text-lg lg:text-xl leading-relaxed text-slate-700 font-light mb-10">
                    Transformar o card estático em algo dinâmico com badges e
                    elementos visuais.
                  </p>
                  <p className="text-base md:text-lg lg:text-xl leading-relaxed text-slate-700 font-light mb-10">
                    <strong className="font-medium">Objetivo:</strong> Tornar o
                    card mais atrativo e semântico.
                  </p>
                  <p className="text-base md:text-lg lg:text-xl leading-relaxed text-slate-700 font-medium mb-2">
                    Ações:
                  </p>
                  <ol className="list-decimal font-medium text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed text-slate-700 mb-5 max-w-3xl space-y-1 list-inside">
                    <li className="font-light">
                      Criar componente{" "}
                      <span className="font-medium">Badge</span>
                    </li>
                    <li className="font-light">
                      Aplicar cores dinâmicas por tecnologia
                    </li>
                  </ol>

                  <hr className="mb-10" />
                  <h3 className="text-base md:text-lg lg:text-xl leading-relaxed text-slate-700 font-semibold mb-2">
                    Código parcial (Badge)
                  </h3>
                  <div>
                    <CodeBlock
                      language={blocoParte3.language}
                      code={blocoParte3.code}
                    />
                    <p className="text-base leading-relaxed text-slate-700">
                      Use contraste suficiente para texto dentro das badges.
                    </p>
                  </div>

                  <hr className="my-10" />
                  <figure className="mt-10">
                    <img
                      src="images/blog/antes-depois-1.jpg"
                      alt="Comparação visual antes e depois da aplicação das badges"
                      className="w-full mx-auto h-full object-cover rounded-lg"
                      loading="lazy"
                    />
                    <figcaption className="text-base leading-relaxed text-slate-700 my-5">
                      Badges adicionam clareza e contexto visual.
                    </figcaption>
                  </figure>
                </section>

                <hr className="my-10" />

                {/* PASSO 4 */}
                <section id="passo-4" aria-labelledby="heading-passo-4">
                  <h2
                    id="heading-passo-4"
                    className="text-xl sm:text-3xl md:text-4xl font-light text-gray-900 leading-relaxed mb-10"
                  >
                    <strong>Passo 4</strong> — Imagem com efeito hover
                  </h2>
                  <p className="text-base md:text-lg lg:text-xl leading-relaxed text-slate-700 font-light mb-10">
                    Criar impacto inicial com uma imagem que responde à
                    interação.
                  </p>

                  <hr className="mb-10" />
                  <h3 className="text-base md:text-lg lg:text-xl leading-relaxed text-slate-700 font-semibold mb-2">
                    Código parcial (imagem)
                  </h3>
                  <div>
                    <CodeBlock
                      language={blocoParte4.language}
                      code={blocoParte4.code}
                    />
                    <p className="text-base leading-relaxed text-slate-700">
                      Prefira formatos otimizados (ex: .webp) para performance.
                    </p>
                  </div>

                  <hr className="my-10" />
                  <figure className="-mt-10">
                    <img
                      src="images/blog/card-video.gif"
                      alt="Animação demonstrando o efeito de zoom suave ao passar o cursor sobre a imagem"
                      className="w-80 mx-auto h-full object-cover rounded-lg"
                      loading="lazy"
                    />
                    <figcaption className="text-base leading-relaxed text-slate-700 my-5">
                      Efeito sutil reforça a sensação de resposta visual.
                    </figcaption>
                  </figure>
                </section>

                <hr className="my-10" />

                {/* PASSO 5 */}
                <section id="passo-5" aria-labelledby="heading-passo-5">
                  <h2
                    id="heading-passo-5"
                    className="text-xl sm:text-3xl md:text-4xl font-light text-gray-900 leading-relaxed mb-10"
                  >
                    <strong>Passo 5</strong> — Interatividade e CTA
                  </h2>
                  <p className="text-base md:text-lg lg:text-xl leading-relaxed text-slate-700 font-light mb-10">
                    Botão visível apenas no hover para manter layout limpo e
                    direcionar ação.
                  </p>

                  <hr className="mb-10" />
                  <h3 className="text-base md:text-lg lg:text-xl leading-relaxed text-slate-700 font-semibold mb-2">
                    Código parcial (CTA)
                  </h3>
                  <div>
                    <CodeBlock
                      language={blocoParte5.language}
                      code={blocoParte5.code}
                    />
                  </div>
                  <p className="text-base leading-relaxed text-slate-700">
                    Ícones devem ter aria-hidden="true" se puramente
                    decorativos.
                  </p>
                  <p className="text-sm leading-relaxed text-slate-600 font-light mt-4">
                    💡 <strong>Dica:</strong> Vejo implementações criativas da
                    comunidade no
                    <a
                      href="https://instagram.com/lodex.studio"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-600 hover:text-purple-800 ml-1"
                    >
                      Instagram usando #LodeXStudio
                    </a>
                    !
                  </p>

                  <hr className="my-10" />
                  <figure className="-mt-10">
                    <img
                      src="images/blog/card-video-CTA.gif"
                      alt="Demonstração da aparição do botão CTA ao passar o cursor"
                      className="w-80 mx-auto h-full object-cover rounded-lg"
                      loading="lazy"
                    />
                    <figcaption className="text-base leading-relaxed text-slate-700 my-5">
                      CTA discreto reduz ruído visual e mantém foco.
                    </figcaption>
                  </figure>
                </section>

                <hr className="my-10" />

                {/* PASSO 6 */}
                <section id="passo-6" aria-labelledby="heading-passo-6">
                  <h2
                    id="heading-passo-6"
                    className="text-xl sm:text-3xl md:text-4xl font-light text-gray-900 leading-relaxed mb-10"
                  >
                    <strong>Passo 6</strong> — Tornar o card responsivo
                  </h2>
                  <p className="text-base md:text-lg lg:text-xl leading-relaxed text-slate-700 font-light mb-10">
                    Garantir boa leitura e estrutura em qualquer largura de
                    ecrã.
                  </p>

                  <hr className="mb-10" />
                  <h3 className="text-base md:text-lg lg:text-xl leading-relaxed text-slate-700 font-semibold mb-2">
                    Exemplo de classes responsivas
                  </h3>
                  <div>
                    <CodeBlock
                      language={blocoParte6.language}
                      code={blocoParte6.code}
                    />
                  </div>
                  <div>
                    <CodeBlock
                      language={blocoParte61.language}
                      code={blocoParte61.code}
                    />
                    <p className="text-base leading-relaxed text-slate-700">
                      O atributo loop simula GIF com melhor performance.
                    </p>
                  </div>

                  <hr className="my-10" />
                  <figure className="-mt-3">
                    <video
                      src="images/blog/responsividade.mp4"
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="w-full mx-auto h-full object-cover rounded-lg"
                      aria-label="Demonstração da adaptação do card em tamanhos diferentes"
                    />
                    <figcaption className="text-center text-slate-700">
                      Adaptação suave entre desktop e mobile.
                    </figcaption>
                  </figure>
                  <p className="text-base leading-relaxed text-slate-700 my-5">
                    Importante para acessos móveis (mais de 60% hoje).
                  </p>
                </section>

                <hr className="my-10" />

                {/* PASSO FINAL */}
                <section id="passo-final" aria-labelledby="heading-passo-final">
                  <h2
                    id="heading-passo-final"
                    className="text-xl sm:text-3xl md:text-4xl font-light text-gray-900 leading-relaxed mb-10"
                  >
                    <strong>Passo Final</strong> — Código completo no GitHub
                  </h2>
                  <p className="text-base md:text-lg lg:text-xl leading-relaxed text-slate-700 font-light mb-10">
                    Acesse e clone o repositório para testes.
                  </p>
                  <a
                    href="https://github.com/lodsa-ntos/lodexstudio-blog"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex bg-primario font-semibold text-white py-3 px-4 rounded-full shadow-md hover:shadow-lg text-sm w-fit hover:bg-secundario transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secundario hover:ring-2 hover:ring-secundario hover:scale-105 hover:ring-inset items-center gap-2"
                    aria-label="Ver código completo deste tutorial no GitHub"
                  >
                    <IoMdCodeWorking
                      className="text-gray-200 font-bold size-5"
                      aria-hidden="true"
                      focusable="false"
                    />
                    Ver código no GitHub
                  </a>
                  <p className="text-sm md:text-base lg:text-lg leading-relaxed text-slate-700 font-light mt-6">
                    🔥{" "}
                    <strong className="font-medium mr-1">
                      Quer ver este código sendo desenvolvido ao vivo?
                    </strong>
                    Siga{" "}
                    <a
                      href="https://instagram.com/lodex.studio"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-600 underline hover:text-purple-800"
                    >
                      @lodex.studio
                    </a>{" "}
                    no Instagram para acompanhar sessões de live coding!
                  </p>
                </section>

                <hr className="my-10" />

                <section aria-labelledby="heading-conclusao">
                  <h2
                    id="heading-conclusao"
                    className="text-xl sm:text-3xl md:text-4xl font-light text-gray-900 leading-relaxed mb-10"
                  >
                    <strong>Conclusão</strong>
                  </h2>
                  <p className="text-base md:text-lg lg:text-xl leading-relaxed text-slate-700 font-light mb-10">
                    Agora você tem um card responsivo, moderno e animado que
                    pode adaptar para vários contextos. Personalize cores,
                    troque ícones e integre em layouts reais para ganhar
                    velocidade e consistência na criação de interfaces.
                  </p>
                  <p className="text-base md:text-lg lg:text-xl leading-relaxed text-slate-700 font-light mb-10">
                    💡 <strong className="font-medium">Dica:</strong> Acompanhe
                    mais tutoriais e variações deste card no meu Instagram. Lá
                    compartilho o processo de desenvolvimento, dicas rápidas em
                    stories e respondo dúvidas da comunidade!
                  </p>
                </section>

                <hr className="my-10" />

                <NewsletterForm />
                <SocialMediaCTA />
              </article>
            </div>
          </div>
        </GlobalContainer>
      </main>
    </>
  );
}

export default CardResponsivo;
