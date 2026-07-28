import {
  nodesFront,
  nodesBack,
  connectionsFront,
  connectionsBack,
  colors,
} from "./data";

import { SkillNode } from "./SkillNode";
import { Connections } from "./Connections";
import { Card } from "./Card";

import gsap from "gsap";
import { treeAnimation } from "../../animations/treeAnimation";

import { useGSAP } from "@gsap/react";

import { useMemo, useRef, useState, useLayoutEffect, useContext } from "react";

import { NodeContext } from "./NodeContext";

import type { StackKeysFront, StackKeysBack, NodeType } from "./types";

export function SkillTree() {
  const finish = useRef<boolean>(false);
  const refTree = useRef<HTMLElement | null>(null);
  const refNodes = useRef<HTMLDivElement | null>(null);
  const treeTL = useMemo(() => gsap.timeline(), []);
  const timeoutRef = useRef<number | null>(null);
  const buttonTimeoutRef = useRef<number>(0);
  const finishButton = useRef<boolean>(true);

  const [size, setSize] = useState({
    width: 0,
    height: 0,
  });

  const [front, setFront] = useState(true);

  const nodes = front ? nodesFront : nodesBack;

  useLayoutEffect(() => {
    if (!refTree.current) return;

    const updateSize = () => {
      const rectNodes = refNodes.current!.getBoundingClientRect();

      setSize({
        width: rectNodes.width,
        height: rectNodes.height,
      });
    };

    updateSize();

    const observer = new ResizeObserver(updateSize);

    observer.observe(refTree.current);

    return () => observer.disconnect();
  }, []);

  useGSAP(
    () => {
      treeAnimation(treeTL, refTree.current!, finish);
    },
    { scope: refTree, dependencies: [front], revertOnUpdate: true },
  );

  const context = useContext(NodeContext);

  if (!context) {
    throw new Error("useNodeContext debe usarse dentro del provider");
  }

  const { newNodeId, activeSet, nodeActive } = context;

  function focusNode(id: StackKeysFront | StackKeysBack, active = true) {
    if (!finish.current) return;

    newNodeId(id);

    const nodesAnimation = gsap.utils.selector(refTree.current);
    const elements = nodesAnimation(".animation");

    gsap.killTweensOf(elements);

    if (!active) {
      activeSet({ active: false, nodeActiveNow: "" });

      gsap.to(elements, {
        scale: 1,
        opacity: 1,
        duration: 0.5,
        ease: "back.out(1.7)",
      });
      gsap.set(elements, { filter: `drop-shadow(0px 0px 0px transparent)` });
      return;
    }

    elements.forEach((element) => {
      const nodeId = element.getAttribute("data-id");

      if (nodeId === id) {
        gsap.set(element, {
          opacity: 1,
          scale: 1,
        });

        gsap.to(element, {
          scale: 1.2,
          duration: 0.5,
          ease: "back.out(1.7)",
        });
        gsap.set(element, {
          filter: `drop-shadow(0 0 18px ${colors[id].secondaryVar})`,
        });
      } else {
        gsap.to(element, {
          scale: 0.8,
          opacity: 0.4,
          duration: 0.5,
          ease: "back.out(1.7)",
        });
        gsap.set(element, { filter: `drop-shadow(0px 0px 0px transparent)` });
      }
    });

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      gsap.killTweensOf(elements);

      gsap.to(elements, {
        scale: 1,
        opacity: 1,
        duration: 0.5,
        ease: "back.out(1.7)",
      });

      gsap.set(elements, { filter: `drop-shadow(0px 0px 0px transparent)` });
    }, 26000);
  }

  function noFocusNode(
    idNode: StackKeysFront | StackKeysBack,
    activeNode: NodeType,
  ) {
    const { nodeActiveNow } = activeNode;

    if (!finish.current || !(nodeActiveNow === "")) return;

    newNodeId(idNode);

    activeSet({ active: idNode === nodeActiveNow, nodeActiveNow });
  }

  const upButton = () => {

    if (!finishButton.current) return;

    finishButton.current = false;

    const tween = gsap.fromTo(
      ".toggleBt",
      {
        x: 0,
      },
      {
        x: "+=10%",
        duration: 1,
        ease: "back.in(5)",
        onComplete: () => tween.reverse(),
      },
    );

    clearTimeout(buttonTimeoutRef.current);

    buttonTimeoutRef.current = window.setTimeout(() => {
      finishButton.current = true;
    }, 1500);
  };

  return (
    <section
      ref={refTree}
      onClick={() => {
        newNodeId("");
        focusNode("", false);
        activeSet({ active: false, nodeActiveNow: "" });
      }}
      className="relative w-full min-h-screen lg:h-screen mb-16 box-border flex flex-col-reverse lg:flex-row"
    >
      <Card />
      <button
        className="toggleBt absolute lg:bottom-1/2 bottom-3/4 rounded-full right-6 p-2 border-2 border-white/50 transition-colors duration-500 ease-in-out z-50 focus:outline-none focus-visible:border-baltic-blue-800 focus-visible:*:text-baltic-blue-700"
        onClick={() => setFront((prev) => !prev)}
        onMouseEnter={() => upButton()}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M5 12h14" />
          <path d="m12 5 7 7-7 7" />
        </svg>
      </button>
      <div
        ref={refNodes}
        className="w-full lg:max-w-2/3 h-screen min-h-screen relative z-30"
      >
        {nodes.map((node) => (
          <SkillNode
            onMouseEnter={() => noFocusNode(node.idNode, nodeActive)}
            onClick={(e) => {
              e.stopPropagation();
              focusNode(node.idNode);
              activeSet({ active: true, nodeActiveNow: `${node.idNode}` });
            }}
            timeline={treeTL}
            key={node.idNode}
            idNode={node.idNode}
            dataId={node.idNode}
            x={node.x * size.width}
            y={node.y * size.height}
          />
        ))}

        <Connections
          nodes={nodes}
          timeline={treeTL}
          onClick={() => newNodeId("")}
          connections={front ? connectionsFront : connectionsBack}
          width={size.width}
          height={size.height}
        />
      </div>
    </section>
  );
}