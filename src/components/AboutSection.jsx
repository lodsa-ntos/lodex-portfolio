import React from "react";
import GlobalContainer from "../utils/GlobalContainer";
import me from "../assets/me/about-photo.svg";

function AboutSection() {
  return (
    <section
      id="sobremim"
      className="min-h-screen  bg-gradient-to-b from-[#f4f8ff] via-primario-claro to-neutro-claro"
    >
      <GlobalContainer>
        <div className="flex flex-col items-center justify-center text-center mb-8">
          {/* Top Line */}
          <div className="w-28 h-[4px] rounded-full bg-primario mb-2"></div>
          {/* Main title */}
          <h1 className="text-sm uppercase font-bold text-secundario tracking-wider mb-4">
            Sobre mim
          </h1>
          {/* Title */}
          <h2 className="text-3xl font-black mb-2 text-primario transition-colors duration-500">
            Cada linha de código deve resolver algo que importa.
          </h2>
          {/* Subtitle */}
          <h3 className="text-xl md:text-2xl font-black text-gray-900">
            Interfaces bem feitas não são só bonitas <br /> resolvem,
            simplificam e escalam.
          </h3>
        </div>

        <div className="flex flex-col-reverse lg:flex-row gap-y-10 lg:gap-x-16 items-center">
          {/* Right Side - Texto */}
          <div className="max-w-2xl text-gray-800 text-left sm:text-justify leading-relaxed">
            <h1 className="mb-4 text-3xl font-bold text-gray-800">
              Olá! Sou o Lodney Santos
            </h1>

            <h2 className="mb-4 text-lg font-semibold text-primario bg-primario-claro">
              <span className="text-primario font-semibold">
                Frontend Developer
              </span>
            </h2>

            <p className="mb-6">
              Sou focado em criar experiências digitais que entregam valor real. Para mim, tecnologia não é sobre linhas de código, mas sobre encontrar soluções simples para problemas concretos.
              <br />
              <br />
              Comecei no desenvolvimento por curiosidade, mas fiquei por
              convicção. Hoje, trabalho com React, Tailwind e um foco especial em performance e usabilidade. Acredito que um bom produto começa com empatia e termina com clareza.
              <br />
              <br />
              Não tento reinventar a roda — quero fazê-la girar melhor. Nem tudo foi linear. Tive dificuldades na faculdade, cometi muitos erros e demorei mais do que o esperado. Mas terminei. E hoje sigo com a mesma teimosia que me fez ficar até ao fim. Não escondo isso — faz parte do que sou como profissional. Persisto. Aprendo. E continuo a construir, um pixel e uma linha de código de cada vez.
            </p>
          </div>

          {/* Left Side - Foto */}
          <img
            src={me}
            alt="Lodney Santos, Frontend Developer, UI/UX designer"
            className="w-52 sm:w-80 aspect-square rounded-2xl object-cover mx-auto bg-gradient-to-b from-primario-claro shadow-lg hover:scale-105 hover:brightness-105 hover:contrast-100 hover:shadow-xl transform transition-all duration-500"
          />
        </div>
      </GlobalContainer>
    </section>
  );
}

export default AboutSection;
