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
                    <span class="size-5 flex justify-center items-center rounded-full bg-blue-50 text-secundario">
                      <svg
                        class="shrink-0 size-3.5"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
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
                    <span class="size-5 flex justify-center items-center rounded-full bg-blue-50 text-secundario">
                      <svg
                        class="shrink-0 size-3.5"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
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
                    <span class="size-5 flex justify-center items-center rounded-full bg-blue-50 text-secundario">
                      <svg
                        class="shrink-0 size-3.5"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
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
                    <span class="size-5 flex justify-center items-center rounded-full bg-blue-50 text-secundario">
                      <svg
                        class="shrink-0 size-3.5"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
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

              <div>
                <h1 className="text-xl sm:text-3xl md:text-4xl font-light text-gray-900 leading-relaxed mb-10">
                  <strong>Passo 1</strong> — Criar o projeto com React e
                  TailwindCSS
                </h1>

                <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed text-slate-700 font-light mb-3">
                  Se ainda não tiver um projeto, crie um novo com{" "}
                  <a
                    href="https://vite.dev/guide/"
                    target="_blank"
                    className="font-medium underline hover:text-slate-500"
                  >
                    Vite
                  </a>{" "}
                  (mais rápido que o create-react-app):
                </p>

                <div className="w-full mx-auto bg-slate-100 p-5 rounded-xl mb-2">
                  <p className="text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed text-slate-700 font-light">
                    npm create vite@latest card-tutorial <br />
                    <span className="text-yellow-500">
                      cd
                    </span> card-tutorial <br />
                    npm install
                  </p>
                </div>
                <p className="px-5 text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed text-slate-700 font-light mb-10">
                  Escolha{" "}
                  <a
                    href="https://react.dev/learn"
                    target="_blank"
                    className="font-medium underline hover:text-slate-500"
                  >
                    React
                  </a>{" "}
                  e{" "}
                  <a
                    href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript"
                    target="_blank"
                    className="font-medium underline hover:text-slate-500"
                  >
                    JavaScript
                  </a>{" "}
                  quando o terminal perguntar.
                </p>
              </div>

              <div className="mb-10">
                <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed text-slate-700 font-light mb-3">
                  Depois, instale o TailwindCSS:
                </p>

                <div className="w-full mx-auto bg-slate-100 p-5 rounded-xl mb-2">
                  <p className="text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed text-slate-700 font-light">
                    npm install -D tailwindcss postcss autoprefixer <br />
                    npx tailwindcss init -p
                  </p>
                </div>
              </div>

              <div className="mb-10">
                <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed text-slate-700 font-light">
                  Edite o ficheiro{" "}
                  <span className="w-fit bg-slate-100 p-0.5 rounded-lg font-regular text-base font-[400]">
                    tailwind.config.js
                  </span>{" "}
                  para incluir os paths do seu código:
                </p>

                <img src="images/blog/tailwind-config-blog.svg" alt="" />
              </div>

              <div className="mb-10">
                <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed text-slate-700 font-light">
                  No ficheiro{" "}
                  <span className="w-fit bg-slate-100 p-0.5 rounded-lg font-regular text-base font-[400]">
                    src/index.css
                  </span>
                  , substitua o conteúdo por:
                </p>

                <img src="images/blog/src_index.css-blog.png" alt="" />
                <p className="px-5 text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed text-slate-700 font-light mb-10">
                  Pronto! Agora temos um projeto React com Tailwind pronto para
                  uso.
                </p>
              </div>

              <hr className="mb-10" />

              <div className="mb-10">
                <h1 className="text-xl sm:text-3xl md:text-4xl font-light text-gray-900 leading-relaxed mb-10">
                  <strong>Passo 2</strong> — Estrutura do Componente Base{" "}
                  <strong>(Versão "Antes")</strong>
                </h1>

                <div className="mb-10">
                  <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed text-slate-700 font-light">
                    Crie o ficheiro{" "}
                    <span className="w-fit bg-slate-100 p-0.5 rounded-lg font-regular text-base font-[400]">
                      Card.jsx
                    </span>{" "}
                    dentro de{" "}
                    <span className="w-fit bg-slate-100 p-0.5 rounded-lg font-regular text-base font-[400]">
                      src/components/
                    </span>
                    :
                  </p>

                  <div className="grid grid-cols-1 lg:grid-cols-2">
                    <img
                      src="images/blog/Card.jsx-blog.png"
                      alt=""
                      className="w-96 h-full"
                    />

                    <img
                      src="images/blog/card-base.jpg"
                      alt=""
                      className="w-full h-full object-contain"
                    />
                  </div>

                  <p className="px-5 text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed text-slate-700 font-light mb-10">
                    Nesse momento, temos um card simples, sem animações nem
                    badges. Ele funciona, mas ainda não chama atenção.
                    <br />
                    <br />
                    O card atual cumpre o seu papel: apresenta uma imagem, um
                    título e uma breve descrição. Porém, visualmente, ele ainda
                    é comum e não se destaca na página.
                    <br />
                    <br />
                    O utilizador não tem pistas rápidas sobre o que é importante
                    aqui, ou seja, é só mais um bloco de texto com uma foto.
                    Falta um elemento de identidade visual e interação que
                    mostre de cara do que se trata e que dê vontade de clicar.
                    <br />
                    <br />É aqui que entram os badges (etiquetas) e o efeito de
                    destaque: eles funcionam como "micro-pistas visuais" que
                    guiam o olhar do visitante e transmitem informações-chave de
                    forma instantânea. Além disso, criam um design mais
                    profissional e moderno.
                  </p>
                </div>
              </div>

              <hr className="mb-10" />

              <div className="mb-10">
                <h1 className="text-xl sm:text-3xl md:text-4xl font-light text-gray-900 leading-relaxed mb-10">
                  <strong>Passo 3</strong> — De simples a profissional:
                  adicionando badges, efeitos e ação
                </h1>
              </div>
            </div>
          </div>
        </GlobalContainer>
      </section>
    </>
  );
}

export default CardResponsivo;
