import React from "react";
import { Helmet } from "react-helmet";
import GlobalContainer from "../../../utils/GlobalContainer";
import { RiTailwindCssFill } from "react-icons/ri";
import { TbBrandFramerMotion } from "react-icons/tb";
import { RxDrawingPinFilled } from "react-icons/rx";
import { AiOutlineFileProtect } from "react-icons/ai";
import { LiaUniversitySolid } from "react-icons/lia";
import { BubblyLink } from "../../../library/BubblyLink";
import { MobileCarouselLaunchPeak } from "../../../utils/MobileCarousel";
import { GiConvergenceTarget } from "react-icons/gi";
import imgAvatar from "../../../assets/logo/lodexstudio-logo-white.svg";
import CodeBlock from "../../../utils/CodeBlock";

const day = new Date().toLocaleDateString("pt-PT", { day: "2-digit" });
const month = new Date().toLocaleDateString("pt-PT", { month: "long" });
const year = new Date().toLocaleDateString("pt-PT", { year: "numeric" });

const generalDate = `${day} ${month} ${year}`;

const Avatar = [
  {
    foto: imgAvatar,
    profileFoto: "",
    autor: "LodeX Studio",
    date: generalDate,
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

function CardResponsivo() {
  return (
    <>
      <Helmet>
        <title>
          Card Responsivo com Badges - React + Tailwind | LodeX Studio
        </title>
        <meta
          name="description"
          content="Aprenda a criar um card responsivo com badges usando React e Tailwind. Inclui hover animado, responsividade e design moderno passo a passo."
        />
        <meta
          name="keywords"
          content="React, Tailwind, card responsivo, badges, UI components, web design, frontend"
        />

        {/* Open Graph */}
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

      <section className="min-h-[95vh] border-b shadow-md">
        <GlobalContainer>
          <div className="flex items-center justify-center py-[9.6rem] px-[19%]">
            <div className="flex-col text-start ">
              <div className="mb-10">
                <h1 className="text-xl sm:text-4xl md:text-6xl font-light text-gray-900 leading-relaxed max-w-4xl">
                  Card Responsivo com Hover Animado usando React + TailwindCSS
                </h1>
                <p className="mt-6 mb-2 text-base lg:text-2xl text-slate-500 leading-relaxed max-w-3xl font-light">
                  Um componente elegante e flexível, feito com React +
                  TailwindCSS, com badges dinâmicas e efeito de hover suave para
                  destacar o CTA. Totalmente responsivo, mobile-first e criado
                  em menos de 200 linhas de código.
                </p>
              </div>

              <div className="flex mt-4 mb-10">
                {Avatar.map((avt, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-center gap-3"
                  >
                    <div className="flex items-center justify-center w-16 h-16 bg-terciario rounded-full group-hover:shadow-lg">
                      <img
                        src={avt.foto}
                        alt="avatar"
                        className="size-7 bg-no-repeat"
                      />
                    </div>
                    <div className="flex flex-col text-gray-700 text-base group-hover:text-gray-500">
                      <p className="text-lg font-light text-terciario">
                        {avt.autor}
                      </p>
                      <p className="text-base text-slate-500 font-light">
                        {avt.date}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="">
                <img
                  src="images/blog/cad-responsivo-differ.jpg"
                  alt=""
                  className="rounded-lg mb-10"
                />

                <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed text-slate-700 font-light mb-10">
                  Um card visual é um componente essencial na construção de
                  interfaces modernas. Ele deve ser claro, organizado e
                  convidativo, usando hierarquia visual para guiar o usuário.
                  <br />
                  <br />
                  No card da direita, os ícones e etiquetas ajudam a identificar
                  rapidamente o conteúdo, o espaçamento torna a leitura fácil, e
                  o design moderno (com cantos arredondados e sombras suaves)
                  cria uma experiência agradável.
                  <br />
                  <br />
                  Um card responsivo e interativo não só valoriza o conteúdo
                  como aumenta o engajamento do usuário e melhora a usabilidade
                  em qualquer dispositivo. Este é o tipo de componente que dá
                  vida ao design e melhora a experiência do utilizador sem
                  complicações no código.
                  <br />
                  <br />E qual é a melhor maneira de aprender? Fazendo. Então,
                  vamos mergulhar em algumas dicas práticas de design de
                  interface do utilizador.
                </p>
              </div>

              <hr className="mb-10" />

              <div>
                <h1 className="text-xl sm:text-3xl md:text-4xl font-light text-gray-900 leading-relaxed mb-10">
                  Tutorial passo a passo
                </h1>

                <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed text-slate-700 font-light mb-10">
                  Neste tutorial, vamos criar um card moderno, responsivo e com
                  efeito de hover animado, utilizando{" "}
                  <a
                    href="https://react.dev/learn"
                    target="_blank"
                    className="font-medium underline hover:text-slate-500"
                  >
                    React
                  </a>{" "}
                  e{" "}
                  <a
                    href="https://tailwindcss.com/"
                    target="_blank"
                    className="font-medium underline hover:text-slate-500"
                  >
                    TailwindCSS
                  </a>
                  . O objetivo é que qualquer pessoa, mesmo com pouca
                  experiência, consiga implementar um componente bonito e
                  funcional para portfólios, lojas virtuais, landing pages e
                  blogs.
                </p>
              </div>

              <div className="mb-10">
                <ul className="space-y-4 text-left text-gray-500 dark:text-gray-400">
                  <h1 className="flex items-center justify-start gap-1 text-[#6a7282] font-[500] text-sm">
                    <RxDrawingPinFilled className="text-secundario" />{" "}
                    Pré-requisitos
                  </h1>
                  <li className="flex items-center space-x-3 rtl:space-x-reverse">
                    <span className="size-5 flex justify-center items-center rounded-full bg-blue-50 text-secundario">
                      <svg
                        className="shrink-0 size-3.5"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </span>
                    <span className="text-sm">
                      Conhecimento básico de{" "}
                      <strong className="text-secundario">React </strong>e
                      <strong className="text-secundario"> JavaScript</strong>
                    </span>
                  </li>

                  <li className="flex items-center space-x-3 rtl:space-x-reverse">
                    <span className="size-5 flex justify-center items-center rounded-full bg-blue-50 text-secundario">
                      <svg
                        className="shrink-0 size-3.5"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </span>
                    <span className="text-sm ">
                      Noções de{" "}
                      <strong className="text-secundario">React</strong>{" "}
                      (componentes, props, JSX)
                    </span>
                  </li>

                  <li className="flex items-center space-x-3 rtl:space-x-reverse">
                    <span className="size-5 flex justify-center items-center rounded-full bg-blue-50 text-secundario">
                      <svg
                        className="shrink-0 size-3.5"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </span>
                    <span className="text-sm">
                      <strong className="text-secundario">TailwindCSS</strong>{" "}
                      instalado no projeto
                    </span>
                  </li>

                  <li className="flex items-center space-x-3 rtl:space-x-reverse">
                    <span className="size-5 flex justify-center items-center rounded-full bg-blue-50 text-secundario">
                      <svg
                        className="shrink-0 size-3.5"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </span>
                    <span className="text-sm">
                      Editor de código (recomendo{" "}
                      <strong className="text-secundario">VS Code</strong>)
                    </span>
                  </li>
                </ul>
              </div>

              <hr className="mb-10" />

              {/* PARTE 1 */}
              <div>
                <h1 className="text-xl sm:text-3xl md:text-4xl font-light text-gray-900 leading-relaxed mb-10">
                  <strong>Passo 1</strong> — Criar o projeto com React e
                  TailwindCSS
                </h1>

                <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed text-slate-700 font-light mb-10">
                  <strong className="font-medium">🎯 Objetivo:</strong> Criar a
                  base do projeto onde o card será construído.
                </p>

                <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed text-slate-700 font-medium mb-2">
                  O que vamos fazer:
                </p>

                <ol className="list-decimal font-semibold text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed text-slate-700 mb-5 max-w-3xl space-y-1 list-inside dark:text-gray-400">
                  <li className="font-medium">
                    <span className="font-light">
                      Criar projeto React com Vite
                      <strong className="font-medium">Vite</strong>
                    </span>
                  </li>
                  <li className="font-medium">
                    <span className="font-light">
                      Instalar e configurar TailwindCSS
                      <strong className="font-medium">TailwindCSS </strong>
                    </span>
                  </li>
                </ol>

                <hr className="mb-10" />

                <h1 className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed text-slate-700 font-semibold mb-2">
                  💻 Código
                </h1>

                {/* Criar projeto React com Vite */}
                <div className="w-full mx-auto bg-gray-100 p-5 rounded-xl mb-2">
                  <p className="text-base leading-relaxed text-slate-700 font-[400] mb-10">
                    <span className="text-gray-400 font-[500] tracking-wide text-sm italic">
                      # Criar projeto React com Vite
                    </span>
                    <br />
                    npm create vite@latest card-tailwind
                    <br />
                    <span className="text-yellow-500">cd</span> card-tailwind
                  </p>

                  <p className="text-base leading-relaxed text-slate-700 font-[400]">
                    <span className="text-gray-400 font-[500] tracking-wider text-sm italic">
                      # Instalar TailwindCSS
                    </span>
                    <br />
                    npm install -D tailwindcss postcss autoprefixer
                    <br />
                    npx tailwindcss init -p
                  </p>
                </div>

                {/* tailwind.config.js */}
                <div className="w-full mx-auto bg-gray-100 p-5 rounded-xl mb-2">
                  <p className="text-base leading-relaxed text-slate-700 font-[400]">
                    <span className="text-gray-400 font-[500] tracking-wide text-sm italic">
                      // tailwind.config.js
                    </span>
                    <br />
                    <span className="text-yellow-600 font-regular text-sm">
                      {`module`}
                    </span>
                    <span className="font-regular text-sm">{`.exports = {`}</span>
                    <br />
                    <span className="text-yellow-600 ml-5 font-regular text-sm">
                      {`content`}
                    </span>
                    <span className="font-regular text-sm">{`: [`}</span>
                    <span className="font-regular text-sm text-green-600 tracking-wide">
                      {` "./index.html", "./src/**/*.{js,jsx}" `}
                    </span>
                    <span className="font-regular text-sm tracking-widest">{`],`}</span>
                    <br />
                    <span className="text-yellow-600 ml-5 font-regular text-sm">
                      {`theme`}
                    </span>
                    <span className="font-regular text-sm">{`: {`}</span>
                    <span className="font-regular text-sm text-yellow-600 tracking-wide">
                      {` extend`}
                    </span>
                    <span className="font-regular text-sm tracking-widest">{`: { } },`}</span>
                    <br />
                    <span className="text-yellow-600 ml-5 font-regular text-sm">
                      {`plugins`}
                    </span>
                    <span className="font-regular text-sm">{`: [ ],`}</span>
                    <br />
                    <span className="font-regular text-sm">{`}`}</span>
                  </p>
                </div>

                {/* index.css */}
                <div className="w-full mx-auto bg-gray-100 p-5 rounded-xl mb-2">
                  <p className="text-base leading-relaxed text-slate-700 font-[400]">
                    <span className="text-gray-400 font-[500] tracking-wide text-sm italic">
                      /* index.css */
                    </span>
                    <br />
                    <span className="text-purple-600 font-regular text-sm">
                      {`@tailwind `}
                    </span>
                    <span className="font-regular text-sm">{`base;`}</span>
                    <br />
                    <span className="text-purple-600 font-regular text-sm">
                      {`@tailwind `}
                    </span>
                    <span className="font-regular text-sm">{`components;`}</span>
                    <br />
                    <span className="text-purple-600 font-regular text-sm">
                      {`@tailwind `}
                    </span>
                    <span className="font-regular text-sm">{`utilities;`}</span>
                  </p>
                </div>

                <hr className="my-10" />

                <h2 className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed text-slate-700 font-semibold mb-2">
                  💡 Teste agora!
                </h2>

                <p className="text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed text-slate-700 font-light mb-10">
                  Executa{" "}
                  <span className="bg-gray-100 rounded-md px-1 font-medium text-base">
                    npm run dev
                  </span>{" "}
                  e confirma que o Tailwind está a aplicar estilos.
                </p>
              </div>

              <hr className="my-10" />

              {/* PARTE 2 */}
              <div>
                <h1 className="text-xl sm:text-3xl md:text-4xl font-light text-gray-900 leading-relaxed mb-10">
                  <strong>Passo 2</strong> — Estrutura do Componente Base{" "}
                  <strong>("Antes")</strong>
                </h1>

                <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed text-slate-700 font-light mb-10">
                  <strong className="font-medium">🎯 Objetivo:</strong> Criar um
                  card simples, sem efeitos, para servir de ponto de partida.
                </p>

                <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed text-slate-700 font-medium mb-2">
                  O que vamos fazer:
                </p>

                <ol className="list-decimal font-semibold text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed text-slate-700 mb-5 max-w-3xl space-y-1 list-inside dark:text-gray-400">
                  <li className="font-medium ">
                    <span className="font-light">
                      Criar ficheiro
                      <span className="bg-gray-100 font-medium text-base px-1 rounded-md ml-1">
                        Card.jsx
                      </span>
                    </span>
                  </li>
                  <li className="font-medium">
                    <span className="font-light">
                      Adicionar imagem, título e descrição
                      <strong className="font-medium">TailwindCSS </strong>
                    </span>
                  </li>
                  <li className="font-medium">
                    <span className="font-light">
                      Aplicar classes básicas do TailwindCSS
                      <strong className="font-medium">TailwindCSS </strong>
                    </span>
                  </li>
                </ol>

                <hr className="mb-10" />

                <h1 className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed text-slate-700 font-semibold mb-2">
                  💻 Código (resumo)
                </h1>

                {/* tailwind.config.js */}
                <div>
                  <CodeBlock
                    language={blocoParte2.language}
                    code={blocoParte2.code}
                  />
                </div>

                <hr className="my-10" />

                <div className="-mt-10 ">
                  <img
                    src="images/blog/card-base2.jpg"
                    alt=""
                    className="w-96 mx-auto h-full object-cover"
                  />

                  <h2 className="text-base leading-relaxed text-slate-700  mb-2">
                    <span className="font-semibold">💡Nota:</span> Funciona, mas
                    não chama atenção. Falta dinamismo e elementos de destaque.
                  </h2>
                </div>
              </div>

              <hr className="my-10" />

              {/* PARTE 3 */}
              <div>
                <h1 className="text-xl sm:text-3xl md:text-4xl font-light text-gray-900 leading-relaxed mb-10">
                  <strong>Passo 3</strong> — De simples a profissional:
                  adicionando badges, efeitos e ação
                </h1>

                <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed text-slate-700 font-light mb-10">
                  Até aqui, o nosso card era só uma imagem e texto. Agora é hora de dar vida a ele: <br /> — vamos adicionar badges dinâmicos para mostrar as tecnologias usadas <br />e preparar espaço para ações interativas.
                </p>

                <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed text-slate-700 font-light mb-10">
                  <strong className="font-medium">🎯 Objetivo:</strong> Tornar o
                  card dinâmico e atrativo.
                </p>

                <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed text-slate-700 font-medium mb-2">
                  O que vamos fazer agora:
                </p>

                <ol className="list-decimal font-semibold text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed text-slate-700 mb-5 max-w-3xl space-y-1 list-inside dark:text-gray-400">
                  <li className="font-medium ">
                    <span className="font-light">
                      Criar um componente<span className="font-medium"> Badges</span> separado, que recebe ícone, nome e link.
                    </span>
                  </li>
                  <li className="font-medium">
                    <span className="font-light">
                      Aplicar cores diferentes automaticamente conforme a tecnologia.
                    </span>
                  </li>
                </ol>

                <hr className="mb-10" />

                <h1 className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed text-slate-700 font-semibold mb-2">
                  💻 Código parcial <span className="font-light">(somente o Badge, sem o card completo):</span>
                </h1>

                {/* tailwind.config.js */}
                <div>
                  <CodeBlock
                    language={blocoParte3.language}
                    code={blocoParte3.code}
                  />
                </div>

                <hr className="my-10" />

                <div className="-mt-10 ">
                  <img
                    src="images/blog/antes-depois-1.jpg"
                    alt=""
                    className="w-full mx-auto h-full object-cover pt-10 rounded-lg rounded-t-lg"
                  />

                  <h2 className="text-base leading-relaxed text-slate-700  my-2">
                    <span className="font-semibold">💡 Porquê isto importa?</span> <br /> Badges dão credibilidade e clareza ao card. O leitor sabe rapidamente quais tecnologias estão por trás, e o design ganha um toque mais profissional.
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </GlobalContainer>
      </section>
    </>
  );
}

export default CardResponsivo;
