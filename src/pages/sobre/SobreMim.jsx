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
            I’ve always been curious about how things work — from dismantling
            computers to experimenting with code and interfaces. In design and
            development I found a space where creativity meets logic, where
            ideas can take shape and grow.
            <br />
            <br />
            LodeX Studio is my personal lab. It’s where I explore design, code,
            and motion — not to sell services, but to learn, experiment, and
            share what I create along the way.
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
    text: "Websites and interfaces as personal projects, no templates, just experiments.",
  },
  {
    icon: <MdOutlineDesignServices className="size-10 text-gray-500" />,
    title: "I design",
    text: "Prototypes and layouts to test structure, hierarchy, and flow.",
  },
  {
    icon: <MdImportantDevices className="size-10 text-gray-500" />,
    title: "I develop",
    text: "Frontend with React and Tailwind, often adding motion with Framer",
  },
];

const WhatIDoSection = () => (
  <section id="Oquefaco" className="pb-20 pt-20 border-b">
    <GlobalContainer>
      <div className="mb-16">
        <h2 className="mb-6 text-4xl font-light text-[##333333] subpixel-antialiased text-center">
          I use this space to play, practice, <br />
          and push myself in design and development.
        </h2>
      </div>

      <DividerLabel label="What I do" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-4">
        {whatIDoItems.map(({ icon, title, text }) => (
          <InfoCard key={title} icon={icon} title={title} text={text} />
        ))}
      </div>

      <div className="flex text-center items-center justify-center mt-16">
        <p className="italic">
          This is my playground to combine creativity with code.
        </p>
      </div>
    </GlobalContainer>
  </section>
);

const ForWhomSection = () => (
  <section
    id="paraqueme"
    className="min-h-[95vh] lg:min-h-[95vh] 2xl:min-h-[35vh] pb-20 pt-16 lg:pb-0 lg:pt-24 border-b shadow-xl bg-gray-50"
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
            1. What I’m exploring now
          </h1>

          <ol className="list-disc ml-6  mb-6 font-light text-lg leading-relaxed subpixel-antialiased">
            <li>Learning more about TypeScript.</li>
            <li>Playing with motion in Framer</li>
            <li>Experimenting with minimal UI patterns.</li>
            <li>Writing cleaner, scalable React code.</li>
          </ol>

          <h1 className="mb-6 mt-6 lg:mt-0 text-4xl font-light text-[##333333] subpixel-antialiased">
            2. Current experiments
          </h1>

          <ol className="list-decimal ml-6 mb-6 font-light text-lg leading-relaxed subpixel-antialiased">
            <li>Micro animations with React + Framer Motion.</li>
            <li>Dark-mode friendly layouts.</li>
            <li>A personal design system with Tailwind.</li>
          </ol>
        </div>
      </div>
    </GlobalContainer>
  </section>
);

const WhySection = () => (
  <section id="porquefacoisso" className="-mb-1.2 py-16 bg-gray-50 border-b">
    <GlobalContainer>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="text-gray-800">
          <h1 className="mb-6 text-4xl font-light text-[##333333] subpixel-antialiased">
            Why I do this
          </h1>
          <p className="max-w-lg font-light text-xl leading-relaxed subpixel-antialiased">
            It took me years to find my path. I struggled with programming,
            graduated later than planned, and often felt behind. But I realized
            my strength isn’t speed, it’s persistence and clarity.
            <br />
            <br />
            Now, LodeX Studio is where I turn scattered thoughts into digital
            experiments. It’s not about deadlines or clients, it’s about
            curiosity, practice, and the joy of building things that didn’t
            exist before.
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
  <section id="construir" className="py-24 border-b shadow-md bg-white">
    <GlobalContainer>
      <div className="flex flex-col items-center justify-center text-center">
        <h1 className="text-3xl font-bold uppercase text-terciario mb-2">
          Want to see what I’ve been building?
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
