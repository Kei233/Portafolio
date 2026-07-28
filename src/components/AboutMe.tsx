import { useGSAP } from "@gsap/react";

import { useRef } from "react";

import { aboutAnimation } from "../animations/aboutAnimation";

import { useResize } from "../hooks/useResize";

export function AboutMe() {
  const aboutRef = useRef<HTMLElement | null>(null);

  const { width, height } = useResize(aboutRef);

  useGSAP(() => aboutAnimation(aboutRef), { scope: aboutRef, dependencies: [width, height], revertOnUpdate: true });

  return (
    <section
      ref={aboutRef}
      className="
      relative
      min-h-screen
      overflow-x-hidden
      overflow-y-visible
      lg:px-12
      px-6
      p-20
      flex
    "
    >
      {/* Window */}
      <div
        className="
        relative
        z-10
        w-full
        max-w-7xl
        rounded-3xl
        border border-white/10
        bg-white/3
        backdrop-blur-xl
        overflow-hidden
        shadow-2xl
        shadow-black/60
      "
      >
        <header
          className="
          flex
          items-center
          gap-3
          h-16
          px-6
          border-b
          border-white/10
        "
        >
          <div className="h-3 w-3 rounded-full bg-red-500" />
          <div className="h-3 w-3 rounded-full bg-yellow-500" />
          <div className="h-3 w-3 rounded-full bg-green-500" />

          <span className="ml-6 text-sm text-white/40 font-mono w-fit">
            about.tsx
          </span>
        </header>

        <div className="flex flex-col lg:flex-row h-full">
          {/* Panel Left */}
          <div
            className="
            lg:w-[55%]
            lg:min-h-svh
            lg:h-full
            w-full
            h-fit
            px-4
            pt-8
            lg:p-12
            flex
            flex-col
            justify-center
            box-border
          "
          >
            <span className="text-baltic-blue-600 font-mono mb-4">
              // About me
            </span>

            <h2 className="titleAbout *:font-Wix lg:text-6xl text-3xl font-bold tracking-widest w-full lg:max-w-lg">
              Construyo interfaces que se sienten
              <span className="titleSub"> vivas.</span>
            </h2>

            <p className="mt-8 text-white/70 leading-8 lg:text-lg text-md max-w-lg">
              Me apasiona transformar ideas en experiencias digitales mediante
              animaciones, interacción y una atención obsesiva por el detalle.
            </p>
          </div>

          {/* Right */}
          <div
            className="
            lg:w-[45%]
            lg:min-h-screen
            w-full
            h-fit
            py-10
            px-5
            lg:py-5
            lg:px-10
            grid
            gap-6
            lg:border-l
            lg:border-white/10
            box-border
          "
          >
            <article
              className="
              rounded-2xl
              w-full
              border
              border-white/10
              bg-white/3
              p-6
            "
            >
              <p className="text-sm text-blue-400 font-mono">01</p>

              <h3 className="md:text-2xl text-xl font-semibold mt-2">Mi filosofía</h3>

              <p className="mt-3 text-white/60 leading-7">
                Diseño experiencias antes que páginas. Cada animación debe
                comunicar algo.
              </p>
            </article>

            <article
              className="
              rounded-2xl
              w-full
              border
              border-white/10
              bg-white/3
              p-6
            "
            >
              <p className="text-sm text-blue-400 font-mono">02</p>

              <h3 className="md:text-2xl text-xl font-semibold mt-2">Mi enfoque</h3>

              <p className="mt-3 text-white/60 leading-7">
                React, TypeScript y GSAP para crear interfaces rápidas, fluidas
                y con personalidad.
              </p>
            </article>

            <article
              className="
              rounded-2xl
              w-full
              border
              border-white/10
              bg-white/3
              p-6
            "
            >
              <p className="text-sm text-blue-400 font-mono">03</p>

              <h3 className="md:text-2xl text-xl font-semibold mt-2">
                Más allá del código
              </h3>

              <p className="mt-3 text-white/60 leading-7">
                Me interesa comprender el diseño, la psicología del usuario y
                cómo las personas interactúan con un producto.
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
