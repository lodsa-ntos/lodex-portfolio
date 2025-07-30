import React from "react";
import { BsBoxArrowInUpRight } from "react-icons/bs";

function ProjectCard({
  title,
  description,
  primaryImg,
  hoverImg,
  iconBadges,
  labelBadges,
  bagdeStyle,
  link,
  techIcons,
  linkExternal
}) {
  return (
    <a href={link} target={linkExternal} rel="noopener noreferrer">
      <div className="w-full h-full rounded-md overflow-hidden shadow-sm bg-[#f6f6f6] transition-all group">
        {/* Imagens com proporção fixa */}
        <div className="aspect-[16/10] w-full relative">
          {/* Seta flutuantes */}
          <div className="absolute top-2 right-3 bg-secundario/80 backdrop-blur-lg rounded-full shadow-xl w-8 h-8 flex items-center justify-center z-50 transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition duration-500">
            <BsBoxArrowInUpRight className="text-white" />
          </div>

          <img //imagem principal
            src={primaryImg}
            alt={title}
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
          />
          <img //imagem hover
            src={hoverImg}
            alt={title + " hover"}
            className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          />
        </div>

        {/* Conteúdo textual */}
        <div className="p-4 flex flex-col gap-2">
          <div className="flex items-center flex-nowrap justify-between">
            <div className="flex whitespace-nowrap items-center justify-center gap-2 text-base">
              {title} {techIcons}
            </div>
            <div className={bagdeStyle}>
              {iconBadges} {labelBadges}
            </div>
          </div>

          <p className="text-[#888888] leading-normal text-xs">{description}</p>
        </div>
      </div>
    </a>
  );
}

export default ProjectCard;
