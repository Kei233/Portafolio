import { useGSAP } from "@gsap/react";
import { useRef } from "react";

import { Project1 } from "./Project1";
import { SlideMe } from "./SlideMe";

import { projectsAnimation } from "../animations/projectsAnimation";

export function Projects() {
  const projectsRef = useRef<HTMLElement | null>(null);

  useGSAP(() => projectsAnimation(projectsRef), { scope: projectsRef });

  return (
    <section
      ref={projectsRef}
      className="flex justify-center px-8 lg:px-12 lg:py-18 min-h-screen w-full"
    >
      <div className="ObserveContent relative h-screen aspect-video z-10 shadow-2xl shadow-black rounded-lg border border-white/20 overflow-hidden">
        <SlideMe />
        <Project1 />
      </div>
    </section>
  );
}
