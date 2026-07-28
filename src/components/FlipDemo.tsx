import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { useResize } from "../hooks/useResize";

import { animationFlip } from "../animations/flipAnimation";

export function FlipDemo() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const boxPositions = useRef([0, 1, 2, 3]);

  const { width, height } = useResize(sectionRef);

  useGSAP(
    () => animationFlip({ sectionRef: sectionRef, boxPositions: boxPositions }),
    { scope: sectionRef, dependencies: [width, height], revertOnUpdate: true },
  );

  return (
    <div
      ref={sectionRef}
      className="justify-self-center relative lg:h-3/5 md:h-2/5 h-[35%] aspect-square border border-white shadow-[0px_0px_48px] shadow-cyan-400/50"
    >
      {Array.from({ length: 4 }).map((_, i) => (
        <div
          key={i}
          className="boxGrid absolute h-1/3 w-1/3 aspect-square bg-cyan-500 z-0"
        />
      ))}

      <div className="pointer-events-none flex h-full w-full flex-wrap">
        {Array.from({ length: 9 }).map((_, i) => (
          <div key={i} className="h-1/3 w-1/3 border border-white z-10" />
        ))}
      </div>
    </div>
  );
}
