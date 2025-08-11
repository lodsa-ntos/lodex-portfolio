import React from "react";
import { Helmet } from "react-helmet";
import GlobalContainer from "../../../utils/GlobalContainer";
import { PiDotDuotone } from "react-icons/pi";
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
                <h2 className="text-xl sm:text-4xl md:text-6xl font-light text-gray-900 leading-relaxed max-w-4xl">
                  Card Responsivo com Hover Animado usando React + TailwindCSS
                </h2>
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
                <img src="images/blog/cad-responsivo-differ.jpg" alt="" className="rounded-lg mb-10"/>

                <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed text-slate-700 font-light mb-10">
                    Um card visual é um componente essencial na construção de interfaces modernas. Ele deve ser claro, organizado e convidativo, usando hierarquia visual para guiar o usuário. 
                    <br /><br />
                    No card da direita, os ícones e etiquetas ajudam a identificar rapidamente o conteúdo, o espaçamento torna a leitura fácil, e o design moderno (com cantos arredondados e sombras suaves) cria uma experiência agradável. 
                    <br /><br />
                    Um card responsivo e interativo não só valoriza o conteúdo como aumenta o engajamento do usuário e melhora a usabilidade em qualquer dispositivo.
                </p>
              </div>
            </div>
          </div>
        </GlobalContainer>
      </section>
    </>
  );
}

export default CardResponsivo;
