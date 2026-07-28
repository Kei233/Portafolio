import { stackAll } from "./types";
import type { StackKeysFront, StackKeysBack } from "./types";
import { useRef } from "react";

type Props = {
  onMouseEnter?: () => void;
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
  dataId?: string;
  id?: string;
  timeline: GSAPTimeline;
  idNode: StackKeysFront | StackKeysBack;
  x: number;
  y: number;
};

const shadowColors: Record<StackKeysFront | StackKeysBack, string> = {
  "": "",

  html: "hover:shadow-orange-500",

  css: "hover:shadow-purple-500",

  js: "hover:shadow-yellow-500",

  ts: "hover:shadow-blue-500",

  react: "hover:shadow-pacific-cyan-500",

  redux: "hover:shadow-purple-500",

  tailwind: "hover:shadow-sky-500",

  gsap: "hover:shadow-emerald-500",

  vite: "hover:shadow-violet-500",

  router: "hover:shadow-red-500",

  node: "hover:shadow-green-500",

  express: "hover:shadow-gray-500",

  postgres: "hover:shadow-blue-700",

  mysql: "hover:shadow-blue-500",

  redis: "hover:shadow-red-700",

  git: "hover:shadow-orange-700",

  github: "hover:shadow-gray-700",

  npm: "hover:shadow-red-500",

};

export function SkillNode({
  id,
  idNode,
  x,
  y,
  onMouseEnter,
  onClick,
  dataId,
}: Props) {
  const refNode = useRef<HTMLDivElement>(null);

  const icon = stackAll[idNode];

  return (
    <div
      id={id}
      ref={refNode}
      data-id={dataId}
      onMouseEnter={onMouseEnter}
      onClick={onClick}
      className={`animation absolute p-2 w-14 h-14
          text-white
          border
          border-white/5
          bg-black/20
          backdrop-blur-xl
          z-10
          hover:shadow-[0px_0px_24px]
          ${shadowColors[idNode]}
          -translate-x-1/2
          transition-shadow
          duration-200
          ease-in-out
          -translate-y-1/2
          `}
      style={{
        left: x,
        top: y,
      }}
    >
      <img
        className="
          w-full h-full object-contain select-none
        "
        fetchPriority="high"
        loading="eager"
        src={`https://cdn.simpleicons.org/${icon}`}
      />
    </div>
  );
}
