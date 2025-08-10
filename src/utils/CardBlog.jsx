import React from "react";
import { HiMiniArrowTopRightOnSquare } from "react-icons/hi2";
import { PiDotDuotone } from "react-icons/pi";
import { RiTailwindCssFill } from "react-icons/ri";
import { DiResponsive } from "react-icons/di";
import { FaReact } from "react-icons/fa";
import imgAvatar from "../assets/logo/lodexstudio-logo-white.svg";

const day = new Date().toLocaleDateString("pt-PT", { day: "2-digit" });
const month = new Date().toLocaleDateString("pt-PT", { month: "long" });
const year = new Date().toLocaleDateString("pt-PT", { year: "numeric" });

const generalDate = `${day} ${month} ${year}`;

const cardData = [
  {
    id: 1,
    img: "images/blog/cad-responsivo.jpg",
    title: "Card Responsivo com Hover Animado",
    description:
      "Aprenda a criar um card moderno e responsivo em menos de 200 linhas de código usando React + TailwindCSS.",
    Avatar: [
      {
        foto: imgAvatar,
        profileFoto: "",
        autor: "LodeX Studio",
        date: generalDate,
      },
    ],

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

// Badge Component
const Badge = ({ icon, label, link }) => {
  return (
    <a
      className={`flex items-center gap-0.5 rounded-full px-2 py-[0.5px] text-xs font-medium font-Satoshi tracking-tight ring-1 ring-inset leading-relaxed transition-transform duration-500 ease-in-out

    ${
      label === "React.js"
        ? "bg-blue-50 text-blue-600 ring-blue-700/10"
        : label === "TailwindCSS"
        ? "bg-cyan-50 text-[#38bdf8] ring-[#38bdf8]/10"
        : label === "Responsive"
        ? "bg-purple-50 text-purple-600 ring-purple-700/10"
        : label === "Mobile-First UI"
        ? "bg-gray-50 text-gray-600 ring-gray-700/10"
        : label === "Framer Motion"
        ? "bg-pink-50 text-pink-600 ring-pink-700/10"
        : label === "SEO Optimized"
        ? "bg-red-50 text-red-600 ring-red-700/10"
        : "bg-gray-50 text-gray-600 ring-gray-700/10"
    }
  `}
      href={link}
      target="_blank"
      rel="noopener noreferrer"
    >
      {icon} {label}
    </a>
  );
};

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
                  className="relative flex flex-col transition-shadow duration-500 overflow-hidden rounded-xl shadow-md"
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

                {/* Card content */}
                <div className="flex flex-col justify-between flex-1 pt-4">
                  <div className="flex items-center gap-3 flex-wrap">
                    {card.Badge &&
                      card.Badge.map((badge, index) => (
                        <Badge
                          key={index}
                          icon={badge.icon}
                          color={badge.color}
                          label={badge.label}
                          link={badge.link}
                        />
                      ))}
                  </div>
                </div>

                <div className="py-2 justify-between flex-1 items-start">
                  <h5 className="sm:text-sm md:text-base lg:text-lg text-start font-bold font-Satoshi leading-tight mb-3">
                    {card.title}
                  </h5>
                  <p className="text-start font-Satoshi text-sm text-gray-500">
                    {card.description}
                  </p>
                </div>

                <div className="flex">
                  {card.Avatar.map((avt, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-center gap-2"
                    >
                      <div className="flex items-center justify-center w-8 h-8 bg-terciario rounded-full">
                        <img src={avt.foto} alt="avatar" className="size-4" />
                      </div>
                      <div className="flex ">
                        {avt.autor}{" "}
                        <PiDotDuotone className="size-6 text-secundario" />{" "}
                        {avt.date}
                      </div>
                    </div>
                  ))}
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
