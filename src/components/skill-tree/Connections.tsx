import type { SkillNodeType } from "./types";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap from "gsap";

export type ConnectionType = {
  from: string;
  to: string;

  type: "primary" | "secondary" | "soft";
};

type Props = {
  nodes: SkillNodeType[];
  connections: ConnectionType[];

  timeline: GSAPTimeline;
  onClick: () => void;

  width: number;
  height: number;
};

export function Connections({
  nodes,
  connections,
  onClick,
  timeline,
  width,
  height,
}: Props) {
  const refSVG = useRef<SVGSVGElement | null>(null);

  useGSAP(
  () => {
    const q = gsap.utils.selector(refSVG);

    const primary = q("path[data-type='primary']");
    const secondary = q("path[data-type='secondary']");
    const soft = q("path[data-type='soft']");

    gsap.killTweensOf(primary);
    gsap.killTweensOf(secondary);
    gsap.killTweensOf(soft);

    timeline
      .from(
        primary,
        {
          duration: 2.12,
          drawSVG: 0,
          stagger: 0.12,
          ease: "power2.out",
        },
        "+=1.78",
      )
      .from(
        secondary,
        {
          duration: 1.5,
          opacity: 0,
          stagger: 0.12,
          ease: "power1.out",
        },
        "-=1.1",
      )
      .from(
        soft,
        {
          opacity: 0,
          duration: 1,
          stagger: 0.04,
          ease: "sine.out",
        },
        "-=0.9",
      )
      .to(
        primary,
        {
          stroke: "rgba(255,255,255,0.92)",
          strokeOpacity: 1,
          filter: "drop-shadow(0px 0px 10px rgba(255, 255, 255, 0.7))",
          duration: 2.8,
          stagger: 0.2,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        },
        0,
      )
      .to(secondary, {
        stroke: "rgb(0, 217, 255)",
        filter: "drop-shadow(1px 1px 12px rgba(12, 176, 201, 1))",
      })
      .to(
        secondary,
        {
          strokeOpacity: 1,
          strokeDashoffset: -40,
          duration: 2.2,
          repeat: -1,
          yoyo: true,
          ease: "none",
        },
        0,
      )
      .to(
        soft,
        {
          strokeOpacity: 0.18,
          strokeDashoffset: -14,
          duration: 2.1,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        },
        0,
      );
  },
  { scope: refSVG, dependencies: [connections], revertOnUpdate: true, },
);

  return (
    <svg
      ref={refSVG}
      className="absolute inset-0 w-full h-full pointer-events-none"
      onClick={onClick}
    >
      {connections.map((connection) => {
        const fromNode = nodes.find((n) => n.idNode === connection.from);

        const toNode = nodes.find((n) => n.idNode === connection.to);

        if (!fromNode || !toNode) return null;

        const startX = fromNode.x * width;
        const startY = fromNode.y * height;

        const endX = toNode.x * width;
        const endY = toNode.y * height;

        // Diferencias geométricas
        const dx = endX - startX;
        const dy = endY - startY;

        // Curvatura dinámica basada en distancia
        const curveY = Math.max(Math.abs(dy) * 0.35, 80);

        // Curvatura horizontal proporcional
        const curveX = dx * 0.15;

        // Puntos de Control
        const cp1x = startX + curveX;
        const cp1y = startY + curveY;

        const cp2x = endX - curveX;
        const cp2y = endY - curveY;

        const path = `
          M ${startX} ${startY}
          C
            ${cp1x} ${cp1y},
            ${cp2x} ${cp2y},
            ${endX} ${endY}
        `;

        const styles = {
          primary: {
            stroke: "rgba(255,255,255,0.55)",
            strokeWidth: 3,
            strokeDasharray: undefined,
          },

          secondary: {
            stroke: "rgba(255,255,255,0.28)",
            strokeWidth: 1.9,
            strokeDasharray: "10 5",
          },

          soft: {
            stroke: "rgba(255,255,255,0.5)",
            strokeWidth: 1,
            strokeDasharray: "4 6",
          },
        };

        const style = styles[connection.type ?? "secondary"];

        return (
          <path
            data-type={connection.type}
            key={`${connection.from}-${connection.to}`}
            d={path}
            fill="none"
            stroke={style.stroke}
            strokeWidth={style.strokeWidth}
            strokeDasharray={style.strokeDasharray}
            strokeLinecap="round"
            strokeOpacity={0.25}
            className="
              drop-shadow-[0_0_8px_rgba(255,255,255,0.25)]
            "
          />
        );
      })}
    </svg>
  );
}
