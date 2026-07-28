import { techInfo, techDetails, colors } from "./data";

import { useContext, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import { NodeContext } from "./NodeContext";

export function Card() {
  const cardContentRef = useRef<HTMLDivElement | null>(null);

  const context = useContext(NodeContext);

  if (!context) {
    throw new Error("useNodeContext debe usarse dentro del provider");
  }

  const { nodeId, nodeActive } = context;
  const { active, nodeActiveNow } = nodeActive;

  const { gradient } = colors[nodeId];

  const vacio = nodeId === "";
  const nodeIsActive = nodeActiveNow === nodeId;

  const nodo = techDetails[nodeId];
  const preview = !nodeIsActive || vacio;

  useGSAP(() => {
    if (!cardContentRef.current) return;

    const card = cardContentRef.current;
    const items = card.querySelectorAll(".card-item");
    const title = card.querySelector(".card-title");
    const descrip = card.querySelectorAll(".card-descrip");

    gsap.killTweensOf([card, title, ...Array.from(items)]);

    if (vacio) {
      gsap.to(card, { opacity: 0.55, scale: 0.985 });
      return;
    }

    if (nodeIsActive && !vacio) {
      gsap.to(card, {
        opacity: 1,
        scale: 1,
        duration: 0.1,
        ease: "power2.out",
      });
    }

    if (title) {
      gsap.fromTo(
        title,
        { y: 12, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.4,
          delay: 0.06,
          ease: "power2.out",
        },
      );
    }

    if (items.length) {
      gsap.fromTo(
        items,
        { x: -10, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.35,
          stagger: 0.07,
          delay: 0.1,
          ease: "power2.out",
        },
      );
    }

    if (descrip.length) {
      gsap.fromTo(
        descrip,
        {
          x: -10,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          duration: 0.35,
          delay: 0.23,
          ease: "power2.out",
        },
      );
    }
  }, [nodeId, vacio, nodeIsActive]);

  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className="card-animate relative lg:w-1/3 w-10/12 self-center h-screen lg:h-full flex justify-center items-center lg:ml-6"
    >
      <div className="absolute inset-0 flex items-center justify-center text-center">
        <div
          ref={cardContentRef}
          key={nodeId}
          className={`
            w-full
            h-10/12
            flex
            flex-col
            rounded-2xl
            backdrop-blur-md
            shadow-[0_22px_50px_-20px_rgba(0,0,0,0.7)]
            transition-all
            duration-500
            ease-in-out
            z-30
            overflow-hidden
            ${preview ? "items-start justify-center" : ""}
            ${vacio ? "px-10 border border-silver-100/30 justify-center" : "px-7 py-8"}
            ${vacio ? "bg-silver-900/20" : `bg-linear-to-br ${gradient}`}
            ${!active ? "opacity-65 saturate-75" : "opacity-100"}
          `}
        >
          {preview ? (
            <>
              <h3
                className={`
                  card-title
                  font-semibold
                  tracking-wide
                  ${
                    vacio
                      ? "text-2xl text-silver-200/60 text-center leading-relaxed"
                      : "text-3xl text-white mb-4"
                  }
                `}
              >
                {vacio
                  ? "Interactua con una tecnologia para saber más de mis habilidades."
                  : nodeId.toUpperCase()}
              </h3>

              <ol
                className={`flex flex-col gap-2.5 w-full items-start ${
                  vacio
                    ? "hidden"
                    : "list-disc list-inside marker:text-pacific-cyan-300/80"
                }`}
              >
                {techInfo[nodeId]?.map((info, i) => (
                  <li
                    key={i}
                    className="card-item text-sm md:text-base text-silver-100/90 font-medium leading-relaxed"
                  >
                    {info}
                  </li>
                ))}
              </ol>
            </>
          ) : (
            <>
              <div>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="card-title text-3xl font-semibold tracking-wide text-white">
                      {nodo.title}
                    </h3>

                    <p className="mt-1 text-sm text-silver-200/75">
                      {nodo.category}
                    </p>
                  </div>

                  <span className="text-sm text-silver-100/80 whitespace-nowrap">
                    {nodo.experience}
                  </span>
                </div>

                <div className="mt-4">
                  <span
                    className="
                      inline-flex
                      rounded-full
                      px-3
                      py-1
                      text-xs
                      font-medium
                      bg-white/10
                      text-silver-50
                    "
                  >
                    {nodo.level}
                  </span>
                </div>
              </div>

              <div className="flex-1 flex flex-col justify-center">
                <p className="card-descrip text-silver-50/92 leading-relaxed">
                  {nodo.description}
                </p>
              </div>

              <div className="mt-6">
                <h4 className="text-sm font-semibold uppercase tracking-wider text-silver-200/70 mb-3">
                  Related Technologies
                </h4>

                <div className="flex flex-wrap gap-2">
                  {nodo.related.map((node) => (
                    <span
                      key={node}
                      className="
                        card-item
                        px-3
                        py-1
                        rounded-lg
                        text-sm
                        bg-black/15
                        text-silver-100
                        border
                        border-white/10
                      "
                    >
                      {techDetails[node]?.title ?? node}
                    </span>
                  ))}
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}