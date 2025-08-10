import React from "react";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { DiResponsive } from "react-icons/di";
import { HiMiniArrowTopRightOnSquare } from "react-icons/hi2";

const cardData = [
  {
    img: "images/blog/office3.jpg",
    title: "Card Responsivo com Hover Animado",
    description:
      "Um componente elegante e flexível, feito com React + TailwindCSS, com badges dinâmicas e efeito de hover suave para destacar o CTA. Totalmente responsivo, mobile-first e criado em menos de 200 linhas de código.",
    Badge: [
      {
        icon: <FaReact className="w-4 h-4" />,
        label: "React.js",
        link: "https://react.dev/",
      },
      {
        icon: <RiTailwindCssFill className="w-4 h-4" />,
        label: "TailwindCSS",
        link: "https://tailwindcss.com/",
      },
      {
        icon: <DiResponsive className="w-4 h-4" />,
        label: "Responsive",
        link: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/CSS_layout/Responsive_Design",
      },
    ],
  },
];

function CardBlog() {
  return (
    <section id="examples" className="w-full">
      <div className=" mx-auto pt-10 text-center">
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-8">
          {cardData.map((card, index) => (
            <>
              <div className="group cursor-pointer">
                <div
                  key={index}
                  className="relative flex flex-col transition-shadow duration-500  overflow-hidden rounded-xl "
                >
                  <img
                    className="w-full h-[240px] rounded-xl object-cover transition-transform duration-500 group-hover:scale-105 group-hover:rounded-xl"
                    src={card.img}
                    alt={`example-${index + 1}`}
                  />

                  {/* CTA button */}
                  <div className="absolute top-2 right-3 bg-white backdrop-blur-lg rounded-full shadow-xl w-8 h-8 flex items-center justify-center z-50 transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition duration-500 border-2 border-secundario">
                    <HiMiniArrowTopRightOnSquare className="size-5 text-secundario" />
                  </div>
                </div>

                <div className="py-4 justify-between flex-1 items-start">
                  <h5 className="sm:text-sm md:text-base lg:text-lg text-start font-bold font-Satoshi leading-tight mb-3">
                    {card.title}
                  </h5>
                  <p className="text-start font-Satoshi text-sm text-gray-500">
                    {card.description}
                  </p>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CardBlog;
