import { useRef } from "react";

import { useGSAP } from "@gsap/react";

import SplitType from "split-type";

import gsap from "gsap";

import { FlipDemo } from "./FlipDemo.tsx";

const colors = [
  "oklch(51.79% 0.085 211.2)",
  "oklch(79.44% 0.114 208.83)",
  "oklch(67.79% 0.14 236.4)",
  "oklch(19.33% 0.032 230.44)",
  "oklch(73.47% 0.121 231.91)"
]

export function AnimateSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const title = new SplitType(".titleAnimate");
      const sectionAnimateTL = gsap.timeline({
        scrollTrigger: {
            trigger: sectionRef.current,
            start: "40% center",
          },
      });

      const words = title.words;

      const arrayWords = gsap.utils.toArray(words);

      if (!words || !arrayWords) return;

      sectionAnimateTL
        .from(title.chars, {
          opacity: 0,
          y: 40,
          ease: "back.out(1.8)",
          duration: 0.7,
          stagger: 0.08,
        })
        .add(() => pulseRandomWord());

      function pulseRandomWord(currentWord?: HTMLElement){

        let word = gsap.utils.random(arrayWords);

        if(currentWord){
          while(currentWord === word){
          word = gsap.utils.random(arrayWords);
        }
      }

        if(!word)return;

        const tl = gsap.timeline()

          tl.fromTo(word, {
            color: "oklch(100% 0 0)",
          }, {
            color: () => gsap.utils.random(colors),
            duration: 1.5,
            ease: "sine.inOut",
          }).fromTo(word, {
            y: 0,
          }, {
            y: -10,
            duration: 0.75,
            ease: "sine.inOut",
          }, 0.8)

          tl.eventCallback("onComplete", () => {
            tl.reverse();
          })

          tl.
          eventCallback("onReverseComplete", () => {
            const currentWord = word as HTMLElement;
            pulseRandomWord(currentWord);
          })

      }
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      className="w-full flex flex-col md:flex-row justify-center items-center min-h-screen md:h-screen lg:p-8 p-4"
    >
      <div className="w-full md:w-1/2 justify-center items-center">
        <h3 className="titleAnimate lg:text-6xl text-5xl font-bold mb-12 md:mb-8">
          Has que tus paginas tengan vida.
        </h3>
        <p className="sm:text-xl text-lg leading-relaxed tracking-wide">
          Toda pagina web tiene una historia que contar, y con las animaciones
          puedo hacer que esa historia sea más atractiva y memorable para tus
          usuarios. Story Telling, interactividad y UI en su maxima expresión.
          Las paginas más memorables no son estaticas.
        </p>
      </div>
      <div className="w-full md:w-1/2 h-screen md:h-full relative flex justify-center items-center">
        <FlipDemo />
      </div>
    </section>
  );
}
