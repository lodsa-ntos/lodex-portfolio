import React from "react";
import reactjs from "../assets/expertises/react.svg";
import tailwindcss from "../assets/expertises/tailwindcss.svg";
import uxuidesigner from "../assets/expertises/uxuidesigner.svg";
import framermotion from "../assets/expertises/framermotion.svg";
import js from "../assets/expertises/javascript.svg";
import vite from "../assets/expertises/vite.svg";

function ExpertiseSection() {
  const companies = [
    { Icon: reactjs, href: "https://reactjs.org/", title: "ReactJS" },
    {
      Icon: tailwindcss,
      href: "https://tailwindcss.com/",
      title: "Tailwind CSS",
    },
    { Icon: uxuidesigner, href: "https://www.uxuidesigner.com/" },
    {
      Icon: framermotion,
      href: "https://www.framer.com/motion/",
      title: "Framer Motion",
    },
    {
      Icon: js,
      href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
      title: "JavaScript",
    },
    { Icon: vite, href: "https://vitejs.dev/", title: "Vite" },
  ];

  return (
    <section className="lg:py-20">
      <div className="w-full max-w-[1400px] mx-auto px-4">
        <div className="flex items-center gap-4 mb-10">
          <h2 className="text-xl font-bold whitespace-nowrap text-terciario tracking-tight">
            Stack principal
          </h2>
          <div className="w-px h-8 bg-primario" />
          <div className="md:h-px md:flex-grow md:bg-gray-200" />
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 text-center gap-8">
          {companies.map(({ Icon, href, title = "" }, i) => (
            <div
              key={i}
              className="flex items-center justify-center cursor-pointer text-center"
            >
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-center grayscale hover:grayscale-0 hover:scale-110 transition-transform duration-500"
              >
                <img
                  src={Icon}
                  alt={title}
                  className="w-14 h-14 flex items-center justify-center mx-auto"
                />
                {title && (
                  <span className="flex items-center justify-center mt-2 text-xs text-center font-medium text-gray-700 ">
                    {title}
                  </span>
                )}
              </a>
            </div>
          ))}
        </div>
        <p className="text-center mt-8 text-sm text-gray-600">
          Tecnologias que uso com frequência — sempre aberto a aprender novas
          ferramentas.
        </p>
      </div>
    </section>
  );
}

export default ExpertiseSection;
