import React from "react";
import GlobalContainer from "../../utils/GlobalContainer";
import { PiWallDuotone } from "react-icons/pi";
import { MdOutlineDesignServices } from "react-icons/md";
import { MdImportantDevices } from "react-icons/md";
import { PiRocketLaunchDuotone } from "react-icons/pi";
import { VscCompassDot } from "react-icons/vsc";
import { SiLibreofficewriter } from "react-icons/si";
import { BubblyLink } from "../../library/BubblyLink";
import me from "../../assets/me/about-photo.svg";
import { Helmet } from "react-helmet";

function SobreMim() {
  return (
    <>
      <Helmet>
        <title>About — LodeX Studio</title>
        <meta
          name="description"
          content="I help freelancers and entrepreneurs build clean, fast websites that communicate clearly and convert. Frontend developer and UI/UX designer."
        />
        <meta
          name="keywords"
          content="about Lodney Santos, about LodeX Studio, frontend developer, UI/UX designer, freelancer websites"
        />
      </Helmet>

      <HeroSection />
      <WhatIDoSection />
      <ForWhomSection />
      <WhySection />
      <CallToActionSection />
    </>
  );
}

/* Sub‑components */

const HeroSection = () => (
  <section
    id="sobremim"
    className="min-h-[95vh] lg:min-h-[70vh] 2xl:min-h-[35vh] pt-36 border-b shadow-md bg-gray-50"
  >
    <GlobalContainer>
      <div className="flex flex-col items-start justify-start mb-2">
        <h1 className="text-sm font-bold uppercase text-secundario subpixel-antialiased tracking-[2px] mb-1">
          About
        </h1>
        <h2 className="text-5xl tracking-tighter font-semibold text-primario subpixel-antialiased">
          <span className="text-primario font-semibold">Where design</span>
          <span className="text-[#757575]"> meets </span>
          persistence
        </h2>
      </div>

      <div className="flex flex-col-reverse lg:flex-row gap-y-10 lg:gap-x-16 items-center">
        <div className="text-gray-800 text-left leading-relaxed">
          <h1 className="mb-6 text-2xl font-bold text-[#757575] subpixel-antialiased">
            Lodney Santos — Frontend Developer &<br /> UI/UX Designer
          </h1>

          <p className="max-w-xl mb-20 lg:mb-6 font-light text-xl leading-relaxed subpixel-antialiased">
            I’ve always been curious about how things work — taking computers apart,
            studying interfaces, and finding the logic most people don’t see. In digital
            design I found the place where form meets structure. Today I’m a frontend
            developer and UI/UX designer who turns ideas into clear, fast, and expressive
            web experiences.
            <br />
            <br />
            I help freelancers, founders, and small businesses shape early ideas into
            something real — usable, beautiful, and ready to ship. My focus is simple:
            clarity, momentum, and outcomes.
          </p>
        </div>

        <img
          src={me}
          alt="Lodney Santos — frontend developer and UI/UX designer"
          className="w-64 mt-28 sm:w-80 aspect-square rounded-2xl object-cover mx-auto bg-gradient-to-b from-primario-claro shadow-lg hover:scale-105 hover:brightness-105 hover:contrast-100 hover:shadow-xl -translate-y-16 transform transition-all duration-500"
        />
      </div>
    </GlobalContainer>
  </section>
);

const whatIDoItems = [
  {
    icon: <PiWallDuotone className="size-10 text-gray-500" />,
  title: "I build",
  text: "Websites and interfaces tailored to your idea and audience — no templates.",
  },
  {
    icon: <MdOutlineDesignServices className="size-10 text-gray-500" />,
  title: "I design",
  text: "Functional prototypes and interfaces with structure, hierarchy, and visual intent.",
  },
  {
    icon: <MdImportantDevices className="size-10 text-gray-500" />,
  title: "I develop",
  text: "Frontend with React and Tailwind, with smooth motion using Framer Motion.",
  },
  {
    icon: <PiRocketLaunchDuotone className="size-10 text-gray-500" />,
  title: "I launch",
  text: "Turn early ideas into MVPs — simple, lean, and ready to go live.",
  },
  {
    icon: <VscCompassDot className="size-10 text-gray-500" />,
  title: "I guide",
  text: "Hands-on guidance to define what to build — even before writing code.",
  },
];

const WhatIDoSection = () => (
  <section id="Oquefaco" className="pb-32 pt-20 border-b">
    <GlobalContainer>
      <div className="mb-16">
        <h2 className="mb-6 text-4xl font-light text-[##333333] subpixel-antialiased text-center">
      I give shape to what’s <br />
      still only in your head.
        </h2>
      </div>

    <DividerLabel label="What I do" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mt-4">
        {whatIDoItems.map(({ icon, title, text }) => (
          <InfoCard key={title} icon={icon} title={title} text={text} />
        ))}
      </div>
    </GlobalContainer>
  </section>
);

const ForWhomSection = () => (
  <section
    id="paraqueme"
    className="min-h-[95vh] lg:min-h-[95vh] 2xl:min-h-[35vh] pb-20 pt-16 lg:pb-0 lg:pt-24 border-b shadow-md bg-gray-50"
  >
    <GlobalContainer>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="sticky">
          <img
            src="images/aboutme/pratical.png"
            alt="Practical portrait"
            className="w-52 sm:w-96 object-cover mx-auto hover:brightness-105 hover:contrast-100 transform transition-all duration-500"
          />
        </div>

        <div className="text-gray-800">
          <h1 className="mb-6 mt-6 lg:mt-0 text-4xl font-light text-[##333333] subpixel-antialiased">
            Who I help
          </h1>

          <p className="max-w-xl mb-6 font-light text-lg leading-relaxed subpixel-antialiased">
            If you have an idea, a project, a business, or even a rough sketch,
            I can help give it shape. I’ve worked with clients who had everything
            ready and just needed clean execution — and with those who only had
            a sentence and lots of uncertainty.
            <br /> <br />
            Whether it’s a simple website, a landing page, an app, or something
            larger, the foundation is the same: listen, understand, and build
            something functional and right for your users.
            <br /> <br />
            I work with people who are starting out — freelancers, small
            businesses, creators, and teams who want something of their own,
            without complexity. You don’t need technical experience. My role is
            to simplify, guide, and build with you — with transparency and focus
            on what matters: clarity, momentum, and results.
          </p>
        </div>
      </div>
    </GlobalContainer>
  </section>
);

const WhySection = () => (
  <section id="porquefacoisso" className="-mb-1.2 py-16 bg-white border-b">
    <GlobalContainer>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="text-gray-800">
          <h1 className="mb-6 text-4xl font-light text-[##333333] subpixel-antialiased">
            Why I do this
          </h1>
          <p className="max-w-lg font-light text-xl leading-relaxed subpixel-antialiased">
            It took me years to find my place. I started by dismantling
            computers, struggled with programming, and graduated later than planned.
            I learned my strength isn’t speed — it’s turning confusion into clarity.
            <br />
            <br />That’s what I do today: I help people turn scattered ideas into real
            digital experiences with structure, craft, and function — even when the
            starting point is uncertain.
          </p>
        </div>

        <div className="sticky">
          <img
            src="images/aboutme/place.svg"
            alt="Illustration of place"
            className="hidden md:block w-72 inset-[326px] xl:translate-x-0 translate-x-16 lg:w-96 object-cover mx-auto hover:brightness-105 hover:contrast-100 transform transition-all duration-500 lg:inset-[166px] left-0 absolute"
          />
        </div>
      </div>
    </GlobalContainer>
  </section>
);

const CallToActionSection = () => (
  <section id="construir" className="py-24 border-b shadow-md bg-gray-50">
    <GlobalContainer>
      <div className="flex flex-col items-center justify-center text-center">
        <h1 className="text-3xl font-bold uppercase text-terciario mb-2">
          Ready to build it?
        </h1>
        <p className="text-terciario text-base mb-6 font-regular">
          When the idea is good, the execution should match.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <BubblyLink to="/conversar" colorStart="#004AAD" colorEnd="#FFFFFF">
            <button
              className="bg-primario font-semibold text-white py-3 px-4 rounded-full shadow-md hover:shadow-lg text-sm w-full sm:w-fit max-w-xs hover:bg-secundario transition-all duration-500 whitespace-nowrap hover:ring-2 hover:ring-white hover:scale-105 hover:ring-inset flex items-center gap-1"
              aria-label="Open contact form"
            >
              <SiLibreofficewriter className="text-green-400" />
              Fill out the form
            </button>
          </BubblyLink>

          <BubblyLink to="/portfolio" colorStart="#004AAD" colorEnd="#FFFFFF">
            <button
              className="bg-white font-semibold text-secundario py-3 px-3 rounded-full shadow-md hover:shadow-lg text-sm w-full sm:w-fit max-w-xs hover:bg-blue-300 hover:text-white transition-all duration-500 whitespace-nowrap hover:ring-2 hover:ring-white ring-secundario ring-2 hover:scale-105 hover:ring-inset flex items-center gap-1"
              aria-label="Explore projects"
            >
              👉 See my projects
            </button>
          </BubblyLink>
        </div>
      </div>
    </GlobalContainer>
  </section>
);

/* Reusable small components */

const DividerLabel = ({ label }) => (
  <div className="relative flex items-center justify-center pb-10">
    <div className="w-full mx-auto border border-gray-200"></div>
    <div className="absolute w-24 h-10 flex items-center justify-center text-center text-sm font-light text-white bg-secundario border-1 border-white rounded-full -rotate-6">
      {label}
    </div>
  </div>
);

const InfoCard = ({ icon, title, text }) => (
  <div className="flex items-center justify-center text-center">
    <div className="flex flex-col items-center justify-center space-y-1">
      {icon}
      <h1 className="font-bold">{title}</h1>
      <p className="font-light text-lg leading-relaxed subpixel-antialiased">
        {text}
      </p>
    </div>
  </div>
);

export default SobreMim;
