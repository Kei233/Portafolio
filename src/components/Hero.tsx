import { useGSAP } from "@gsap/react";
import { useRef } from "react";

import { Particles } from "../components/Particles";
import { HeroSVG } from "./HeroSVG";

import { heroAnimation } from "../animations/heroAnimation";

import { useResize } from "../hooks/useResize";

export function Hero() {
  const mainRef = useRef<HTMLElement | null>(null);
  const { width, height } = useResize(mainRef);

  useGSAP(
    () =>{ 
      heroAnimation(mainRef);
  },
    { scope: mainRef, dependencies: [width, height], revertOnUpdate: true },
  );

  return (
    <section
      ref={mainRef}
      className="flex flex-col lg:flex-row relative w-full justify-center items-center h-screen gap-6 px-10 overflow-hidden"
    >
      <div className="flex flex-col min-h-full h-full space-y-7 lg:space-y-4 justify-center w-full">
        <span
          className="titleP text-sm font-medium uppercase tracking-[0.2em]"
        >
          Desarollador Web
        </span>
        <h1
          className="title md:text-7xl text-5xl font-semibold leading-tight text-silver-50 text-balance font-Karin"
        >
          <span className="text-baltic-blue-500">Hola,</span> soy Johan Yesid Tavera
        </h1>

        <p className="parrafo text-xl z-10 h-1/10 max-w-lg text-[rgba(255,255,255,0.75)] font-Ubuntu hidden md:block">
          Desarollador web enfocado en animaciones. Paginas vivas y con su propio estilo.
        </p>

        <div className="links w-fit flex gap-x-2 lg:justify-between">
        <a
          target="_blank"
          href="https://www.linkedin.com/in/johan-yesid-tavera-360266262/"
          className="select-none focus:outline-none focus-visible:shadow-lg focus-visible:shadow-cyan-400 bg-cyan-600 focus-visible:-translate-y-2 focus-visible:scale-105 hover:-translate-y-2 border border-white/10 text-white font-semibold px-4 py-2 h-fit w-fit rounded-lg transition-transform duration-200 ease-in-out"
        >
          Linkedin
        </a>
        <a  
          target="_blank"
          href="https://github.com/Kei233?tab=overview&from=2026-05-01&to=2026-05-24"
          className="select-none focus:outline-none focus-visible:shadow-lg focus-visible:shadow-white/40 focus-visible:-translate-y-2 focus-visible:scale-105 hover:-translate-y-2 border border-white/10 text-white font-semibold px-4 py-2 h-fit w-fit rounded-lg transition-transform duration-200 ease-in-out"
        >
          Github
        </a>
      </div>
      </div>
      

      <div className="downB hidden lg:block absolute bottom-0 w-1/3 h-full -translate-x-1/2 left-1/2 shadow-[inset_0_-90px_50px_-100px_rgba(255,255,255,0.20)] z-70 blur-[3px]" />

      <span className="downB hidden lg:inline absolute select-none bottom-12 -translate-x-1/2 opacity-50 left-1/2 text-lg tracking-[0.2em] font-mono uppercase">Desplaza para Explorar</span>

      <span className="downB V hidden lg:block absolute select-none bottom-2 -translate-x-1/2 left-1/2 text-2xl font-mono opacity-70">˅</span>

      <div className="gridSVG w-11/12 h-3/4 self-center grid grid-cols-8 grid-rows-3 relative mask-radial mask-radial-from-50% mask-radial-to-70% z-10">
      {Array.from({ length: 24 }).map((_, i) => (
        <div key={i} className="border border-white/10 w-full h-full"></div>
      ))}
      </div>

      <Particles />
      <HeroSVG />
    </section>
  );
}
