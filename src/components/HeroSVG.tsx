import { useGSAP } from "@gsap/react";

import gsap from "gsap";

import { callSVGBuilder } from "../animations/heroAnimation";

import { useRef, useState, type JSX } from "react";

export function HeroSVG() {
  const [svgIndex, setSvgIndex] = useState<number>(0);
  const svgRef = useRef<HTMLDivElement | null>(null);
  const [finishedFigures, setFinishedFigures] = useState<JSX.Element[]>([]);
  const figure = figurePaths[svgIndex];

  useGSAP(
    () => {
      const svgTl = callSVGBuilder(svgRef);
      
      svgTl?.eventCallback("onComplete", () => {
        if ((svgIndex + 1) > figurePaths.length) return;
        
        setSvgIndex((prev: number) => prev + 1);
        setFinishedFigures((prev) => [...prev, figure]);
      });
      
      const gridSVG = document.querySelector(".gridSVG");

      if (svgIndex === figurePaths.length) {
        gsap.to(".finishGroup", {
          filter: "drop-shadow(0px 0px 24px rgba(255,255,255,1))",
          duration: 3,
          ease: "sine.in",
        });

        gsap.to(gridSVG, {
          opacity: 0,
          duration: 1,
        })
      }
    },
    { scope: svgRef, dependencies: [svgIndex], revertOnUpdate: true },
  );

  return (
    <div
      ref={svgRef}
      className="absolute hidden lg:block top-1/7 right-1/12 w-1/3 aspect-square overflow-hidden shadow-xl shadow-black/10"
    >
      <svg
        className="svg w-full h-full relative"
        viewBox="-1000 -1000 2000 2000"
        preserveAspectRatio="xMidYMid meet"
        fill="none"
        stroke="white"
        strokeWidth={6}
        xmlns="http://www.w3.org/2000/svg"
      >
        <g key={svgIndex} opacity={0.2} className="group">
          {figure}
        </g>

        <g className="finishGroup z-30">
          {finishedFigures}
          <circle r="20" cy={0} cx={0} className="cursor" />
        </g>
      </svg>
    </div>
  );
}

const chip1 = (
  <>
    <path
      d="
    M0 -750
    L750 0
    L0 750
    L-750 0
    Z
    "
    />
    <path d="M0 -620 L620 0 L0 620 L-620 0 Z" />
  </>
);

const chip2 = (
  <>
    <path d="M0 -80 L80 0 L0 80 L-80 0 Z" />
    <path d="M0 -620 L0 -80" />
    <path d="M0 80 L0 620" />
    <path d="M-620 0 L-80 0" />
    <path d="M80 0 L620 0" />
  </>
);

const chip3 = (
  <>
    <path d="M-300 -300 L-220 -300 L-220 -220 L-300 -220 Z" />

    <path d="M220 -300 L300 -300 L300 -220 L220 -220 Z" />

    <path d="M220 220 L300 220 L300 300 L220 300 Z" />

    <path d="M-300 220 L-220 220 L-220 300 L-300 300 Z" />
  </>
);

const chip4 = (
  <>
    <path d="M-80 -80 L-220 -220" />

    <path d="M80 -80 L220 -220" />

    <path d="M80 80 L220 220" />

    <path d="M-80 80 L-220 220" />
  </>
);

const chip5 = (
  <>
    <path d="M0 -450 L-180 -450" />

    <path d="M0 -250 L220 -250" />

    <path d="M0 150 L-160 150" />

    <path d="M0 380 L180 380" />
  </>
);

const chip6 = (
  <>
    {/* Superior */}
    <path d="M0 -750 L0 -900" />
    <path d="M-180 -570 L-180 -760" />
    <path d="M180 -570 L180 -820" />

    {/* Inferior */}
    <path d="M0 750 L0 900" />
    <path d="M-180 570 L-180 780" />
    <path d="M180 570 L180 840" />

    {/* Izquierda */}
    <path d="M-750 0 L-900 0" />
    <path d="M-570 -180 L-800 -180" />
    <path d="M-570 180 L-860 180" />

    {/* Derecha */}
    <path d="M750 0 L900 0" />
    <path d="M570 -180 L820 -180" />
    <path d="M570 180 L860 180" />
  </>
);

const figurePaths = [chip1, chip2, chip3, chip4, chip5, chip6];
