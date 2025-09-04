import React from "react";
import { Helmet } from "react-helmet";
import GlobalContainer from "../../../utils/GlobalContainer";
import { RiTailwindCssFill } from "react-icons/ri";
import { TbBrandFramerMotion } from "react-icons/tb";
import { RxDrawingPinFilled } from "react-icons/rx";
import { IoMdCodeWorking } from "react-icons/io";
import { GiConvergenceTarget } from "react-icons/gi";
import imgAvatar from "../../../assets/logo/lodexstudio-logo-white.svg";
import CodeBlock from "../../../utils/CodeBlock";

const Avatar = [
  {
    foto: imgAvatar,
    profileFoto: "",
    autor: "LodeX Studio",
    date: "August 9, 2025",
  },
];

const blocoParte2 = {
  language: "javascript",
  code: `export default function Card() {
  return (
    <div className="bg-white shadow p-4 w-[400px] rounded">
      <img src="imagem.jpg" alt="..." className="mb-4" />
  <h2 className="text-lg font-bold">Card title</h2>
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

const blocoParte4 = {
  language: "javascript",
  code: `
  <img className="w-full h-[280px] object-cover
  transition-transform duration-500 group-hover:scale-105"
    src="images/blog/card-example.jpg"
  alt="Card visual example"
  />
  `,
};

const blocoParte5 = {
  language: "javascript",
  code: `
  {/* CTA button */}
<div className="absolute top-2 right-3 bg-white rounded-full w-8
 h-8 flex items-center justify-center opacity-0
  group-hover:opacity-100 transition duration-500">
  <MdArrowOutward className="size-5 text-[#e96360]" />
</div>

{/* Card content */}
<div className="p-5">
  <h5 className="font-bold">{card.title}</h5>
  <p className="text-sm text-gray-500">{card.description}</p>
</div>
  `,
};

const blocoParte6 = {
  language: "javascript",
  code: `
  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
  {/* Cards here */}
  </div>`,
};

const blocoParte61 = {
  language: "javascript",
  code: `
  <video src="images/blog/responsividade.mp4" 
  autoPlay 
  muted 
  loop 
  playsInline 
  className="w-full mx-auto h-full object-cover rounded-lg" 
  /> `,
};

function AuthorInfo() {
  return (
    <div className="flex mt-4 mb-10">
      {Avatar.map((avt, idx) => (
        <div key={idx} className="flex items-center justify-center gap-3">
          <div className="flex items-center justify-center w-16 h-16 bg-terciario rounded-full">
            <img src={avt.foto} alt="avatar" className="size-7 bg-no-repeat" />
          </div>
          <div className="flex flex-col text-gray-700 text-base">
            <p className="text-lg font-light text-terciario">{avt.autor}</p>
            <p className="text-base text-slate-500 font-light">{avt.date}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

const indice = [
  { id: "passo-1", label: "Create the project with React and TailwindCSS" },
  { id: "passo-2", label: "Structure the base component (Card)" },
  { id: "passo-3", label: "Add technology badges and icons" },
  { id: "passo-4", label: "Create an impactful visual image" },
  { id: "passo-5", label: "Include title and call-to-action (CTA)" },
  { id: "passo-6", label: "Make the card responsive" },
  { id: "passo-final", label: "Final code and GitHub repository" },
];

function Indice() {
  return (
    <div className="mb-10">
      <ul className="space-y-4 text-left text-gray-500">
        <h1 className="flex items-center gap-1 text-[#6a7282] font-[500] text-lg">
          <RxDrawingPinFilled className="text-secundario" /> Table of contents
        </h1>
        <ol className="list-decimal font-semibold text-sm sm:text-base md:text-lg leading-relaxed text-slate-700 mb-5 max-w-3xl space-y-1 list-inside">
          {indice.map((item) => (
            <li key={item.id} className="font-medium">
              <span className="font-light">
                <a
                  href={`#${item.id}`}
                  className="underline hover:text-secundario focus-within:text-secundario"
                >
                  {item.label}
                </a>
              </span>
            </li>
          ))}
        </ol>
      </ul>
    </div>
  );
}

import { useState } from "react";
import { toast } from "react-toastify";

function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.target);

    // Validate required fields
    const email = formData.get("email")?.trim();

    if (!email) {
      toast.error("Please enter a valid email.");
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        toast.success(data.message || "Subscribed successfully!");
        setEmail("");
        // Limpa os campos não-controlados
        e.target.reset();
      } else {
        const data = await response.json();
        toast.error(data.error || "Error processing subscription.");
      }
    } catch {
      toast.error("Unexpected error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center py-10">
      <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-900 text-center leading-relaxed mb-5">
        📩 Want more tutorials
        <br className=" md:hidden" /> like this?
      </h1>
      <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed text-slate-600 text-center">
        Subscribe to my newsletter
        <br className=" md:hidden" /> and get new posts in your inbox.
      </p>
      <form
        method="POST"
        encType="multipart/form-data"
        onSubmit={handleSubmit}
        className="max-w-lg md:max-w-3xl w-full mx-auto bg-gray-100 flex p-1 rounded-full mt-10 focus-within:bg-white border focus-within:ring-1 focus-within:ring-secundario transition"
      >
        <input
          id="email"
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder="Email address"
          disabled={isSubmitting}
          className="w-full rounded-full px-5 py-4 border-none tracking-tight outline-none bg-transparent text-base text-slate-900 placeholder-gray-500 disabled:opacity-50"
          title="Enter a valid email"
        />
        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-secundario hover:bg-blue-700 transition-all text-white font-semibold text-sm rounded-full px-6 py-3 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? "..." : "Subscribe"}
        </button>
      </form>
    </div>
  );
}

function CardResponsivo() {
  return (
    <>
      <Helmet>
        <title>
          Responsive Card with Animated Hover — React + TailwindCSS
          (Step-by-Step Tutorial) | LodeX Studio
        </title>
        <meta
          name="description"
          content="Learn how to build a responsive card with an animated hover using React and TailwindCSS. Step-by-step guide with code, design tips, and responsiveness."
        />
        <meta
          name="keywords"
          content="React, Tailwind, responsive card, badges, UI components, web design, frontend"
        />
        <meta
          property="og:title"
          content="Responsive Card with Badges — React + Tailwind"
        />
        <meta
          property="og:description"
          content="Build a responsive card with badges using React and Tailwind."
        />
        <meta
          property="og:image"
          content="https://lodexstudio.com/images/blog/card-responsivo-cover.jpg"
        />
        <meta
          property="og:url"
          content="https://lodexstudio.com/blog/cardresponsive"
        />
        <meta property="og:type" content="article" />
      </Helmet>

      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 bg-secundario text-white px-4 py-2 rounded-md"
      >
        Skip to main content
      </a>

      <main
        id="main-content"
        className="min-h-[95vh] border-b shadow-md"
        role="main"
      >
        <GlobalContainer>
          <div className="flex items-center justify-center py-[7.6rem] md:py-[9.6rem]">
            <div className="w-full max-w-content mx-auto sm:px-6 md:px-8 lg:px-[18%]">
              <article
                className="flex-col text-start"
                aria-label="Tutorial: Responsive Card with Animated Hover"
              >
                <header className="mb-10">
                  <h1 className="text-2xl sm:text-4xl md:text-5xl font-light text-gray-900 leading-relaxed max-w-4xl">
                    Responsive Card with Animated Hover using React +
                    TailwindCSS
                  </h1>
                  <p className="mt-6 mb-2 text-base lg:text-2xl text-slate-600 leading-relaxed max-w-3xl font-light">
                    A subtle hover effect that brings your card to life in under
                    200 lines of code.
                  </p>
                </header>

                <AuthorInfo />

                <figure className="mb-10">
                  <img
                    src="images/blog/cad-responsivo-differ.jpg"
                    alt="Comparison between a simple card and an improved card with badges and animation"
                    className="rounded-lg"
                    loading="lazy"
                  />
                  <figcaption className="sr-only">
                    Visual comparison between two card states.
                  </figcaption>
                </figure>

                <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed text-slate-700 font-light mb-10">
                  A visual card should be clear, organized, and use hierarchy to
                  guide the eye. In the optimized example, icons and badges add
                  context, spacing improves readability, and a clean design
                  makes it pleasant to scan. It’s responsive and interactive,
                  which elevates the content and increases engagement — with
                  simple code.
                </p>

                <hr className="mb-10" />

                <nav aria-label="Article table of contents">
                  <Indice />
                </nav>

                <hr className="mb-10" />

                {/* PASSO 1 */}
                <section id="passo-1" aria-labelledby="heading-passo-1">
                  <h2
                    id="heading-passo-1"
                    className="text-xl sm:text-3xl md:text-4xl font-light text-gray-900 leading-relaxed mb-10"
                  >
                    <strong>Step 1</strong> — Create the project with React &
                    TailwindCSS
                  </h2>
                  <p className="text-base md:text-lg lg:text-xl leading-relaxed text-slate-700 font-light mb-10">
                    <strong className="font-medium">Goal:</strong> Set up the
                    base project where the card will be built.
                  </p>
                  <p className="text-base md:text-lg lg:text-xl leading-relaxed text-slate-700 font-medium mb-2">
                    What you’ll do:
                  </p>
                  <ol className="list-decimal font-medium text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed text-slate-700 mb-5 max-w-3xl space-y-1 list-inside">
                    <li className="font-light">
                      Create a React project with{" "}
                      <strong className="font-medium">Vite</strong>
                    </li>
                    <li className="font-light">
                      Install and configure{" "}
                      <strong className="font-medium">TailwindCSS</strong>
                    </li>
                  </ol>

                  <hr className="mb-10" />
                  <h3 className="text-base md:text-lg lg:text-xl leading-relaxed text-slate-700 font-semibold mb-2">
                    Code
                  </h3>

                  <div
                    className="w-full mx-auto bg-gray-100 p-5 rounded-xl mb-2"
                    aria-label="Commands to create the project"
                  >
                    <p className="text-base leading-relaxed text-slate-700 font-[400] mb-10">
                      <span className="text-gray-500 font-[500] tracking-wide text-sm italic">
                        # Create React project with Vite
                      </span>
                      <br />
                      npm create vite@latest card-tailwind
                      <br />
                      <span className="text-yellow-600">cd</span> card-tailwind
                    </p>
                    <p className="text-base leading-relaxed text-slate-700 font-[400]">
                      <span className="text-gray-500 font-[500] tracking-wider text-sm italic">
                        # Install TailwindCSS
                      </span>
                      <br />
                      npm install -D tailwindcss postcss autoprefixer
                      <br />
                      npx tailwindcss init -p
                    </p>
                  </div>

                  <div
                    className="w-full mx-auto bg-gray-100 p-5 rounded-xl mb-2"
                    aria-label="Tailwind configuration"
                  >
                    <p className="text-base leading-relaxed text-slate-700 font-[400]">
                      <span className="text-gray-500 font-[500] tracking-wide text-sm italic">
                        // tailwind.config.js
                      </span>
                      <br />
                      <span className="text-yellow-600 text-sm">module</span>
                      <span className="text-sm">.exports = {"{"}</span>
                      <br />
                      <span className="text-yellow-600 ml-5 text-sm">
                        content
                      </span>
                      <span className="text-sm">: [</span>
                      <span className="text-sm text-green-600 tracking-wide">
                        {" ./index.html, ./src/**/*.{js,jsx} "}
                      </span>
                      <span className="text-sm">],</span>
                      <br />
                      <span className="text-yellow-600 ml-5 text-sm">
                        theme
                      </span>
                      <span className="text-sm">: {"{"} </span>
                      <span className="text-yellow-600 text-sm">extend</span>
                      <span className="text-sm">: {"{}"}, </span>
                      <br />
                      <span className="text-yellow-600 ml-5 text-sm">
                        plugins
                      </span>
                      <span className="text-sm">: [],</span>
                      <br />
                      <span className="text-sm">{"}"}</span>
                    </p>
                  </div>

                  <div
                    className="w-full mx-auto bg-gray-100 p-5 rounded-xl mb-2"
                    aria-label="Tailwind CSS import"
                  >
                    <p className="text-base leading-relaxed text-slate-700 font-[400]">
                      <span className="text-gray-500 font-[500] tracking-wide text-sm italic">
                        /* index.css */
                      </span>
                      <br />
                      <span className="text-purple-600 text-sm">
                        @tailwind{" "}
                      </span>
                      <span className="text-sm">base;</span>
                      <br />
                      <span className="text-purple-600 text-sm">
                        @tailwind{" "}
                      </span>
                      <span className="text-sm">components;</span>
                      <br />
                      <span className="text-purple-600 text-sm">
                        @tailwind{" "}
                      </span>
                      <span className="text-sm">utilities;</span>
                    </p>
                  </div>

                  <p className="text-sm md:text-base lg:text-lg leading-relaxed text-slate-700 font-light mb-5">
                    Configure the{" "}
                    <span className="bg-gray-100 px-2 rounded-lg">
                      tailwind.config.js
                    </span>{" "}
                    file and import CSS in{" "}
                    <span className="bg-gray-100 px-2 rounded-lg">
                      index.css
                    </span>
                    .
                  </p>
                  <p className="text-base leading-relaxed text-slate-700">
                    Tip: keep your structure organized for easier maintenance.
                  </p>

                  <hr className="my-10" />
                  <h3 className="text-base md:text-lg lg:text-xl leading-relaxed text-slate-700 font-semibold mb-2">
                    Try it now
                  </h3>
                  <p className="text-sm md:text-base lg:text-lg leading-relaxed text-slate-700 font-light mb-10">
                    Run{" "}
                    <code className="bg-gray-100 rounded-md px-1 font-medium text-sm">
                      npm run dev
                    </code>{" "}
                    and confirm Tailwind styles are applied.
                  </p>
                </section>

                <hr className="my-10" />

                {/* PASSO 2 */}
                <section id="passo-2" aria-labelledby="heading-passo-2">
                  <h2
                    id="heading-passo-2"
                    className="text-xl sm:text-3xl md:text-4xl font-light text-gray-900 leading-relaxed mb-10"
                  >
                    <strong>Step 2</strong> — Structure the base component
                  </h2>
                  <p className="text-base md:text-lg lg:text-xl leading-relaxed text-slate-700 font-light mb-10">
                    <strong className="font-medium">Goal:</strong> Create a
                    simple card without effects as a starting point.
                  </p>
                  <p className="text-base md:text-lg lg:text-xl leading-relaxed text-slate-700 font-medium mb-2">
                    What you’ll do:
                  </p>
                  <ol className="list-decimal font-medium text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed text-slate-700 mb-5 max-w-3xl space-y-1 list-inside">
                    <li className="font-light">
                      Create the file{" "}
                      <code className="bg-gray-100 px-1 rounded-md">
                        Card.jsx
                      </code>
                    </li>
                    <li className="font-light">
                      Add image, title, and description
                    </li>
                    <li className="font-light">
                      Apply basic TailwindCSS classes
                    </li>
                  </ol>

                  <hr className="mb-10" />
                  <h3 className="text-base md:text-lg lg:text-xl leading-relaxed text-slate-700 font-semibold mb-2">
                    Code (summary)
                  </h3>

                  <div>
                    <CodeBlock
                      language={blocoParte2.language}
                      code={blocoParte2.code}
                    />
                    <p className="text-base leading-relaxed text-slate-700">
                      Base structure that will receive design and animations.
                    </p>
                  </div>

                  <hr className="my-10" />
                  <figure className="-mt-10">
                    <img
                      src="images/blog/card-base2.jpg"
                      alt="First version of the card with only image and text"
                      className="w-96 mx-auto h-full object-cover"
                      loading="lazy"
                    />
                    <figcaption className="text-base leading-relaxed text-slate-700 mb-2">
                      It works, but it lacks visual appeal and motion.
                    </figcaption>
                  </figure>
                </section>

                <hr className="my-10" />

                {/* PASSO 3 */}
                <section id="passo-3" aria-labelledby="heading-passo-3">
                  <h2
                    id="heading-passo-3"
                    className="text-xl sm:text-3xl md:text-4xl font-light text-gray-900 leading-relaxed mb-10"
                  >
                    <strong>Step 3</strong> — Add badges and actions
                  </h2>
                  <p className="text-base md:text-lg lg:text-xl leading-relaxed text-slate-700 font-light mb-10">
                    Turn the static card into something dynamic with badges and
                    visual elements.
                  </p>
                  <p className="text-base md:text-lg lg:text-xl leading-relaxed text-slate-700 font-light mb-10">
                    <strong className="font-medium">Goal:</strong> Make the card
                    more attractive and semantic.
                  </p>
                  <p className="text-base md:text-lg lg:text-xl leading-relaxed text-slate-700 font-medium mb-2">
                    Actions:
                  </p>
                  <ol className="list-decimal font-medium text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed text-slate-700 mb-5 max-w-3xl space-y-1 list-inside">
                    <li className="font-light">
                      Create a <span className="font-medium">Badge</span>{" "}
                      component
                    </li>
                    <li className="font-light">
                      Apply dynamic colors by technology
                    </li>
                  </ol>

                  <hr className="mb-10" />
                  <h3 className="text-base md:text-lg lg:text-xl leading-relaxed text-slate-700 font-semibold mb-2">
                    Partial code (Badge)
                  </h3>
                  <div>
                    <CodeBlock
                      language={blocoParte3.language}
                      code={blocoParte3.code}
                    />
                    <p className="text-base leading-relaxed text-slate-700">
                      Use sufficient contrast for text inside badges.
                    </p>
                  </div>

                  <hr className="my-10" />
                  <figure className="mt-10">
                    <img
                      src="images/blog/antes-depois-1.jpg"
                      alt="Visual comparison before and after adding badges"
                      className="w-full mx-auto h-full object-cover rounded-lg"
                      loading="lazy"
                    />
                    <figcaption className="text-base leading-relaxed text-slate-700 my-5">
                      Badges add clarity and visual context.
                    </figcaption>
                  </figure>
                </section>

                <hr className="my-10" />

                {/* PASSO 4 */}
                <section id="passo-4" aria-labelledby="heading-passo-4">
                  <h2
                    id="heading-passo-4"
                    className="text-xl sm:text-3xl md:text-4xl font-light text-gray-900 leading-relaxed mb-10"
                  >
                    <strong>Step 4</strong> — Image with hover effect
                  </h2>
                  <p className="text-base md:text-lg lg:text-xl leading-relaxed text-slate-700 font-light mb-10">
                    Create initial impact with an image that responds to
                    interaction.
                  </p>

                  <hr className="mb-10" />
                  <h3 className="text-base md:text-lg lg:text-xl leading-relaxed text-slate-700 font-semibold mb-2">
                    Partial code (image)
                  </h3>
                  <div>
                    <CodeBlock
                      language={blocoParte4.language}
                      code={blocoParte4.code}
                    />
                    <p className="text-base leading-relaxed text-slate-700">
                      Prefer optimized formats (e.g., .webp) for performance.
                    </p>
                  </div>

                  <hr className="my-10" />
                  <figure className="-mt-10">
                    <img
                      src="images/blog/card-video.gif"
                      alt="Animation showing smooth zoom effect when hovering over the image"
                      className="w-80 mx-auto h-full object-cover rounded-lg"
                      loading="lazy"
                    />
                    <figcaption className="text-base leading-relaxed text-slate-700 my-5">
                      A subtle effect reinforces responsive visual feedback.
                    </figcaption>
                  </figure>
                </section>

                <hr className="my-10" />

                {/* PASSO 5 */}
                <section id="passo-5" aria-labelledby="heading-passo-5">
                  <h2
                    id="heading-passo-5"
                    className="text-xl sm:text-3xl md:text-4xl font-light text-gray-900 leading-relaxed mb-10"
                  >
                    <strong>Step 5</strong> — Interactivity and CTA
                  </h2>
                  <p className="text-base md:text-lg lg:text-xl leading-relaxed text-slate-700 font-light mb-10">
                    Show a button only on hover to keep the layout clean and
                    steer action.
                  </p>

                  <hr className="mb-10" />
                  <h3 className="text-base md:text-lg lg:text-xl leading-relaxed text-slate-700 font-semibold mb-2">
                    Partial code (CTA)
                  </h3>
                  <div>
                    <CodeBlock
                      language={blocoParte5.language}
                      code={blocoParte5.code}
                    />
                  </div>
                  <p className="text-base leading-relaxed text-slate-700">
                    Icons should have aria-hidden="true" if they’re purely
                    decorative.
                  </p>
                  <p className="text-sm leading-relaxed text-slate-600 font-light mt-4">
                    💡 <strong>Tip:</strong> I post community highlights and
                    creative implementations on
                    <a
                      href="https://instagram.com/lodex.studio"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-600 hover:text-purple-800 ml-1"
                    >
                      Instagram — use #LodeXStudio
                    </a>
                    !
                  </p>

                  <hr className="my-10" />
                  <figure className="-mt-10">
                    <img
                      src="images/blog/card-video-CTA.gif"
                      alt="Demonstration of the CTA button appearing on hover"
                      className="w-80 mx-auto h-full object-cover rounded-lg"
                      loading="lazy"
                    />
                    <figcaption className="text-base leading-relaxed text-slate-700 my-5">
                      A discreet CTA reduces visual noise and keeps focus.
                    </figcaption>
                  </figure>
                </section>

                <hr className="my-10" />

                {/* PASSO 6 */}
                <section id="passo-6" aria-labelledby="heading-passo-6">
                  <h2
                    id="heading-passo-6"
                    className="text-xl sm:text-3xl md:text-4xl font-light text-gray-900 leading-relaxed mb-10"
                  >
                    <strong>Step 6</strong> — Make the card responsive
                  </h2>
                  <p className="text-base md:text-lg lg:text-xl leading-relaxed text-slate-700 font-light mb-10">
                    Ensure readability and structure at any screen width.
                  </p>

                  <hr className="mb-10" />
                  <h3 className="text-base md:text-lg lg:text-xl leading-relaxed text-slate-700 font-semibold mb-2">
                    Example responsive classes
                  </h3>
                  <div>
                    <CodeBlock
                      language={blocoParte6.language}
                      code={blocoParte6.code}
                    />
                  </div>
                  <div>
                    <CodeBlock
                      language={blocoParte61.language}
                      code={blocoParte61.code}
                    />
                    <p className="text-base leading-relaxed text-slate-700">
                      The loop attribute simulates a GIF with better
                      performance.
                    </p>
                  </div>

                  <hr className="my-10" />
                  <figure className="-mt-3">
                    <video
                      src="images/blog/responsividade.mp4"
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="w-full mx-auto h-full object-cover rounded-lg"
                      aria-label="Demonstration of the card adapting to different sizes"
                    />
                    <figcaption className="text-center text-slate-700">
                      Smooth adaptation between desktop and mobile.
                    </figcaption>
                  </figure>
                  <p className="text-base leading-relaxed text-slate-700 my-5">
                    Important for mobile traffic (often 60%+ today).
                  </p>
                </section>

                <hr className="my-10" />

                {/* PASSO FINAL */}
                <section id="passo-final" aria-labelledby="heading-passo-final">
                  <h2
                    id="heading-passo-final"
                    className="text-xl sm:text-3xl md:text-4xl font-light text-gray-900 leading-relaxed mb-10"
                  >
                    <strong>Final Step</strong> — Full code on GitHub
                  </h2>
                  <p className="text-base md:text-lg lg:text-xl leading-relaxed text-slate-700 font-light mb-10">
                    Access and clone the repository to test it locally.
                  </p>
                  <a
                    href="https://github.com/lodsa-ntos/lodexstudio-blog"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex bg-primario font-semibold text-white py-3 px-4 rounded-full shadow-md hover:shadow-lg text-sm w-fit hover:bg-secundario transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secundario hover:ring-2 hover:ring-secundario hover:scale-105 hover:ring-inset items-center gap-2"
                    aria-label="See the full code for this tutorial on GitHub"
                  >
                    <IoMdCodeWorking
                      className="text-gray-200 font-bold size-5"
                      aria-hidden="true"
                      focusable="false"
                    />
                    View code on GitHub
                  </a>
                  <p className="text-sm md:text-base lg:text-lg leading-relaxed text-slate-700 font-light mt-6">
                    🔥{" "}
                    <strong className="font-medium mr-1">
                      Want to see this being built live?
                    </strong>
                    Follow{" "}
                    <a
                      href="https://instagram.com/lodex.studio"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-600 underline hover:text-purple-800"
                    >
                      @lodex.studio
                    </a>{" "}
                    on Instagram for live coding sessions!
                  </p>
                </section>

                <hr className="my-10" />

                <section aria-labelledby="heading-conclusao">
                  <h2
                    id="heading-conclusao"
                    className="text-xl sm:text-3xl md:text-4xl font-light text-gray-900 leading-relaxed mb-10"
                  >
                    <strong>Conclusion</strong>
                  </h2>
                  <p className="text-base md:text-lg lg:text-xl leading-relaxed text-slate-700 font-light mb-10">
                    Now you have a responsive, modern, animated card that you
                    can adapt to many contexts. Customize colors, swap icons,
                    and integrate it into real layouts to gain speed and
                    consistency when building interfaces.
                  </p>
                  <p className="text-base md:text-lg lg:text-xl leading-relaxed text-slate-700 font-light mb-10">
                    💡 <strong className="font-medium">Tip:</strong> Follow more
                    tutorials and card variations on my Instagram. I share my
                    development process, quick tips in stories, and answer
                    community questions!
                  </p>
                </section>

                <hr className="my-10" />

                <NewsletterForm />
              </article>
            </div>
          </div>
        </GlobalContainer>
      </main>
    </>
  );
}

export default CardResponsivo;
