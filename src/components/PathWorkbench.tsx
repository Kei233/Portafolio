import { useRef } from "react";
import { useGSAP } from "@gsap/react";

import gsap from "gsap";
import { MotionPathHelper } from "gsap/MotionPathHelper";

gsap.registerPlugin(MotionPathHelper);

export function PathWorkbench() {
  const svgRef = useRef<SVGSVGElement>(null);

  useGSAP(() => {
    if (!svgRef.current) return;

    // const path = svgRef.current.querySelector(
    //   ".editablePath",
    // ) as SVGPathElement;

    // MotionPathHelper.editPath(path);
    MotionPathHelper.create(".circleRef");
  });

  function copyPath() {
    const path = svgRef.current?.querySelector(
      ".editablePath",
    ) as SVGPathElement | null;

    if (!path) return;

    const d = path.getAttribute("d");

    if (!d) return;

    navigator.clipboard.writeText(d);

    console.log("Path copiado.");
  }

  return (
    <div className="absolute inset-0 bg-neutral-950 overflow-hidden isolate z-90 opacity-50">
      <button
        onClick={copyPath}
        className="absolute top-5 right-5 z-50 rounded-lg bg-sky-500 px-4 py-2 font-medium text-white transition hover:bg-sky-400"
      >
        Copiar Path
      </button>

      <svg
        ref={svgRef}
        className="w-full h-full"
        viewBox="-1000 -1000 2000 2000"
        preserveAspectRatio="xMidYMid meet"
      >
        {/* Cuadrícula */}
        <defs>
          <pattern
            id="smallGrid"
            width="25"
            height="25"
            patternUnits="userSpaceOnUse"
          >
            <path d="M25 0H0V25" fill="none" stroke="#262626" strokeWidth="1" />
          </pattern>

          <pattern
            id="grid"
            width="100"
            height="100"
            patternUnits="userSpaceOnUse"
          >
            <rect width="100" height="100" fill="url(#smallGrid)" />
            <path
              d="M100 0H0V100"
              fill="none"
              stroke="#404040"
              strokeWidth="1.5"
            />
          </pattern>
        </defs>

        {/* Fondo */}
        <rect
          x={-1000}
          y={-1000}
          width={2000}
          height={2000}
          fill="url(#grid)"
        />

        {/* Eje X */}
        <line
          x1={-1000}
          x2={1000}
          y1={0}
          y2={0}
          stroke="#ef4444"
          strokeWidth={2}
        />

        {/* Eje Y */}
        <line
          x1={0}
          x2={0}
          y1={-1000}
          y2={1000}
          stroke="#22c55e"
          strokeWidth={2}
        />

        {/* Origen */}
        <circle cx={0} cy={0} r={6} fill="#ffffff" />

        {/* ======== EDITA ESTE PATH ======== */}

        <path
          className="editablePath"
          d="M 0 0 L 50 0"
          fill="none"
          stroke="#38bdf8"
          strokeWidth={5}
          strokeLinecap="round"
        />
        
        <circle cx={2} cy={2} r={40} fill="#f00" className="circleRef" />
      </svg>
    </div>
  );
}
